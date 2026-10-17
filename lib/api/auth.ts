import { SignInFormData } from "@/Types/signin";
import { apiCall } from "./client";
import { UserData } from "next-auth/providers/42-school";

export async function PostAuth(UserData: SignInFormData): Promise<UserData> {
  const response = await apiCall.post("/UsersLogin", { ...UserData });
  return response.data;
}
