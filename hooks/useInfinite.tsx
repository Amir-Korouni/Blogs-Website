"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { getPostPage } from "@/lib/api/posts";
import { getPostCategory } from "@/lib/api/categories";

/**
 * @version 1.0.0
 * @description This function use useInfiniteQuery from TanStack. We define queryKey for save these things to Cache of TanStack Query. queryFn is a function that we save with queryKey. function get pageParam as a argument and call getPostPage with 2(pageParam, 3) argument. getNextPageParam has a result of queryFn. This function says if lastPage exist & if next page is not undefined, i return next page.
 * @returns If lastpage.data.next was not undefined, next Page was returned.
 */
export function useInfinitePosts(query?: string, category?: string) {
  return useInfiniteQuery({
    queryKey: ["posts", "infinite", query, category],
    queryFn: ({ pageParam }) => getPostPage(pageParam, 3, query, category),

    initialPageParam: 1,

    getNextPageParam: (lastPage) => {
      if (!lastPage.isOk) {
        return undefined;
      }

      return lastPage.data.next ?? undefined;
    },
  });
}

export function useInfiniteCategory(slug: string) {
  return useInfiniteQuery({
    queryKey: ["posts", "infinite", "category", slug],

    queryFn: ({ pageParam }) => getPostCategory(slug, pageParam, 3),

    initialPageParam: 1,

    getNextPageParam: (lastPage) => {
      return lastPage.next ?? undefined;
    },
  });
}
