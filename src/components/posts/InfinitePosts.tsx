"use client";

import { useCallback } from "react";
import { useInfinitePosts } from "@/hooks/useInfinite";
import InfiniteScrollTrigger from "@/components/posts/InfiniteScrollTrigger";
import { useSearchParams } from "next/navigation";
import PostCard from "./PostCard";

export default function InfinitePosts() {
  const searchParams = useSearchParams();

  const query = searchParams.get("query") ?? undefined;
  const category = searchParams.get("category") ?? undefined;

  const {
    data,
    isPending,
    isError,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfinitePosts(query, category);

  const loadMore = useCallback(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (isPending) {
    return <p>Loading posts...</p>;
  }

  if (isError) {
    return <p>Failed to load posts: {error.message}</p>;
  }

  const posts = data.pages.flatMap((page) => (page.isOk ? page.data.data : []));

  return (
    <section className="w-full h-auto flex flex-col justify-center items-center">
      <div
        className="w-[80%]
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-4
          gap-6
          xl:gap-8
          justify-items-center"
      >
        {posts.map((post) => (
          <PostCard key={post.id} data={post} />
        ))}
      </div>

      {hasNextPage && (
        <InfiniteScrollTrigger
          onIntersect={loadMore}
          enabled={!isFetchingNextPage}
        />
      )}

      {isFetchingNextPage && (
        <p className="py-6 text-center">Loading more posts...</p>
      )}

      {!hasNextPage && (
        <p className="py-6 text-center">All posts have been loaded.</p>
      )}
    </section>
  );
}
