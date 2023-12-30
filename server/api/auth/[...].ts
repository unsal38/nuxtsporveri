// file: ~/server/api/auth/[...].ts
import CredentialsProvider from 'next-auth/providers/credentials'
import { NuxtAuthHandler } from '#auth'
import { antrUser } from "~~/server/models/antr.model";
import GithubProvider from 'next-auth/providers/github'
export default NuxtAuthHandler({
    // A secret string you define, to ensure correct encryption
    
    // pages: {
    //     signIn: "/login",

    // },
    secret: process.env.AUTH_SECRET,
    providers: [
        // // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
        // CredentialsProvider.default({
        //     // endpoint:{
        //     //     sigin: { path: '/login', method: 'post' },
        //     // },
        //     secret: process.env.AUTH_SECRET,
        //     name: 'Credentials',
        //     async authorize(credentials: any) {
        //         // user mongo db check
        //         const user_check =  await antrUser.find({ email: credentials.user_email });
        //         const user = { id: '1', name: 'ünsal', email: '123@123.com', password: '123' }
        //        console.log(credentials, user_check)
        //         //return user

        //         if (credentials?.username === user.email && credentials?.password === user.password) {
        //             // Any object returned will be saved in `user` property of the JWT
        //             return user
        //         } else {
        //             // eslint-disable-next-line no-console
        //             console.error('Warning: Malicious login attempt registered, bad credentials provided')
        //             // If you return null then an error will be displayed advising the user to check their details.
        //             return null
        //             // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        //         }
        //     }
        // }),
        // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
        GithubProvider.default({
            clientId: process.env.GITHUP_CLIENTID,
            clientSecret: process.env.GITHUP_CLIENTSECRET
        }),
    ]
})