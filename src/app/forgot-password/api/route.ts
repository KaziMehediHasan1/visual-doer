import { NextRequest } from "next/server";
import crypto from "crypto";
import User from "@/models/User.model";
import { ApiResponse } from "@/hooks/apiResponse";
import { sendMail } from "@/lib/sendEmail";
import { dbConnect } from "@/lib/mongodb";

export async function POST(req: NextRequest) {
  const email  = await req.json();
  console.log(email, "check forgot mail find");

  await dbConnect();
  const user = await User.findOne({ email });
  if (!user) {
    return ApiResponse({
      message: "User not found",
      status: 404,
      success: false,
    });
  }

  const token = crypto.randomBytes(32).toString("hex");
  const hashed = crypto.createHash("sha256").update(token).digest("hex");
  user.resetPasswordToken = hashed;
  user.resetPasswordExpire = new Date(Date.now() + 15 * 60 * 1000); 
  await user.save();

  const resetUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/reset-password?token=${token}`;

  await sendMail({
    email: "kazimehedihasan243@gmail.com",
    sendTo: email,
    subject: "Forgot Password Token",
    html: `
       <p>Your token is: <strong>${token}</strong></p>
       <p>Click the link to reset your password:</p>
       <a href="${resetUrl}">Reset Password</a>
    `,
  });

  return ApiResponse({
    message: "Reset link sent successfully!",
    status: 200,
    success: true,
  });
}
