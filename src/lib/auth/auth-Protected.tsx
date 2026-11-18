import { redirect } from "next/navigation";
import { auth } from "./auth";

/**
 * @description Now we want to initiate protected route.
 * @description check all session's are set or not.
 */
const AuthProtected = async () => {
  const session = await auth();

  if (!session?.user) {
    redirect("/signin");
  }

  if (!session.user.accessToken) {
    redirect("/");
  }

};

export default AuthProtected;
