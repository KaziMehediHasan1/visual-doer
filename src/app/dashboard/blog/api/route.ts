import { ApiResponse } from "@/hooks/apiResponse";
import { dbConnect } from "@/lib/mongodb";
import Blog from "@/models/Blog.model";

// BLOG CREATED SUCCESSFULL
export async function POST(req: Request) {
  try {
    const { title, subtitle, description, keyword, image } = await req.json();
    await dbConnect();
    if (title && subtitle && description && keyword && image) {
      const result = await new Blog({
        title,
        subtitle,
        description,
        keyword,
        image,
      });
      await result.save();
      if (result) {
        return ApiResponse({
          status: 201,
          success: true,
          data: result,
          message: "blog added successfull",
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

// GET ALL BLOGS
export async function GET() {
  try {
    await dbConnect();
    const result = await Blog.find();
    if (result) {
      return ApiResponse({
        status: 201,
        success: true,
        message: "blog get successfull",
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

// DELETE BLOG
export async function DELETE(req: Request) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const result = await Blog.findByIdAndDelete({ _id: id });
    if (result) {
      return ApiResponse({
        status: 201,
        success: true,
        message: "blog deleted successfull",
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
