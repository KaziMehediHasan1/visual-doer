import { Document, Schema, model, models } from "mongoose";

interface ISkillSchema extends Document {
  title: string;
  description: string;
  keyword?: [string];
}
const SkillSchema = new Schema<ISkillSchema>(
  {
    title: {
      type: String,
      required: true,
      
    },
    description: {
      type: String,
      required: true,
      
    },
    keyword: {
      type: [String],
    },
  },
  { timestamps: true }
);

const Skill = models.Skill || model<ISkillSchema>("Skill", SkillSchema);
export default Skill;
