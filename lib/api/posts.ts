import { apiCall } from "./client";

export async function getPosts() {
  const response = await apiCall.get("/Posts");
  return response.data;
}

export async function getPostDetail(url: string) {
  const response = await apiCall.get(`/Posts?slug=${url}`);
  return response.data;
}

export async function getSearchPost(query?: string) {
  const response = await apiCall.get("/Posts", {
    params: query ? { q: query } : undefined,
  });

  console.log("Query", query);
  console.log("DATA:", response.data);

  return response.data;
}
