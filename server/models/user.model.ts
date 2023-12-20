import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  name: String,
  email: String,
  telnumber: Number,
  gender:{
    type: String,
    enum: ["male", "female"],
  },
  boy: Number,
  kilo: Number,
  yas: Number,
  bel_cevresi: Number,
  kalca_cevresi: Number,
  pazu_cevresi: Number,
  spor_gecmisi: String,
  hoslandigi_yemekler: String,
  diyeti_kac_gunde_bozdugu: String,
  sporu_ne_icin_yaptigi: String,
  gunluk_kardiyo: String,
  kisinin_calisma_hayati: String,
});

export const User = model("User", UserSchema);
