import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

const scopes = ["identify", "email"];

const handler = NextAuth({
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID ?? "",
      clientSecret: process.env.DISCORD_CLIENT_SECRET ?? "",
      authorization: { params: { scope: scopes.join(" ") } },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      return true;
    },
    async jwt({ token, user, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      if (user) {
        token.email = user.email;
        token.username = user.name;
        token.avatar = user.image;
      }
      return token;
    },
    async session({ session}) {
      session.user.email = token.email; 
      session.user.username = token.username;
      return session;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl + "/dashboard";
    },
  },
});

export { handler as GET, handler as POST };