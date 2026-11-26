import { ChartPieLabelList } from "@/features/admin/analytics/ContentDistribution";
import { ChartBarHorizontal } from "@/features/admin/analytics/CategoryChart";
import { OverviewCardAnalytics } from "@/features/admin/analytics/OverviewCards";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { TopPostsTable } from "@/features/admin/analytics/TopPostsTable";
import RecentActivity from "@/features/admin/analytics/RecentActivity";
import { auth } from "@/shared/lib/auth/auth";

const Page = async () => {
  const session = await auth();

  return (
    <>
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-col gap-15">
          <div className="w-full px-5 m-auto mt-5 flex justify-between items-center">
            <h2 className="text-[clamp(1.4rem,4vw,2.4rem)]">Analytics</h2>
          </div>
          <div>
            <OverviewCardAnalytics accessToken={session?.user.accessToken} />
          </div>
          <div className="w-full h-[800px] px-10">
            <ChartAreaInteractive accessToken={session?.user.accessToken} />
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
              <TopPostsTable accessToken={session?.user.accessToken} />
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
