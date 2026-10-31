import ToolBar from "@/components/dashboard/PostToolBar";
import { Suspense } from "react";
import Loading from "../../dashboard/loading";
import { getPosts, getSearchPost } from "@/lib/api/posts.service";
import PostsTable from "@/components/dashboard/PostsTable";
import Pagination from "@/components/dashboard/PagePagination";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { DataTable } from "@/components/data-table";

const Page = async () => {
  const result = await getPosts();

  if (!result.isOk) {
    return (
      <section className="flex flex-1 items-center justify-center p-6">
        <p className="text-destructive">
          Failed to load posts. Please try again later.
        </p>
      </section>
    );
  }

  const posts = result.data;
  return (
    <>
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <DataTable data={posts} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
