import { Document, model, models, Schema } from "mongoose"

interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  resetPasswordToken?: string | null;
  resetPasswordExpire?: Date | null;
}

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      requred: true,
      minlength: 2,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    resetPasswordToken: {
      type: String,
      default: null,
    },
    resetPasswordExpire: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

const User = models.User || model<IUser>("User", userSchema);
export default User;
