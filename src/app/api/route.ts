import { ApiResponse } from "@/hooks/apiResponse";
import { dbConnect } from "@/lib/mongodb";
import Talk from "@/models/Talking.model";

// EMAIL TRANSFER SECTION
export async function POST(req: Request) {
  try {
    const { fullname, email, whatsapp, projectType, projectDetails } =
      await req.json();
    await dbConnect();
    const result = await new Talk({
      fullname,
      email,
      whatsapp,
      projectType,
      projectDetails,
    });
    await result.save();
    if (result) {
      return ApiResponse({
        status: 201,
        success: true,
        message: "Mail successfully transfer",
        data: result,
      });
    }
  } catch (err) {
    return ApiResponse({
      status: 404,
      success: false,
      message: `${err}`,
    });
  }
}

// GET ALL EMAILS
export async function GET() {
  try {
    const result = await Talk.find();
    if (result) {
      return ApiResponse({
        status: 201,
        success: true,
        message: "all mails got it",
        data: result,
      });
    }
  } catch (err) {
    return ApiResponse({
      status: 404,
      success: false,
      message: `${err}`,
    });
  }
}

// DELETE A EMAIL
export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const result = await Talk.findByIdAndDelete({ _id: id });
    if (result) {
      return ApiResponse({
        status: 201,
        success: true,
        message: "Delete mail",
        data: result,
      });
    }
  } catch (err) {
    return ApiResponse({
      status: 404,
      success: false,
      message: `${err}`,
    });
  }
}
