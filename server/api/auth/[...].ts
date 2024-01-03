// file: ~/server/api/auth/[...].ts
import CredentialsProvider from 'next-auth/providers/credentials'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from "next-auth/providers/google";
import { NuxtAuthHandler } from '#auth'
import { antrUser } from "~~/server/models/antr.model";

export default NuxtAuthHandler({
    pages: {
        signIn: "/login",
        signOut:"/login",
        error:"/login",
    },

    secret: process.env.AUTH_SECRET,
    providers: [
        // @ts-expect-error
        CredentialsProvider.default({
            secret: process.env.AUTH_SECRET,
            name: 'Credentials',
            async authorize(credentials: any) {
                // user mongo db check
               const user_check =  await antrUser.find({ email: credentials.email });
                if (credentials?.email === user_check[0].email && credentials?.password === user_check[0].password) {
                    // Any object returned will be saved in `user` property of the JWT
                    return user_check[0];
                } else {
                    // If you return null then an error will be displayed advising the user to check their details.
                    return null
                    // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                }
            }
        }),
        // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
        GithubProvider.default({
            clientId: process.env.GITHUP_CLIENTID,
            clientSecret: process.env.GITHUP_CLIENTSECRET,
        }),
        // @ts-expect-error
        GoogleProvider.default({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,

          })
    ]
})