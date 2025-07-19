import NextAuth from "next-auth";
import { JWT as DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      image?: string;
      role: string[];
      token: string;
    };
  }

  interface User {
    id: string;
    name: string;
    email: string;
    image?: string;
    role: string[];
  }

  interface Profile {
    iss: string;
    azp: string;
    aud: string;
    sub: string;
    email: string;
    email_verified: boolean;
    at_hash: string;
    name: string;
    picture: string;
    given_name: string;
    family_name: string;
    iat: number;
    exp: number;
  }

  interface Account {
    provider: string;
    type: string;
    providerAccountId: string;
    access_token: string;
    expires_at: number;
    scope: string;
    token_type: string;
    id_token: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    id: string;
    name: string;
    email: string;
    image?: string;
    role: string[];
    token: string;
  }
}
