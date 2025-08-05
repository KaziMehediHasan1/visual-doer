import User from "../../models/User.model";
import bcrypt from "bcrypt";
import { ApiResponse } from "hooks/apiResponse";
import { dbConnect } from "lib/mongodb";

// POST METHOD
export async function POST(req: Request) {
  try {
    await dbConnect();
    const { name, email, password } = await req.json();
    const hash = await bcrypt.hash(password, 10);
    const result = new User({ name, email, password: hash });
    await result.save();
    if (result) {
      return ApiResponse({
        status: 201,
        message: "Register Successfully",
        success: true,
        data: result,
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
