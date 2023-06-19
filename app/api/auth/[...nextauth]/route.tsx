import prisma from "@/prisma/client"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import bcrypt from "bcrypt"
import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Please enter email and password")
        }
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        })
        console.log(user)
        if (!user || user?.password) {
          throw new Error("Invalid credentials")
        }
        const isCorrect = await bcrypt.compare(
          credentials.password,
          user.password ? user.password : ""
        )
        if (!isCorrect) {
          throw new Error("Invalid credentials")
        }
        console.log(user)
        return user
      },
    }),
  ],
  secret: process.env.SECRET,
  session: {
    type: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  debug: process.env.NODE_ENV === "development",
}
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
