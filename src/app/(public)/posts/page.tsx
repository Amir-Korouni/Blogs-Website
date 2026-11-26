import Search from "@/features/public/Search";
import { Metadata } from "next";
import InfinitePosts from "@/components/posts/InfinitePosts";
import { postsControllerGetPosts } from "@/shared/api/generated";

export const metadata: Metadata = {
  title: "Posts",
  description: "Explore all articles about modern technologies.",
};

const Page = async () => {
  const posts = await postsControllerGetPosts();
  console.log(posts.data);

  return (
    <>
      <main>
        <section className="w-full h-[50vh] bg-[var(--latest-section)]  text-zinc-100 flex flex-col justify-center items-center">
          <div className="text-foreground">
            <h2 className="text-[clamp(1.8rem,4vw,3rem)]">All Posts</h2>
            <p className="text-[clamp(0.8rem,3vw,1.5rem)]">
              Explore articles and experiences from developers around the world.
            </p>
          </div>
          <div className="w-[60%] mt-10 flex flex-col justify-center items-center text-foreground border-t border-t-px">
            <Search />
          </div>
        </section>
        <section className="w-full h-auto flex flex-col justify-center items-center bg-background">
          <h2 className="text-[clamp(1.8rem,4vw,3rem)]">Posts</h2>
          {/* <section
            className="w-[100%]
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-4
            gap-6
            xl:gap-8
            justify-items-center"
          >
            {posts.data.map((post) => (
              <PostCard key={post.id} post={post} />
            ))} */}
          {/* </section> */}
          <InfinitePosts />
        </section>
      </main>
    </>
  );
};

export default Page;
