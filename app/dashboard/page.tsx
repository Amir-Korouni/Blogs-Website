import DashboardTable from "@/components/dashboard/DashboardTable";
import SearchNew from "@/components/dashboard/SearchNew";
import { getSearchPost } from "@/lib/api/posts";
import { Suspense } from "react";
import Loading from "./loading";

type dashboardType = {
  searchParams: Promise<{ query?: string }>;
};

const Page = async ({ searchParams }: dashboardType) => {
  const { query } = await searchParams;
  const posts = await getSearchPost(query);
  if (!posts?.isOk) {
    console.log(posts?.error.message);
    posts?.error.redirect();
    return;
  }
  return (
    <>
      <main className="w-full h-[100vh] border">
        <section className="size-full flex flex-col justify-start items-center mt-10">
          <h2 className="w-full text-[clamp(1rem,2.5vw,2rem)] text-left ml-15">
            Dashboard
          </h2>
          <SearchNew />
          <div className="w-full h-[50vh] flex justify-center items-center">
            <Suspense fallback={<Loading />}>
              <DashboardTable posts={posts.data} />
            </Suspense>
          </div>
        </section>
      </main>
    </>
  );
};

export default Page;
