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
  telnumber: Number,
  limit: Number,
  salon_user: { // TEK ANTRONÖR MÜ SALON MU 
    type: String,
    enum:[true, false]
  }
});

export const antrUser = model("antrUser", AntrUserSchema);
