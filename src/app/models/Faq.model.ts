import { Document, Schema, model, models } from "mongoose";

interface IFaq extends Document {
  question: string;
  answer: string;
  keyword: [string];
}
export const FaqSchema = new Schema<IFaq>(
  {
    question: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
    keyword: {
      type: [String],
    },
  },
  { timestamps: true }
);

const Faq = models.Faq || model<IFaq>("Faq", FaqSchema);

export default Faq;
