import { NextResponse } from 'next/server';
import dbConnect from '../../../lib/mongodb';
import Contact from '../../../models/Contact';

const WEB3FORMS_ACCESS_KEY = process.env.VITE_WEB3FORMS_ACCESS_KEY;

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Please provide all required fields' },
        { status: 400 }
      );
    }

    // 1. Send email via Web3Forms
    try {
      const web3FormsPayload = {
        access_key: WEB3FORMS_ACCESS_KEY,
        name,
        email,
        phone: phone || '',
        message,
        subject: `New Project Inquiry from ${name}`,
        from_name: name,
      };

      const web3Response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(web3FormsPayload),
      });

      // Safely parse — only attempt JSON if response is actually JSON
      const contentType = web3Response.headers.get('content-type') || '';
      if (contentType.includes('application/json')) {
        const web3Result = await web3Response.json();
        if (!web3Result.success) {
          console.error('Web3Forms returned error:', web3Result);
        }
      } else {
        const text = await web3Response.text();
        console.error('Web3Forms returned non-JSON response:', text.substring(0, 200));
      }
    } catch (web3Error) {
      // Email failure should not block saving to DB
      console.error('Web3Forms request failed:', web3Error.message);
    }

    // 2. Save to MongoDB Atlas
    await dbConnect();
    const newContact = await Contact.create({
      name,
      email,
      phone: phone || '',
      message,
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Message sent successfully!',
        data: newContact 
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit form', error: error.message },
      { status: 500 }
    );
  }
}
