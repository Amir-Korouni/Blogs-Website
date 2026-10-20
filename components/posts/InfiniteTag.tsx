"use client";

import { useInfiniteTags } from "@/hooks/useInfinite";
import PostCard from "@/components/posts/PostCard";
import InfiniteScrollTrigger from "@/components/posts/InfiniteScrollTrigger";

type Props = {
  slug: string;
};

export default function InfiniteTag({ slug }: Props) {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isPending,
    isError,
  } = useInfiniteTags(slug);

  if (isPending) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong.</p>;

  const posts = data.pages.flatMap((page) => page.data);

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
          <PostCard data={post} key={post.id} />
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
