import { Document, Schema, model, models } from "mongoose";

interface GoogleReview extends Document {
  review: number;
}
export const GoogleReviewSchema = new Schema<GoogleReview>(
  {
    review: {
      type: Number,
    },
  },
  { timestamps: true }
);

const GoogleReview =
  models.GoogleReview || model<GoogleReview>("GoogleReview", GoogleReviewSchema);

export default GoogleReview;
