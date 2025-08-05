import { Document, Schema, model, models } from "mongoose";

interface IProject extends Document {
  images: [string];
  keyword?: [string];
  link: string;
  title?: string;
}

export const ProjectSchema = new Schema<IProject>(
  {
    images: {
      type: [String],
      required: true,
      min: 3,
    },
    keyword: {
      type: [String],
      required: true,
      min: 1,
    },
    link: {
      type: String,
      required: true,
      min: 1,
    },
    title: {
      type: String,
    },
  },
  { timestamps: true }
);

const Project = models.Project || model<IProject>("Project", ProjectSchema);
export default Project;
