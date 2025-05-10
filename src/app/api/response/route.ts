import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { email, answer } = await request.json();
    console.log(`RSVP received: ${email} answered ${answer}`);

    if (answer === 'yes') {
      // Send notification email
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: true,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      });

      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: process.env.NOTIFY_EMAIL,
        subject: 'RSVP Accepted: Hogwarts Movie Night',
        text: `${email} has accepted your Hogwarts Movie Night invitation!`,
        html: `<p><b>${email}</b> has <span style='color:green;font-weight:bold;'>accepted</span> your Hogwarts Movie Night invitation! 🦉✨</p>`,
      });
    }

    return NextResponse.json({ message: 'RSVP recorded' }, { status: 200 });
  } catch {
    // handle error if needed
    return NextResponse.json({ error: 'Failed to record RSVP' }, { status: 500 });
  }
} 