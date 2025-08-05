import { Document, Schema, model, models } from "mongoose";

interface ITalking extends Document {
  fullname: string;
  email: string;
  whatsapp?: number;
  projectType: string;
  projectDetails: string;
}

export const TalkingSchema = new Schema<ITalking>({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  whatsapp: {
    type: Number,
  },
  projectType: { type: String, required: true },
  projectDetails: { type: String, required: true },
},{ timestamps: true });

const Talk = models.Talk || model<ITalking>("Talk", TalkingSchema);
export default Talk;
