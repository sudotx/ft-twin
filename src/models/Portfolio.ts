import { Document, model, Schema } from "mongoose";
import { IUser } from "./User";

export type TPortfolio = {
  name: string;
  price: number;
  balance: number;
  username: string;
  owner: IUser["_id"];
  chatroomId: string;
  ethBalance: number;
  lastOnline: string;
  lastMessageName?: string;
  lastMessageText?: string;
  lastReadTimestamp?: number;
  portfolioValueInWei?: number;
};

export interface IPortfolio extends TPortfolio, Document {}

const portfolioSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  chatroomId: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  balance: {
    type: String,
    required: true,
  },
  ethBalance: {
    type: String,
    required: true,
  },
  lastOnline: {
    type: String,
    required: true,
  },
  lastMessageName: {
    type: String,
    required: true,
  },
  lastMessageText: {
    type: String,
    required: true,
  },
  lastReadTimestamp: {
    type: String,
    required: true,
  },
  portfolioValueInWei: {
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
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Portfolio = model<TPortfolio>("Portfolio", portfolioSchema);

export default Portfolio;
