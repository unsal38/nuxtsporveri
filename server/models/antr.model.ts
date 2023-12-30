import { Schema, model } from "mongoose";

const AntrUserSchema = new Schema({
  name: String,
  email: String,
  password: String,
  createAt: {
    type: Date,
    default: Date.now(),
  },
  updateAt: Date,
  reflesh_token: String,
  limit: Number,
  role:{
    type: String,
    enum: ["user", "admin"],
  }
});

export const antrUser = model("antrUser", AntrUserSchema);
