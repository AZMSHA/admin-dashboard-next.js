import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import CredentialsProvider from "next-auth/providers/credentials";
import { getUserByEmailWithPassword } from '@/lib/db';
import { compare } from "bcrypt"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub({
    clientId: process.env.AUTH_GITHUB_ID, clientSecret: process.env.AUTH_GITHUB_SECRET}),CredentialsProvider({
      name: "Email/Password",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        return null;
      },
    })]
});
