import { PaginatedPosts } from "@/Types/post.type";
import { apiCall } from "./client.service";

export async function getPostCategory(
  slug: string,
  page: number = 1,
  limit: number = 3,
): Promise<PaginatedPosts> {
  const params = new URLSearchParams({
    categorySlug: slug,
    _page: String(page),
    _per_page: String(limit),
  });

  const response = await apiCall.get<PaginatedPosts>(
    `/Posts?${params.toString()}`,
  );

  return response.data;
}
