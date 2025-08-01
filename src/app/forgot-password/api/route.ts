import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import User from "@/models/User"; // mongoose model
import sendEmail from "@/utils/sendEmail"; // nodemailer helper

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  const user = await User.findOne({ email });
  if (!user)
    return NextResponse.json({ msg: "User not found" }, { status: 404 });

  const token = crypto.randomBytes(32).toString("hex");
  const hashed = crypto.createHash("sha256").update(token).digest("hex");

  user.resetPasswordToken = hashed;
  user.resetPasswordExpire = Date.now() + 15 * 60 * 1000; // 15 mins
  await user.save();

  const resetUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/reset-password?token=${token}`;

  await sendEmail({
    to: user.email,
    subject: "Password Reset",
    html: `<p>Click here to reset password: <a href="${resetUrl}">Reset</a></p>`,
  });

  return NextResponse.json({ msg: "Reset link sent" });
}
