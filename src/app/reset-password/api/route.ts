import User from "../../models/User.model";
import bcrypt from "bcrypt";
import { ApiResponse } from "hooks/apiResponse";
import jwt, { JwtPayload } from "jsonwebtoken";
import { dbConnect } from "lib/mongodb";

export async function POST(req: Request) {
  try {
    await dbConnect();
    const { newPassword, token } = await req.json();
    let decoded;
    try {
      decoded = jwt.verify(
        token,
        process.env.NEXT_JWT_TOKEN_SECRET!
      ) as JwtPayload;
    } catch (err) {
      return ApiResponse({
        status: 400,
        message: `${err} Invalid token`,
        success: false,
      });
    }

    const user = await User.findOne({
      email: decoded.email,
      resetPasswordToken: token,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
      return ApiResponse({
        status: 400,
        message: "Invalid or expired token",
        success: false,
      });
    }

    // Hash new password and save
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    user.resetPasswordToken = null;
    user.resetPasswordExpire = null;
    await user.save();

    return ApiResponse({
      status: 200,
      message: "Password reset successful",
      success: true,
    });
  } catch (error) {
    return ApiResponse({
      status: 500,
      message: `${error} Something went wrong`,
      success: false,
    });
  }
}
