import { DataTableTags } from "@/components/tags/DataTableTags";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import { tagControllerGetTags } from "@/app/api/generated";
import { auth } from "@/lib/auth/auth";

const Page = async () => {
  let data;
  const session = await auth();

  try {
    const response = await tagControllerGetTags({
      headers: { Authorization: `Bearer ${session?.user.accessToken}` },
    });
    data = response.data;
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
        <div className="@container/main flex flex-col gap-2">
          <div className="w-full px-5 m-auto mt-5 flex justify-between items-center">
            <h2 className="text-[clamp(1.4rem,4vw,2.4rem)]">Tags</h2>
            <Link href="/admin/tags/create">
              <Button
                aria-label="create post"
                className="cursor-pointer min-w-[100px] min-h-[45px]"
              >
                Create Tag
                <Plus />
              </Button>
            </Link>
          </div>

          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <DataTableTags tag={data} accessToken={session?.user.accessToken} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
