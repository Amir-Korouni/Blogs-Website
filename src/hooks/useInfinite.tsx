"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import {
  postsControllerGetPosts,
} from "@/app/api/generated";

/**
 * @version 1.0.0
 * @description This function use useInfiniteQuery from TanStack. We define queryKey for save these things to Cache of TanStack Query. queryFn is a function that we save with queryKey. function get pageParam as a argument and call getPostPage with 2(pageParam, 3) argument. getNextPageParam has a result of queryFn. This function says if lastPage exist & if next page is not undefined, i return next page.
 * @returns If lastpage.data.next was not undefined, next Page was returned.
 */
export function useInfinitePosts(search?: string, category?: string) {
  return useInfiniteQuery({
    queryKey: ["posts", "infinite", search, category],
    queryFn: ({ pageParam }) =>
      postsControllerGetPosts({
        search: search,
        categoryId: Number(category),
      }),

    initialPageParam: "1",

    getNextPageParam: (lastPage) => {

      return lastPage.data?.next ?? undefined;
    },
  });
}

export function useInfiniteCategory(categoryId: number | undefined) {
  return useInfiniteQuery({
    queryKey: ["posts", "infinite", "category", categoryId],

    queryFn: () =>
      postsControllerGetPosts({
        categoryId,
      }),

    initialPageParam: 1,

    getNextPageParam: (lastPage) => {
      
      return lastPage.data?.next ?? undefined;
    },
  });
}

// export function useInfiniteTags(slug: string) {
//   return useInfiniteQuery({
//     queryKey: ["tags", "infinite", "tags", slug],
//     queryFn: ({ pageParam }) => getPostsByTag(slug, pageParam, 3),

//     initialPageParam: 1,

//     getNextPageParam: (lastPage) => {
//       return lastPage.next ?? undefined;
//     },
//   });
// }
