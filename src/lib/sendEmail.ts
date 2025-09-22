// import nodemailer from "nodemailer";
// const SMTP_SERVER_USERNAME = process.env.NEXT_SMTP_USERNAME;
// const SMTP_SERVER_PASSWORD = process.env.NEXT_SMTP_PASSWORD;
// const SITE_MAIL_RECIEVER = process.env.NEXT_PUBLIC_ADMIN_MAIL;
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   host: "smtp.ethereal.email",
//   port: 587,
//   secure: false,
//   auth: {
//     user: SMTP_SERVER_USERNAME,
//     pass: SMTP_SERVER_PASSWORD,
//   },
// });

// export async function sendMail({
//   email,
//   sendTo,
//   subject,
//   html,
// }: {
//   email: string;
//   sendTo?: string;
//   subject: string;
//   html?: string;
// }) {
//   const info = await transporter.sendMail({
//     from: email,
//     to: sendTo || SITE_MAIL_RECIEVER,
//     subject: subject,
//     text: "partho bhai  , password set koren",
//     html: html ? html : "",
//   });
//   console.log("Message Sent", info.messageId);
//   console.log("Mail sent to", SITE_MAIL_RECIEVER);
//   return info;
// }

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const body = await req.json();
  const { email, message } = body;

  console.log("just check:", email, message);

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: email,
      to: process.env.ADMIN_MAIL,
      subject: "New Contact Message",
      text: message,
      html: `<p>${message}</p>`,
    });

    return NextResponse.json({ success: true, id: info.messageId });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to send mail" }, { status: 500 });
  }
}
