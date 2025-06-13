import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.NEXTAUTH_SECRET || "REPLACE.THIS";

const handler = NextAuth({
  secret: SECRET_KEY,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        console.log(credentials);
        if (!credentials) return null;
        // Replace this with actual backend authentication logic
        if (
          credentials.username === "admin" &&
          credentials.password === "password"
        ) {
          const user = { id: "1", name: "Admin User" };
          const token = jwt.sign(user, SECRET_KEY, {
            expiresIn: "1h", // Modify it if you wanted.
          });
          return { ...user, accessToken: token };
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.accessToken = user.accessToken;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.accessToken = token.accessToken as string | undefined;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
