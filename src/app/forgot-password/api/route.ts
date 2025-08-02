import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import User from "@/models/User.model";
import { ApiResponse } from "@/hooks/apiResponse";
import { sendEmail } from "@/lib/sendEmail";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  const user = await User.findOne({ email });
  if (!user)
    return ApiResponse({
      message: "User not found",
      status: 404,
      success: false,
    });

  const token = crypto.randomBytes(32).toString("hex");
  const hashed = crypto.createHash("sha256").update(token).digest("hex");
  console.log(token, hashed);
  user.resetPasswordToken = hashed;
  user.resetPasswordExpire = Date.now() + 15 * 60 * 1000; // 15 mins
  await user.save();

  const resetUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/reset-password?token=${token}`;

  await sendEmail({
    to: user.email,
    subject: "Password Reset",
    html: `<p>Click here to reset password: <a href="${resetUrl}">Reset</a></p>`,
  });

  return ApiResponse({
    message: "Reset link sent",
    status: 200,
    success: true,
  });
}
