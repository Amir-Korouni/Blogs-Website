import Pagination from "@/components/posts/Pagination";
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
      <main>
        <section className="w-full h-[50vh] bg-[var(--latest-section)]  text-zinc-100 flex flex-col justify-center items-center">
          <div className="text-foreground">
            <h2 className="text-[clamp(1.8rem,4vw,3rem)]">All Posts</h2>
            <p className="text-[clamp(0.8rem,3vw,1.5rem)]">
              Explore articles and experiences from developers around the world.
            </p>
          </div>
          <div className="w-full mt-10 flex flex-col justify-center items-center text-foreground border-t border-t-px">
            <h2 className="mt-5 text-[clamp(1.8rem,4vw,3rem)]">
              Search | Filter
            </h2>
            <Search />
          </div>
        </section>
        <section className="w-full h-[100vh] flex flex-col justify-center items-center bg-background">
          <h2 className="text-[clamp(1.8rem,4vw,3rem)]">Posts</h2>
          <PostGrid />
        </section>
        <section className="w-full h-[10vh] flex justify-center items-center">
          <Pagination />
        </section>
      </main>
    </>
  );
};

export default Page;
