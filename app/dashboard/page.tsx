import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { DataTable } from "@/components/data-table";
import { SectionCards } from "@/components/section-cards";

import { getPosts } from "@/lib/api/posts.service";

export default async function Page() {
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
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <SectionCards />

          {/* <div className="px-4 lg:px-6">
            <ChartAreaInteractive />
          </div> */}

          <DataTable data={posts} />
        </div>
      </div>
    </div>
  );
}
