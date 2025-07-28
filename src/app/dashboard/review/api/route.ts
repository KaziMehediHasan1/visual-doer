import { ApiResponse } from "@/hooks/apiResponse";
import { dbConnect } from "@/lib/mongodb";
import Review from "@/models/Review";

// REVIEW CREATE
export async function POST(req: Request) {
  try {
    const {
      review,
      totalReview,
      clientName,
      designation,
      company,
      companyImage,
    } = await req.json();
    await dbConnect();
    if (review && totalReview && clientName && designation && companyImage ) {
      const result = await new Review({
        review,
        totalReview,
        clientName,
        designation,
        company,
        companyImage ,
      });
      await result.save();
      if (result) {
        return ApiResponse({
          status: 201,
          success: true,
          message: "Review Creating successfull",
          data: result,
        });
      }
    }
  } catch (error) {
    return ApiResponse({
      status: 404,
      success: false,
      message: `${error}`,
    });
  }
}

// GET REVIEWS
export async function GET() {
  try {
    await dbConnect();
    const result = await Review.find();
    if (result) {
      return ApiResponse({
        status: 201,
        message: "reviews get successfull",
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

// DELETE REVIEW
export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const result = await Review.findByIdAndDelete({ _id: id });
    if (result) {
      return ApiResponse({
        status: 201,
        success: true,
        message: "review deleted successfully",
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


