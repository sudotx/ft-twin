import { Document, model, Schema } from "mongoose";

export type TUser = {
  tier?: string;
  email: string;
  avatar: string;
  volume?: number;
  netBuy?: number;
  address: string;
  password: string;
  profileId: string;
  lastOnline?: number;
  twitterName?: string;
  shareSupply?: number;
  holderCount?: number;
  displayPrice?: number;
  holdingCount?: number;
  twitterUserId: string;
  twitterPfpUrl?: string;
  twitterUsername: string;
  lifetimeFeesCollectedInWei?: number;
};

export interface IUser extends TUser, Document {}

const userSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  profileId: {
    type: String,
  },
  address: {
    type: String,
  },
  twitterUsername: {
    type: String,
  },
  twitterName: {
    type: String,
  },
  twitterPfpUrl: {
    type: String,
  },
  twitterUserId: {
    type: String,
  },
  lastOnline: {
    type: String,
  },
  holderCount: {
    type: String,
  },
  holdingCount: {
    type: String,
  },
  shareSupply: {
    type: String,
  },
  displayPrice: {
    type: String,
  },
  lifetimeFeesCollectedInWei: {
    type: String,
  },
  netBuy: {
    type: String,
  },
  volume: {
    type: String,
  },
  tier: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const User = model<IUser>("User", userSchema);

export default User;
