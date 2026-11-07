import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/signin",
  },

  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = Boolean(auth?.user);
      const isDashboard = nextUrl.pathname.startsWith("/dashboard");

      const isAuthPage =
        nextUrl.pathname === "/signin" || nextUrl.pathname === "/signup";

      // Protect dashboard routes
      if (isDashboard) {
        return isLoggedIn;
      }

      // Redirect authenticated users away from sign in/up
      if (isAuthPage && isLoggedIn) {
        return Response.redirect(new URL("/dashboard", nextUrl));
      }

      return true;
    },
  },

  providers: [],
} satisfies NextAuthConfig;
