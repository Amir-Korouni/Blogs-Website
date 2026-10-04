import { getPosts } from "@/lib/api/posts";
import PostCard from "./PostCard";
import { Posts } from "@/Types/post";

const PostGrid = async () => {
  const posts: Posts[] = await getPosts();
  return (
    <>
      <section className="w-full h-full bg-[#152f59] flex justify-center items-center">
        <div
          className="w-[full]
                grid
                grid-cols-1
                md:grid-cols-2
                xl:grid-cols-3
                gap-6
                xl:gap-8
                justify-items-center"
        >
          {posts.map((item) => (
            <PostCard key={item.id} data={item} />
          ))}
        </div>
      </section>
    </>
  );
};

export default PostGrid;
