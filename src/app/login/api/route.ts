import { ApiResponse } from "@/hooks/apiResponse";
import { dbConnect } from "@/lib/mongodb";


export async function GET(req: Request) {
  try {
    await dbConnect();
    const { name, email, password } = await req.json();
    console.log(name,email, password);
    
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
