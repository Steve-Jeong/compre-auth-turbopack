import { prisma } from "@/lib/prisma";
import NextAuth from "next-auth";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      credentials: {
        username: {
          label: "e-mail",
          type: "text",
          placeholder: "your email address",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "your password",
        },
        rememberMe: {
          label: "Remember Me",
          type: "checkbox",
        },
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: {
            email: credentials?.username,
          },
        });
        if (!user) throw new Error("Username or password is not correct");
        if (!credentials?.password)
          throw new Error("Username or password is not correct");
        const isPasswordCorrect = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!isPasswordCorrect)
          throw new Error("Username or password is not correct");
        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
      },
    }),
  ],
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
