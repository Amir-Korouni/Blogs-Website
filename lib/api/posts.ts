import { Posts } from "@/Types/post";
import { apiCall } from "./client";
import { AxiosResponse } from "axios";
import { ClientType } from "./Types/client.type";
import { AppHttpError } from "./Error/client.error";

async function safeHttpCall<T extends object>(
  fn: () => Promise<AxiosResponse<T>>,
): Promise<ClientType<T>> {
  try {
    const response = await fn();
    return {
      isOk: true,
      data: response.data,
    };
  } catch (error) {
    return {
      isOk: false,
      error: new AppHttpError(error as Error),
    };
  }
}

export async function getPosts(): Promise<ClientType<Posts[]>> {
  return safeHttpCall(() => apiCall.get<Posts[]>("/Posts"));
}

export async function getLatestPosts(): Promise<ClientType<Posts[]>> {
  return safeHttpCall(async () => {
    const response = await apiCall.get("/Posts?_page=1&_per_page=5");

    return {
      ...response,
      data: response.data.data,
    };
  });
}

export async function getPostsByTag(
  slug: string,
): Promise<ClientType<Posts[]>> {
  return safeHttpCall(async () => {
    const response = await apiCall.get(
      `/Posts?tags.slug=${encodeURIComponent(slug)}`,
    );
    return response;
  });
}

export async function getPostDetail(url: string): Promise<ClientType<Posts[]>> {
  return safeHttpCall(() => apiCall.get<Posts[]>(`/Posts?slug=${url}`));
}

export async function getSearchPost(
  query?: string,
): Promise<ClientType<Posts[]> | undefined> {
  const response = await safeHttpCall(() => apiCall.get<Posts[]>("/Posts"));

  if (!response.isOk) {
    console.log(response.error.message);
    response.error.redirect();
    return;
  }

  if (!query) {
    return response;
  }

  const search = query?.toLocaleLowerCase().trim();

  if (!search) {
    return response;
  }

  const filteredPosts = response.data.filter((post: Posts) =>
    post.title.toLowerCase().includes(search),
  );
  return {
    isOk: true,
    data: filteredPosts,
  };
}
