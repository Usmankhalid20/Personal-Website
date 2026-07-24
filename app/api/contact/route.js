import { NextResponse } from 'next/server';
import dbConnect from '../../../lib/mongodb';
import Contact from '../../../models/Contact';

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
    const web3FormsPayload = {
      access_key: process.env.WEB3FORMS_ACCESS_KEY,
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

    const web3Result = await web3Response.json();

    if (!web3Result.success) {
      console.error('Web3Forms error:', web3Result);
      // Don't block the user if email fails, still try to save to DB
    }

    // 2. Save to MongoDB Atlas
    await dbConnect();
    const newContact = await Contact.create({
      name,
      email,
      phone,
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
