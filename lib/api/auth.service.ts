import { SignInFormData } from "@/Types/signin.type";
import { apiCall } from "./client.service";
import { UserData } from "next-auth/providers/42-school";
import { SignUpFormData } from "@/Types/signup.type";

export async function PostAuth(UserData: SignInFormData): Promise<UserData> {
  const response = await apiCall.post("/UsersLogin", { ...UserData });
  return response.data;
}

export async function PostAuthSignup(
  UserData: SignUpFormData,
): Promise<UserData> {
  const response = await apiCall.post("/UsersSignup", { ...UserData });
  return response.data;
}
