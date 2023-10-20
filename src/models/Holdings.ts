import { Document, model, Schema } from "mongoose";
import { IUser } from "./User";

export type THolding = {
  user: IUser["_id"];
  subject: string;
  address: string;
  isBuy: boolean;
  shareAmount: number;
  ethAmount: number;
  createdAt: number;
  age: number;
};

export interface IHolding extends THolding, Document {}

const holdingSchema: Schema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  subject: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  isBuy: {
    type: Boolean,
  },
  shareAmount: {
    type: Number,
  },
  ethAmount: {
    type: Number,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Holding = model<IHolding>("Holding", holdingSchema);

export default Holding;
