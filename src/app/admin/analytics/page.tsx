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
          <div className="w-full flex justify-between items-center gap-5 border p-5">
            <div className="w-[50%]">
              <ChartPieLabelList />
            </div>
            <div className="w-[50%]">
              <ChartBarHorizontal />
            </div>
          </div>
          <div className="w-full flex justify-between items-center gap-5  border p-5">
            <div className="w-[50%]">
              <TopPostsTable posts={result} />
            </div>
            <div className="w-[50%]">
              <RecentActivity />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
