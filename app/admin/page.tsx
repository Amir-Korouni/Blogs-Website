import { SectionCards } from "@/components/section-cards";
import { DataTable } from "@/components/data-table";
import { getPosts } from "@/lib/api/posts.service";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";

const Page = async () => {
  const posts = await getPosts();
  if (!posts.isOk) {
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
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <SectionCards />
            <div className="px-4 lg:px-6">
              <ChartAreaInteractive />
            </div>
            <DataTable data={posts.data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
