import nodemailer from "nodemailer";
const SMTP_SERVER_USERNAME = process.env.NEXT_SMTP_USERNAME;
const SMTP_SERVER_PASSWORD = process.env.NEXT_SMTP_PASSWORD;
const SITE_MAIL_RECIEVER = process.env.NEXT_PUBLIC_ADMIN_MAIL;
const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false,
  auth: {
    user: SMTP_SERVER_USERNAME,
    pass: SMTP_SERVER_PASSWORD,
  },
});

export async function sendMail({
  email,
  sendTo,
  subject,
  html,
}: {
  email: string;
  sendTo?: string;
  subject: string;
  html?: string;
}) {
  const info = await transporter.sendMail({
    from: email,
    to: sendTo || SITE_MAIL_RECIEVER,
    subject: subject,
    html: html ? html : "",
  });
  console.log("Message Sent", info.messageId);
  console.log("Mail sent to", SITE_MAIL_RECIEVER);
  return info;
}
