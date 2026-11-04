import { SectionCards } from "@/components/section-cards";
import { DataTable } from "@/components/data-table";
import { getPostPage } from "@/lib/api/posts.service";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import Pagination from "@/components/dashboard/PagePagination";

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
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <SectionCards />
            <div className="px-4 lg:px-6">
              <ChartAreaInteractive />
            </div>
            <DataTable data={data} />
          </div>
          <Pagination currentPage={currentPage} totalPages={pages} />
        </div>
      </div>
    </>
  );
};

export default Page;
