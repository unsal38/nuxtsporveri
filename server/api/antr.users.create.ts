import { antrUser } from "~~/server/models/antr.model";

export default defineEventHandler(async (event) => {
  
  return {antr: "admin"}
  // const antr_user_id = event
  // const check_antr_user = await User.findById(antr_user_id)
  // console.log(event,check_antr_user, "antr create api")
  // if(check_user !== null) {
    // const name      = event
    // const email     = event
    // const password  = event
    // const reflesh_token   = event
    // const telnumber       = event
    // const limit           = event
    // const salon_user      = event
  // var users = await User.create({
    // name: name,
    // email: email,
    // password: password,
    // reflesh_token: reflesh_token,
    // telnumber: telnumber,
    // limit: limit,
    // salon_user: salon_user   // TEK ANTRONÖR MÜ SALON MU // true/ FALSE 
  // })
  // users.save()
  // return true
  // }else {
  //   return false;
  // }
  
  
});
