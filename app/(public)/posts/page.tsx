import Pagination from "@/components/posts/Pagination";
import { PostGrid } from "@/components/posts/PostGrid";
import Search from "@/components/posts/Search";
import { getSearchPost } from "@/lib/api/posts";
import { Metadata } from "next";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata: Metadata = {
  title: "Posts",
  description: "Explore all articles about modern technologies.",
};

type PostPageProp = {
  searchParams: Promise<{ query?: string; page?: number; category?: string }>;
};

const Page = async ({ searchParams }: PostPageProp) => {
  const { query, page, category } = await searchParams;

  const requestedPage = Number(page) || 1;

  const posts = await getSearchPost(query);
  if (!posts?.isOk) {
    console.log(posts?.error.message);
    posts?.error.redirect();
    return;
  }

  const filteredPost = posts.data.filter((post) => {
    const matchesCategory = !category || post.category === category;
    return matchesCategory;
  });

  const pageSize = 10;
  const totalPosts = filteredPost.length;
  const totalPages = Math.ceil(totalPosts / pageSize);

  const currentPage = Math.min(totalPages || 1, Math.max(1, requestedPage));

  const offset = (currentPage - 1) * pageSize;
  const paginationPosts = filteredPost.slice(offset, offset + pageSize);

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
        <section className="w-full h-auto flex flex-col justify-center items-center bg-background">
          <h2 className="text-[clamp(1.8rem,4vw,3rem)]">Posts</h2>
          <Suspense fallback={<Loading />}>
            <PostGrid posts={paginationPosts} />
          </Suspense>
        </section>
        <section className="w-full h-[10vh] flex justify-center items-center">
          <Pagination currentPage={currentPage} totalPages={totalPages} />
        </section>
      </main>
    </>
  );
};

export default Page;
