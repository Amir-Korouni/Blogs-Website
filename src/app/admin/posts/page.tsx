import { getPostPage } from "@/app/api/posts.service";
import { DataTable } from "@/components/data-table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Pagination from "@/components/dashboard/PagePagination";
import Link from "next/link";

type PageProps = {
  searchParams: Promise<{ page?: string }>;
};

const Page = async ({ searchParams }: PageProps) => {
  const { page } = await searchParams;

  const limit = 7;
  const currentPage = Math.max(1, Number(page) || 1);

  const posts = await getPostPage(currentPage, limit);

  if (!posts.isOk) {
    return (
      <section className="flex flex-1 items-center justify-center p-6">
        <p className="text-destructive">
          Failed to load posts. Please try again later.
        </p>
      </section>
    );
  }

  const { data, pages } = posts.data;
  return (
    <>
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="w-full px-5 m-auto mt-5 flex justify-between items-center">
            <h2 className="text-[clamp(1.4rem,4vw,2.4rem)]">Posts</h2>
            <Link href={"/admin/posts/create"}>
              <Button
                aria-label="create post"
                className="cursor-pointer min-w-[100px] min-h-[45px]"
              >
                Create Post
                <Plus />
              </Button>
            </Link>
          </div>
          <div className="w-full px-5 m-auto mt-5 flex justify-between items-center">
            <Input
              id="search"
              name="search"
              type="search"
              placeholder="Search blogs ..."
              aria-describedby="input-search-posts"
              className="h-[2.5rem]"
            />
          </div>
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <DataTable data={data} />
          </div>
          <Pagination currentPage={currentPage} totalPages={pages} />
        </div>
      </div>
    </>
  );
};

export default Page;
