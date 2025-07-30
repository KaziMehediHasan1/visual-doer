import mongoose from "mongoose";

export const dbConnect = async () => {
  const uri = process.env.NEXT_MONGODB_URI;
  try {
    await mongoose.connect(uri as string);
    // console.log("Database connected successfully");
  } catch (error) {
    console.log("Database connection fail", error);
  }
};
