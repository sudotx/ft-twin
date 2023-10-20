import { Document, model, Schema } from "mongoose";
import { IUser } from "./User";

export type TPoints = {
  user: IUser["_id"];
  address: string;
  totalPoints: number;
  tier: string;
};

export interface IPoints extends TPoints, Document {}

const pointsSchema: Schema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  tier: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  totalPoints: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Points = model<IPoints>("Points", pointsSchema);

export default Points;
