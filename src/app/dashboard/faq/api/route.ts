import { ApiResponse } from "@/hooks/apiResponse";
import { dbConnect } from "@/lib/mongodb";
import Faq from "@/models/Faq.model";


// FAQ CREATE
export async function POST(req: Request) {
  try {
    const { question, answer, keyword } = await req.json();
    await dbConnect();
    const result = await new Faq({ question, answer, keyword });
    await result.save();
    if (result) {
      return ApiResponse({
        status: 201,
        message: "Faq created successfully",
        data: result,
        success: true,
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


// FAQ GET
export async function GET(req: Request) {
  try {
    const { question, answer, keyword } = await req.json();
    await dbConnect();
    const result = await new Faq({ question, answer, keyword });
    await result.save();
    if (result) {
      return ApiResponse({
        status: 201,
        message: "Faq created successfully",
        data: result,
        success: true,
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