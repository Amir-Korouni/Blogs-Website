import { apiCall } from "./client";

export async function getPostCategories(slug: string) {
  const response = await apiCall(`/posts/${slug}`);
  return response.data;
}
