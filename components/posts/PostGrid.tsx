import PostCard from "./PostCard";
import { Posts } from "@/Types/post";

type PostGridProp = {
  posts: Posts[];
};

export const PostGrid = ({ posts }: PostGridProp) => {
  if (posts.length === 0) {
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
          w-[80%]
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-4
          gap-6
          xl:gap-8
          justify-items-center
        "
      >
        {posts.map((item) => (
          <PostCard key={item.id} data={item} />
        ))}
      </div>
    </section>
  );
};
