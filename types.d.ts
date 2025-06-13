import type { JWT as NextAuthJWT } from "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    name: string;
    accessToken?: string;
    role?: string;
  }

  interface Session {
    user: User;
    accessToken?: string;
  }

  interface JWT extends NextAuthJWT {
    id: string;
    accessToken?: string;
  }
}
