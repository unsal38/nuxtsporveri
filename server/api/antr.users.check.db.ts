import { antrUser } from "~~/server/models/antr.model";
import { getToken } from '#auth'
export default defineEventHandler(async event => {
    const token = await getToken({ event })
    const token_email = token?.email
    if(token_email && token_email !== undefined) {
        return await antrUser.find({ email: token_email }).then(async user => {
            if(user.length === 0 ) return false
            if(user.length > 0 ) return true
        })
    }
})