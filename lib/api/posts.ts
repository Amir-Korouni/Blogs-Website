import { Posts } from "@/Types/post";
import { apiCall } from "./client";

export async function getPosts() {
  const response = await apiCall.get("/Posts");
  return response.data;
}

export async function getPostDetail(url: string) {
  const response = await apiCall.get(`/Posts?slug=${url}`);
  return response.data;
}

export async function getSearchPost(query?: string): Promise<Posts[]> {
  const response = await apiCall.get("/Posts");

  if (!query) {
    return response.data;
  }

  const search = query.toLowerCase();

  return response.data.filter((post: Posts) =>
    post.title.toLowerCase().includes(search),
  );
}
