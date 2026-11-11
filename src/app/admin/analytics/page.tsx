import { DropDownFilter } from "@/components/analytics/AnalyticsHeader";
import { ChartPieLabelList } from "@/components/analytics/ContentDistribution";
import { ChartBarHorizontal } from "@/components/analytics/CategoryChart";
import { OverviewCardAnalytics } from "@/components/analytics/OverviewCards";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { TopPostsTable } from "@/components/analytics/TopPostsTable";
import { getLatestPosts } from "@/app/api/posts.service";
import RecentActivity from "@/components/analytics/RecentActivity";

const Page = async () => {
  const posts = await getLatestPosts();
  if (!posts.isOk) {
    return "Somethings went wrong";
  }
  const result = posts.data;
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
              <TopPostsTable posts={result} />
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
