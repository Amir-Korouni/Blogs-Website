"use client";

import { useInfiniteCategory } from "@/hooks/useInfinite";
import PostCard from "@/components/posts/PostCard";
import InfiniteScrollTrigger from "@/components/posts/InfiniteScrollTrigger";

type Props = {
  categoryId: number | undefined;
};

export default function InfiniteCategory({ categoryId }: Props) {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isPending,
    isError,
  } = useInfiniteCategory(categoryId);

  if (isPending) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong.</p>;

  const posts = data.pages.flatMap((page) => {return page.data});

  return (
    <>
      <div
        className="w-full
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-6
          xl:gap-8
          justify-items-center"
      >
        {posts.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </div>

      <InfiniteScrollTrigger
        enabled={!!hasNextPage && !isFetchingNextPage}
        onIntersect={() => fetchNextPage()}
      />

      {isFetchingNextPage && <p>Loading more...</p>}
    </>
  );
}
