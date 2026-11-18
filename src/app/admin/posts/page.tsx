import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Pagination from "@/components/dashboard/PagePagination";
import Link from "next/link";
import Search from "@/components/posts/Search";
import { postsControllerGetAllPostsForAdmin } from "@/app/api/generated";
import { auth } from "@/lib/auth/auth";

type PageProps = {
  searchParams: Promise<{
    page?: string;
    query?: string;
    category?: string;
    status?: string;
  }>;
};

const Page = async ({ searchParams }: PageProps) => {
  const { page, query, category, status } = await searchParams;

  const limit = 7;
  const currentPage = Math.max(1, Number(page) || 1);

  let data;

  const session = await auth();

  try {
    const response = await postsControllerGetAllPostsForAdmin({
      headers: { Authorization: `Bearer ${session?.user.accessToken}` },
    });
    data = response.data;
  } catch {
    return (
      <section className="flex flex-1 items-center justify-center p-6">
        <p className="text-destructive">
          Failed to load posts. Please try again later.
        </p>
      </section>
    );
  }
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
            <Search ifAdmin={true} />
          </div>
          <div className="w-full h-full flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <DataTable data={data} />
          </div>
          {/* <Pagination currentPage={currentPage} totalPages={pages} /> */}
        </div>
      </div>
    </>
  );
};

export default Page;
