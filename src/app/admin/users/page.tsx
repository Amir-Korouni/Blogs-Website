import Pagination from "@/components/dashboard/PagePagination";
import DataTableUsers from "@/components/users/DataTableUsers";
import UeserSectionCard from "@/components/users/UserSectionCards";
import { getUserPage } from "@/api/posts.service";
import { Suspense } from "react";

type PageProp = {
  searchParams: Promise<{ page: string }>;
};

const Page = async ({ searchParams }: PageProp) => {
  const { page } = await searchParams;

  const limit = 5;
  const currentPage = Math.max(1, Number(page) || 1);

  const posts = await getUserPage(currentPage, limit);

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
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-col justify-center items-center gap-2">
        <div className="w-full px-5 m-auto mt-5 flex justify-between items-center">
          <h2 className="text-[clamp(1.4rem,4vw,2.4rem)]">User Managment</h2>
        </div>
        <div className="w-full px-5 m-auto mt-5 flex justify-between items-center">
          <h3 className="text-[clamp(1.4rem,4vw,2rem)]">
            Manage and monitor registered users.
          </h3>
        </div>
      </div>
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        <UeserSectionCard />
        <div>
          <Suspense>
            <DataTableUsers users={data} />
          </Suspense>
        </div>
        <Pagination currentPage={currentPage} totalPages={pages} />
      </div>
    </div>
  );
};

export default Page;
