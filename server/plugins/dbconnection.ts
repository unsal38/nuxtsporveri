import mongoose from "mongoose";

export default defineNitroPlugin(()=>{

    try {
      mongoose.connect(useRuntimeConfig().MONGODB_URI)  
       console.log("connect success")
    } catch (error) {
        console.log(error)
    }

    

    
})
