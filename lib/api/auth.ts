import { SignInFormData } from "@/Types/signin";
import { apiCall } from "./client";
import { UserData } from "next-auth/providers/42-school";
import { SignUpFormData } from "@/Types/signup";

export async function PostAuth(UserData: SignInFormData): Promise<UserData> {
  const response = await apiCall.post("/UsersLogin", { ...UserData });
  return response.data;
}

export async function PostAuthSignup(UserData: SignUpFormData) {
  const response = await apiCall.post("/UsersSignup", { ...UserData });
  return response.data;
}
