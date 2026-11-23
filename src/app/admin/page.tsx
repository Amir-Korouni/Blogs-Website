import { SectionCards } from "@/components/section-cards";
import { DataTable } from "@/components/data-table";
import Pagination from "@/components/dashboard/PagePagination";
import { postsControllerGetAllPostsForAdmin } from "../api/generated";
import { auth } from "@/lib/auth/auth";
import { redirect } from "next/navigation";
import AuthProtected from "@/lib/auth/auth-Protected";

type PageProps = {
  searchParams: Promise<{ page?: string }>;
};

const Page = async ({ searchParams }: PageProps) => {
  const { page } = await searchParams;

  const limit = 7;
  const currentPage = Math.max(1, Number(page) || 1);

  AuthProtected();

  const session = await auth();

  if (session?.user.role !== "admin") {
    redirect("/");
  }

  let data;

  try {
    const response = await postsControllerGetAllPostsForAdmin({
      headers: {
        Authorization: `Bearer ${session.user.accessToken}`,
      },
    });

    data = response.data;
  } catch (error) {
    console.error("Failed to fetch admin posts:", error);

    return (
      <section className="flex flex-1 items-center justify-center p-6">
        <p className="text-destructive">
          Failed to load posts. Please try again later.
        </p>
      </section>
    );
  }

  console.log(searchParams);
  console.log(data);
  return (
    <>
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <h2 className="text-[clamp(1.4rem,4vw,2.4rem)] px-5">Overview</h2>
            <SectionCards data={data} />
            <div className="w-full h-full flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <DataTable data={data} accessToken={session?.user.accessToken} />
            </div>
          </div>
          {/* <Pagination
            currentPage={currentPage}
            totalPages={pages}
          /> */}
        </div>
      </div>
    </>
  );
};

export default Page;
