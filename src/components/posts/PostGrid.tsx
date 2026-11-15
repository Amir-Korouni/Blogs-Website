import PostCard from "./PostCard";
import {  PostsResponse } from "@/Types/post.type";

export const PostGrid = ({ posts }: PostsResponse) => {
  if (!posts) {
    return (
      <section className="w-full h-full flex justify-center items-center">
        <p className="text-lg text-muted-foreground">No posts found.</p>
      </section>
    );
  }

  return (
    <section className="w-full min-h-[80%] bg-transparent flex justify-center items-start">
      <div
        className="
          w-[100%]
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-4
          gap-6
          xl:gap-8
          justify-items-center
        "
      >
        {/* {posts.map((item) => ( */}
        <PostCard key={posts.id} posts={posts} />
        {/* ))} */}
      </div>
    </section>
  );
};
