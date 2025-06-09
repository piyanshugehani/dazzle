import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const formData = await req.json();

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // 1. Email to Admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: 'dazzle.outreach@gmail.com',
      subject: `New Contact Form Submission: ${formData.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Inquiry Type:</strong> ${formData.inquiryType}</p>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Company/School:</strong> ${formData.companySchool || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${formData.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message}</p>
      `
    };

    // 2. Acknowledgment to User
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: formData.email, // send to user who filled the form
      subject: 'We received your message at Dazzle Consulting',
      html: `
        <p>Hi ${formData.name},</p>
        <p>Thank you for reaching out to <strong>Dazzle Consulting</strong>! We've received your message and one of our team members will get back to you within 24–48 hours.</p>
        <p><strong>Your submitted message:</strong></p>
        <blockquote>${formData.message}</blockquote>
        <br>
        <p>Best regards,<br>Dazzle Consulting Team</p>
      `
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions)
    ]);

    return NextResponse.json({ message: 'Emails sent successfully' }, { status: 200 });

  } catch (error) {
    console.error('Error sending emails:', error);
    return NextResponse.json({ error: 'Failed to send emails' }, { status: 500 });
  }
}
