import { DropDownFilter } from "@/components/analytics/AnalyticsHeader";
import { ChartPieLabelList } from "@/components/analytics/ContentDistribution";
import { ChartBarHorizontal } from "@/components/analytics/CategoryChart";
import { OverviewCardAnalytics } from "@/components/analytics/OverviewCards";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { TopPostsTable } from "@/components/analytics/TopPostsTable";
import RecentActivity from "@/components/analytics/RecentActivity";
import { viewControllerGetPopularPosts } from "@/app/api/generated";
import { auth } from "@/lib/auth/auth";

const Page = async () => {
  const session = await auth();

  let popularPosts;
  try {
    const response = await viewControllerGetPopularPosts(
      { startDate: "2026-11-19", endDate: "2026-11-25" },
      {
        headers: {
          Authorization: `Bearer ${session?.user.accessToken}`,
        },
      },
    );
    console.log(response);

    popularPosts = response.data;
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
        <div className="@container/main flex flex-col gap-15">
          <div className="w-full px-5 m-auto mt-5 flex justify-between items-center">
            <h2 className="text-[clamp(1.4rem,4vw,2.4rem)]">Analytics</h2>
            <DropDownFilter />
          </div>
          <div>
            <OverviewCardAnalytics />
          </div>
          <div>
            <ChartAreaInteractive />
          </div>
          <div className="w-full m-auto flex justify-center items-center gap-8 flex-wrap">
            <div className="2xl:w-[700px] xl:w-[400px] md:w-[400px] max-sm:w-[500px] min-h-[250px]">
              <ChartPieLabelList />
            </div>
            <div className="2xl:w-[700px] xl:w-[400px] md:w-[400px] max-sm:w-[500px] min-h-[250px]">
              <ChartBarHorizontal />
            </div>
          </div>
          <div className="w-full m-auto flex justify-center items-center gap-8 flex-wrap">
            <div className="2xl:w-[700px] xl:w-[400px] md:w-[400px] max-sm:w-[500px] min-h-[250px]">
              <TopPostsTable posts={popularPosts} />
            </div>
            <div className="2xl:w-[700px] xl:w-[400px] md:w-[400px] max-sm:w-[500px] min-h-[250px]">
              <RecentActivity />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
