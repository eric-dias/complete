import User from "@/models/User"
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"
import connect from "@/utils/db"

const handler = NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
		CredentialsProvider({
			id: "credentials",
			name: "credentials",
			async authorize(credentials) {
				await connect()

				try {
					// ver se existe um usuário com o email digitado
					const user = await User.findOne({
						email: credentials.email,
					})

					if (user) {
						//check password

						const isPasswordCorrect = await bcrypt.compare(
							credentials.password,
							user.password
						)

						if (isPasswordCorrect) {
							return user
						} else {
							throw new Error("email or password are wrong")
						}
					} else {
						throw new Error("User not found")
					}
				} catch (error) {
					throw new Error(error)
				}
			},
		}),
	],
	pages: {
		error: "/dashboard/login",
	},
})

export { handler as GET, handler as POST }
