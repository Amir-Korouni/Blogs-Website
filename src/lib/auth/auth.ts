import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { loginSchema } from "./auth.schema";
import { authControllerLogin } from "@/app/api/generated";

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      name: "Credentials",

      /**
       * @description define a credential of our input forms.
       */
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "m@example.com",
        },
        password: {
          label: "password",
          type: "password",
        },
      },

      /**
       *
       * @param credentials
       * @description check credentials data.
       * @description send a request to back-end for recieve user data.
       * @description get users data and return it to front-end.
       * @returns users object that recieve from back-end to save in front.
       */
      async authorize(credentials) {
        const parsedCredentials = loginSchema.safeParse(credentials);

        if (!parsedCredentials.success) {
          return null;
        }

        const { email, password } = parsedCredentials.data;

        try {
          const response = await authControllerLogin({ email, password });

          const { accessToken, user } = response.data;

          return {
            id: String(user.id),
            email: user.email,
            name: user.username,
            role: user.role,
            accessToken,
          };
        } catch (error) {
          console.error("Authentication failed:", error);
          return null;
        }
      },
    }),
  ],

  callbacks: {
    /**
     * @param  {string}  token     Decrypted JSON Web Token
     * @param  {object}  user      User object      (only available on sign in)
     * @description Receives the returned user and stores necessary information in the JWT.
     * @return {object}            JSON Web Token that will be saved
     */
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.name = user.name;
        token.accessToken = user.accessToken;
      }
      return token;
    },

    /**
     *
     * @param {object} session
     * @param {string} token
     * @description We give a session from decleration and our token to session for craete a sesion
     * @description Conceptly we controls which information is exposed through the session.
     * @returns {object}  our session
     */
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.role = token.role;
      session.user.name = token.name;
      session.user.accessToken = token.accessToken as string;
      return session;
    },
  },
});

export async function logout() {
  "use server";
  await signOut({
    redirectTo: "/signin",
  });
}
