import { antrUser } from "~~/server/models/antr.model";

export default defineEventHandler(async (event) => {
  async function admin_add() {
    const admin_check = await antrUser.findOne({ name: 'admin' });
    if (admin_check === null) {
      const name = "admin"
      const email = "yesno_38@hotmail.com"
      const password = "123123"
      const telnumber = 5338899999
      const admin_add = antrUser.create({
        name: name,
        email: email,
        password: password,
        telnumber: telnumber,
      });
      (await admin_add).save()
    }
  }
  //admin_add()
  
  const body = await readBody(event)
  const user_email = body.user_form[3] // "yesno_38@hotmail.com"
  const user_email_check = await antrUser.find({ email: user_email });

  // if (user_email_check.length !== 0) {
  //   return { message: "kayıtlı kullanıcı" }
  // } else {
  //   try {
  //     // const limit = 100
  //     // const name = body.user_form[0]
  //     // const email = body.user_form[2]
  //     // const password = body.user_form[1]
  //     // const reflesh_token = event
  //     // var users = await antrUser.create({
  //     //   name: name,
  //     //   email: email,
  //     //   password: password,
  //     //   reflesh_token: reflesh_token,
  //     //   limit: limit,
  //     // })
  //     // users.save()
  //     return { message: "kaydedildi" }
  //   } catch (error) {
  //     return { message: "hata oluştu tekrar deneyiniz" }
  //   }
  // }











});
