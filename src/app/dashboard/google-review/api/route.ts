import GoogleReview from "app/models/GoogleReview.model";
import { ApiResponse } from "hooks/apiResponse";
import { dbConnect } from "lib/mongodb";

// ADD GOOGLE REVIEW
export async function POST(req: Request) {
  try {
    const { review } = await req.json();
    await dbConnect();
    const result = new GoogleReview({ review });
    console.log(result,"google review")
    await result.save();
    if (result) {
      return ApiResponse({
        status: 201,
        success: true,
        message: "Google Review add successfull",
        data: result,
      });
    }
  } catch (error) {
    return ApiResponse({
      status: 404,
      success: false,
      message: `${error}`,
    });
  }
}

// GET ALL GOOGLE REVIEWS
export async function GET() {
  try {
    await dbConnect();
    const result = await GoogleReview.find();
    if (result) {
      return ApiResponse({
        status: 201,
        success: true,
        message: "Get all google reviews",
        data: result,
      });
    }
  } catch (error) {
    return ApiResponse({
      status: 404,
      success: false,
      message: `${error}`,
    });
  }
}

// DELETE GOOGLE REVIEW
export async function DELETE(req: Request) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const result = await GoogleReview.findByIdAndDelete({ _id: id });
    if (result) {
      return ApiResponse({
        status: 201,
        success: true,
        message: "Deleted Successfull",
        data: result,
      });
    }
  } catch (error) {
    return ApiResponse({
      status: 404,
      success: false,
      message: `${error}`,
    });
  }
}
