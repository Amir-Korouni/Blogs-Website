"use client";

import { getPosts } from "@/lib/api/posts";
import { Posts } from "@/Types/post";
import { useQuery } from "@tanstack/react-query";

export function useGetPost() {
  return useQuery<Posts>({
    queryKey: ["posts"],
    queryFn: getPosts,
  });
}
