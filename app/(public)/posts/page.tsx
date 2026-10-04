import PostGrid from "@/components/posts/PostGrid";
import Search from "@/components/posts/Search";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Posts",
  description: "Explore all articles about modern technologies.",
};

const Page = () => {
  return (
    <>
      <section className="w-full h-[100vh] flex flex-col justify-center items-center">
        <div className="w-full h-[40%] bg-card text-zinc-100 flex flex-col justify-center items-center">
          <div>
            <h2 className="text-[clamp(1.8rem,4vw,3rem)]">All Posts</h2>
            <p>
              Explore articles and experiences from developers around the world.
            </p>
          </div>
        </div>
        <div className="w-full h-[20%] bg-[var(--category-page)] text-zinc-100 flex flex-col justify-center items-center">
          <h2 className="text-[clamp(1.8rem,4vw,3rem)]">Search Or Filter</h2>
          <Search />
        </div>
        <div className="w-full h-[100vh] flex justify-center items-center bg-[#152f59]">
          <PostGrid />
        </div>
      </section>
    </>
  );
};

export default Page;
