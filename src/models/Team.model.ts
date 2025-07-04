import { Document, Schema, model, models } from "mongoose";

interface ITeamSchema extends Document {
  image: string;
  name: string;
  designation: string;
}

export const TeamSchema = new Schema<ITeamSchema>({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
});

const Team = models.Team || model<ITeamSchema>("Team", TeamSchema);
export default Team;
