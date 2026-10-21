import ToolBar from "@/components/dashboard/PostToolBar";
import { Suspense } from "react";
import Loading from "../loading";
import { getSearchPost } from "@/lib/api/posts";
import PostsTable from "@/components/dashboard/PostsTable";
import Pagination from "@/components/dashboard/PagePagination";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

type Props = {
  searchParams: Promise<{
    page?: number;
    query?: string;
    status?: string;
    category?: string;
  }>;
};

const Page = async ({ searchParams }: Props) => {
  const { page, query, status, category } = await searchParams;

  const requestedPage = Number(page) || 1;

  const posts = await getSearchPost(query);
  if (!posts?.isOk) {
    console.log(posts?.error.message);
    posts?.error.redirect();
    return;
  }

  const filteredPosts = posts.data.filter((post) => {
    const matchesStatus = !status || post.status === status;
    const matchesCategory = !category || post.category === category;

    return matchesStatus && matchesCategory;
  });

  const pageSize = 10;
  const totalPosts = filteredPosts.length;
  const totalPages = Math.ceil(totalPosts / pageSize);

  const currentPage = Math.min(totalPages || 1, Math.max(1, requestedPage));

  const offset = (currentPage - 1) * pageSize;

  const paginatedPosts = filteredPosts.slice(offset, offset + pageSize);
  return (
    <>
      <main className="w-full h-[100vh] border">
        <section className="size-full flex flex-col  items-center mt-10">
          <div className="w-full flex justify-between items-center px-10">
            <h2 className="w-full text-[clamp(1rem,2.5vw,2rem)] text-left ml-15">
              Posts
            </h2>
            <Link href="/dashboard/posts/create">
              <Button
                aria-label="Create new post"
                className="
              xl:w-[200px]
              md:w-[150px]
              sm:w-[100px]
              h-10
              bg-blue-500
              text-white
              rounded
              hover:bg-blue-600
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
              cursor-pointer
            "
              >
                New Post
                <Plus />
              </Button>
            </Link>
          </div>
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
