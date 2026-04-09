import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface BookingRequest {
  name: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  nights: number;
  total: number;
  guests: number;
  hasDog: boolean;
  dogBreed: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body: BookingRequest = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.checkIn || !body.checkOut) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const emailHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1c1917; border-bottom: 2px solid #d97706; padding-bottom: 10px;">
          New Booking Request — Sanctuary Cottage
        </h2>

        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr>
            <td style="padding: 8px 0; color: #78716c; width: 140px;">Guest Name</td>
            <td style="padding: 8px 0; font-weight: 600;">${body.name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #78716c;">Email</td>
            <td style="padding: 8px 0;"><a href="mailto:${body.email}">${body.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #78716c;">Phone</td>
            <td style="padding: 8px 0;">${body.phone || "Not provided"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #78716c;">Guests</td>
            <td style="padding: 8px 0;">${body.guests}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #78716c;">Bringing a dog?</td>
            <td style="padding: 8px 0;">${body.hasDog ? "Yes" : "No"}</td>
          </tr>
          ${
            body.hasDog && body.dogBreed
              ? `<tr>
                  <td style="padding: 8px 0; color: #78716c;">Dog breed</td>
                  <td style="padding: 8px 0; font-weight: 600;">${body.dogBreed}</td>
                </tr>`
              : ""
          }
        </table>

        <div style="background: #fef3c7; padding: 16px; border-radius: 8px; margin: 20px 0;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 6px 0; color: #78716c;">Check-in</td>
              <td style="padding: 6px 0; font-weight: 600; text-align: right;">${body.checkIn}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #78716c;">Check-out</td>
              <td style="padding: 6px 0; font-weight: 600; text-align: right;">${body.checkOut}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #78716c;">Nights</td>
              <td style="padding: 6px 0; font-weight: 600; text-align: right;">${body.nights}</td>
            </tr>
            <tr style="border-top: 1px solid #d97706;">
              <td style="padding: 10px 0 6px; font-weight: 700; font-size: 18px;">Total</td>
              <td style="padding: 10px 0 6px; font-weight: 700; font-size: 18px; text-align: right;">$${body.total} NZD</td>
            </tr>
          </table>
        </div>

        ${
          body.message
            ? `<div style="margin: 20px 0;">
                <p style="color: #78716c; margin-bottom: 6px;">Message from guest:</p>
                <p style="background: #f5f5f4; padding: 12px; border-radius: 8px;">${body.message}</p>
              </div>`
            : ""
        }

        <p style="color: #a8a29e; font-size: 12px; margin-top: 30px;">
          This booking request was sent from the Sanctuary Cottage website.
          Please reply directly to the guest at ${body.email} to confirm or discuss.
        </p>
      </div>
    `;

    await transporter.sendMail({
      from: `"Sanctuary Cottage" <${process.env.SMTP_USER}>`,
      to: "viktoriashouseofbeauty@gmail.com",
      replyTo: body.email,
      subject: `Booking Request: ${body.checkIn} — ${body.checkOut} (${body.nights} nights)`,
      html: emailHtml,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Booking email error:", error);
    return NextResponse.json(
      { error: "Failed to send booking request" },
      { status: 500 }
    );
  }
}
