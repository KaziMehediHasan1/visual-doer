import { ApiResponse } from "@/hooks/apiResponse";
import { dbConnect } from "@/lib/mongodb";
import Skill from "@/models/Skill.mode";

// POST FUNCTION FOR CREATING SKILLS
export async function POST(req: Request) {
  try {
    await dbConnect();
    const { title, description, keyword } = await req.json();
    if (title && description) {
      const result = new Skill({ title, description, keyword });
      await result.save();
      if (result) {
        return ApiResponse({
          status: 201,
          message: "skill added successfully",
          data: result,
          success: true,
        });
      }
    }
  } catch (err) {
    return ApiResponse({
      status: 404,
      message: ` ${err}`,
      success: false,
    });
  }
}

// GET FUNCTION
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const limit = parseInt(searchParams.get("limit") || "3");
    const lastid = searchParams.get("lastid");
    const query = lastid ? { _id: { $lt: lastid } } : {};
    await dbConnect();
    const result = await Skill.find(query).sort({ _id: -1 }).limit(limit);
    if (result) {
      return ApiResponse({
        status: 201,
        message: "get all skills successfully done",
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

// DELETE FUNCTION
export async function DELETE(req: Request) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const result = await Skill.findByIdAndDelete({ _id: id });
    if (result) {
      return ApiResponse({
        status: 201,
        message: "Delete Successfully done",
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
