import { NextRequest } from "next/server";
import User from "@/models/User.model";
import { ApiResponse } from "@/hooks/apiResponse";
import { sendMail } from "@/lib/sendEmail";
import { SignToken, verifyToken } from "@/lib/auth";

export async function POST(req: NextRequest) {
  const email = await req.json();
  console.log(email, "check forgot mail find");
  const user = await User.findOne({ email });
  if (!user)
    return ApiResponse({
      message: "User not found",
      status: 404,
      success: false,
    });
  console.log(user, "user ace kina");

  const token = SignToken(email);
  const hashed = verifyToken(token);
  console.log(token, hashed, "hashed dekhbo r token o");
  user.resetPasswordToken = hashed;
  user.resetPasswordExpire = Date.now() + 15 * 60 * 1000; // 15 mins
  await user.save();

  const resetUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/reset-password?token=${token}`;

  await sendMail({
    email: "kazimehedihasan243@gmail.com",
    sendTo: email,
    subject: "forgot password token",
    html: `
       <p>Your token is: <strong>${token}</strong></p>
       <p>Click the link to reset your password:</p>
       <a href="${resetUrl}">reset password</a>
    `,
  });

  return ApiResponse({
    message: "Reset link sent successfully!",
    status: 200,
    success: true,
  });
}
