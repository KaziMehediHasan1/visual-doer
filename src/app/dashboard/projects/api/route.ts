import Project from "@models/Project.model";
import { ApiResponse } from "hooks/apiResponse";
import { dbConnect } from "lib/mongodb";


// ADD COMPLETED PROJECT DATA
export async function POST(req: Request) {
  try {
    const { images, title, keyword, link } = await req.json();
    await dbConnect();
    const result = new Project({ images, title, keyword, link });
    await result.save();
    if (result) {
      return ApiResponse({
        status: 201,
        success: true,
        message: "Project add successfull",
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

// GET ALL PROJECT
export async function GET() {
  try {
    await dbConnect();
    const result = await Project.find();
    if (result) {
      return ApiResponse({
        status: 201,
        success: true,
        message: "Get all Projects",
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

// DELETE PROJECT
export async function DELETE(req: Request) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const result = await Project.findByIdAndDelete({ _id: id });
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
