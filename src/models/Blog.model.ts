import { Document, Schema, model, models } from "mongoose";

interface IBlog extends Document {
  title: string;
  subtitle: string;
  image: string;
  description: string;
  keyword: [string];
}

const BlogSchema = new Schema<IBlog>(
  {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    keyword: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

const Blog = models.Blog || model<IBlog>("Blog", BlogSchema);
export default Blog;
