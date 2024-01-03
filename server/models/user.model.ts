import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  name: String,
  antr_user_id: String,
  createAt: {
    type: Date,
    default: Date.now(),
  },
  updateAt: Date,
  telnumber: Number,
  gender:{
    type: String,
    enum: ["male", "female"],
  },
});

export const User = model("User", UserSchema);
