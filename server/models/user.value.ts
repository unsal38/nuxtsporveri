import { Schema, model } from "mongoose";

const UserValueSchema = new Schema({
  user_id: String,
  antr_user_id: String,
  createAt: {
    type: Date,
    default: Date.now(),
  },
  updateAt: Date,
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

export const UserValue = model("User", UserValueSchema);
