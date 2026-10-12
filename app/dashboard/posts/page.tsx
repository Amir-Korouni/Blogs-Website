import ToolBar from "@/components/dashboard/PostToolBar";
import { Suspense } from "react";
import Loading from "../loading";
import { getPosts } from "@/lib/api/posts";
import PostsTable from "@/components/dashboard/PostsTable";
import Pagination from "@/components/dashboard/PagePagination";

type Props = {
  searchParams: Promise<{
    page?: number;
    query?: string;
  }>;
};

const Page = async ({ searchParams }: Props) => {
  const params = await searchParams;

  const requestedPage = Number(params.page) || 1;

  const posts = await getPosts();

  const pageSize = 10;
  const totalPosts = posts.length;
  const totalPages = Math.ceil(totalPosts / pageSize);

  const currentPage = Math.min(totalPages || 1, Math.max(1, requestedPage));

  const offset = (currentPage - 1) * pageSize;

  const paginatedPosts = posts.slice(offset, offset + pageSize);
  return (
    <>
      <main className="w-full h-[100vh] border">
        <section className="size-full flex flex-col  items-center mt-10">
          <h2 className="w-full text-[clamp(1rem,2.5vw,2rem)] text-left ml-15">
            Posts
          </h2>
          <ToolBar />
          <div className="w-full h-[50vh] flex justify-center items-center">
            <Suspense fallback={<Loading />}>
              <PostsTable posts={paginatedPosts} />
            </Suspense>
          </div>
          <div className="mt-5 flex w-full justify-center">
            {paginatedPosts && (
              <Pagination currentPage={currentPage} totalPages={totalPages} />
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default Page;
