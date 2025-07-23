import GoogleProvider from "next-auth/providers/google";
import type { NextAuthOptions } from "next-auth";
import { configEnv } from "@/lib/configEnv";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: configEnv.clientId!,
      clientSecret: configEnv.clientSecret!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account && profile) {
        token.email = profile.email || "";
        token.name = profile.name || "";
        token.token = account.access_token || "";
        token.image = profile.picture || "";
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.image = token.image;
      session.user.email = token.email;
      session.user.name = token.name;
      session.user.role = token.role;
      session.user.token = token.token;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};
