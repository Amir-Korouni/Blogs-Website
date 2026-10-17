import { Posts } from "@/Types/post";
import { apiCall } from "./client";

export async function getPostCategory(slug: string): Promise<Posts[]> {
  const response = await apiCall(`/Posts?categorySlug=${slug}`);
  return response.data;
}
