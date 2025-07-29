import { ApiResponse } from "@/hooks/apiResponse";
import { dbConnect } from "@/lib/mongodb";
import Team from "@/models/Team.model";

// TEAM ADD
export async function POST(req: Request) {
  try {
    const { image, name, designation } = await req.json();
    console.log(image,name,designation,"api dataa ssJ")
    await dbConnect();
    if (image && name && designation) {
      const result = await new Team({ image, name, designation });
      await result.save();
      if (result) {
        return ApiResponse({
          status: 201,
          success: true,
          message: "Team Member add successfull",
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

// GET TEAMS
export async function GET() {
  try {
    await dbConnect();

    const result = await Team.find();
    if (result) {
      return ApiResponse({
        status: 201,
        success: true,
        message: "Team members get successfull",
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

// DELETE TEAMS
export async function DELETE(req: Request) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const result = await Team.findByIdAndDelete({ _id: id });
    if (result) {
      return ApiResponse({
        status: 201,
        success: true,
        message: "Team member deleted successfull",
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
