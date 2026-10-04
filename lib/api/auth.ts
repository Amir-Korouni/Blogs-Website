import { SignInFormData } from "@/Types/signin";
import { apiCall } from "./client";

export async function PostAuth(UserData: SignInFormData) {
  const response = await apiCall.post("/UsersLogin", { ...UserData });
  return response.data;
}
