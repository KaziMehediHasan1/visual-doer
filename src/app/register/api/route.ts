import { ApiResponse } from "@/hooks/apiResponse";
import { dbConnect } from "@/lib/mongodb";
import User from "@/models/user.model";


export async function POST(req: Request) {
  try {
    await dbConnect();
    const {  } = await req.json();
    if (id) {
      const response = await User.findById({ _id: id });
      return ApiResponse({
        status: 201,
        message: "login successfull",
        success: true,
        data: response?.data,
      });
    }

    return ApiResponse({
      status: 201,
      message: "Login Successfull",
      success: true,
      data: {},
    });
  } catch (error) {
    return ApiResponse({
      status: 404,
      message: `${error}`,
      success: false,
    });
  }
}
