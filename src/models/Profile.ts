import { Document, model, Schema } from "mongoose";
import { IUser } from "./User";

export type TProfile = {
  age: number;
  username: string;
  lastName: string;
  firstName: string;
  user: IUser["_id"];
};

export interface IProfile extends TProfile, Document {}

const profileSchema: Schema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Profile = model<IProfile>("Profile", profileSchema);

export default Profile;
