import User from "../../models/User.model";
import bcrypt from "bcrypt";
import { ApiResponse } from "hooks/apiResponse";
import { SignToken } from "lib/auth";
import { dbConnect } from "lib/mongodb";

export async function POST(req: Request) {
  try {
    await dbConnect();
    const { email, password } = await req.json();
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("user not found");
    }
    const verifyPass = await bcrypt.compare(password, user.password);
    if (!verifyPass) {
      throw new Error("email or password is wrong");
    }
    const token = SignToken({
      email: user?.email,
      id: user?._id,
    });

    if (verifyPass && user) {
      return ApiResponse({
        status: 201,
        message: "Login Successfull",
        success: true,
        data: user,
        token: token,
      });
    }
  } catch (error) {
    return ApiResponse({
      status: 404,
      message: `${error}`,
      success: false,
    });
  }
}
