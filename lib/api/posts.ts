import { apiCall } from "./client";

export async function getPosts() {
  const response = await apiCall.get("/Posts");
  return response.data;
}
