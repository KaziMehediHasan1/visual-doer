import { Document, model, models, Schema } from "mongoose";

interface IReview extends Document {
  review: string;
  totalReview: number;
  clientName: string;
  designation: string;
  company: string;
  companyImage: string;
}

export const ReviewSchema = new Schema<IReview>(
  {
    review: {
      type: String,
      required: true,
    },
    totalReview: {
      type: Number,
      required: true,
    },
    clientName: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
    company: {
      type: String,
    },
    companyImage: {
      type: String,
    },
  },
  { timestamps: true }
);

const Review = models.Review || model<IReview>("Review", ReviewSchema);
export default Review;
