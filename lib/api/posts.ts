import { apiCall } from "./client";

export async function getPosts() {
  const response = await apiCall.get("/Posts");
  return response.data;
}

export async function getPostDetail(url: string) {
  const response = await apiCall.get(`/Posts?slug=${url}`);
  return response.data;
}
