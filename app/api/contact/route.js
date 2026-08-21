import { NextResponse } from 'next/server';
import dbConnect from '../../../lib/mongodb';
import Contact from '../../../models/Contact';

// Simple in-memory rate limiter: max 5 requests per 10 minutes per IP
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip) {
  const now = Date.now();
  const userRecord = rateLimitMap.get(ip) || { count: 0, resetTime: now + RATE_LIMIT_WINDOW_MS };

  if (now > userRecord.resetTime) {
    userRecord.count = 1;
    userRecord.resetTime = now + RATE_LIMIT_WINDOW_MS;
    rateLimitMap.set(ip, userRecord);
    return false;
  }

  if (userRecord.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  userRecord.count += 1;
  rateLimitMap.set(ip, userRecord);
  return false;
}

export async function POST(request) {
  try {
    // 1. Rate Limiting Check
    const forwardedFor = request.headers.get('x-forwarded-for');
    const clientIp = forwardedFor ? forwardedFor.split(',')[0].trim() : '127.0.0.1';

    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        { success: false, message: 'Too many contact requests from your IP. Please try again in a few minutes.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, phone, message, honeypot } = body;

    // 2. Honeypot check for automated bots
    if (honeypot && String(honeypot).trim() !== '') {
      // Silently discard bot submission
      return NextResponse.json(
        { success: true, message: 'Message processed successfully!' },
        { status: 200 }
      );
    }

    // 3. Strict Type Validation (Prevent NoSQL injection payloads)
    if (
      typeof name !== 'string' ||
      typeof email !== 'string' ||
      typeof message !== 'string' ||
      (phone !== undefined && typeof phone !== 'string')
    ) {
      return NextResponse.json(
        { success: false, message: 'Invalid payload format.' },
        { status: 400 }
      );
    }

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedPhone = phone ? phone.trim() : '';
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      return NextResponse.json(
        { success: false, message: 'Please fill in all required fields (Name, Email, Message).' },
        { status: 400 }
      );
    }

    // 4. Strict Input Length Restrictions
    if (trimmedName.length > 100) {
      return NextResponse.json(
        { success: false, message: 'Name cannot exceed 100 characters.' },
        { status: 400 }
      );
    }
    if (trimmedEmail.length > 150) {
      return NextResponse.json(
        { success: false, message: 'Email cannot exceed 150 characters.' },
        { status: 400 }
      );
    }
    if (trimmedPhone.length > 40) {
      return NextResponse.json(
        { success: false, message: 'Phone number cannot exceed 40 characters.' },
        { status: 400 }
      );
    }
    if (trimmedMessage.length > 3000) {
      return NextResponse.json(
        { success: false, message: 'Message cannot exceed 3000 characters.' },
        { status: 400 }
      );
    }

    // 5. Basic Email Format Validation
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(trimmedEmail)) {
      return NextResponse.json(
        { success: false, message: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    let savedContact = null;
    let dbSuccess = false;

    // 6. Safe Database Storage
    if (process.env.MONGODB_URI) {
      try {
        await dbConnect();
        savedContact = await Contact.create({
          name: trimmedName,
          email: trimmedEmail,
          phone: trimmedPhone,
          message: trimmedMessage,
        });
        dbSuccess = true;
      } catch (dbError) {
        console.error('MongoDB save notice:', dbError.message);
      }
    } else {
      console.warn('MONGODB_URI is not defined in environment variables.');
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Message processed successfully!',
        dbSaved: dbSuccess,
        data: savedContact 
      },
      { status: 201 }
    );

  } catch (error) {
    // Log full error internally for debugging, return generic error to prevent info leakage
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { success: false, message: 'An unexpected error occurred while processing your message.' },
      { status: 500 }
    );
  }
}



