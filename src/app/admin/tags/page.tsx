import { DataTableTags } from "@/components/tags/DataTableTags";
import { Button } from "@/components/ui/button";
import {
  getCategoryPosts,
  getPosts,
  getTagsPosts,
} from "@/api/posts.service";
import { Plus } from "lucide-react";
import { Suspense } from "react";
import Loading from "../loading";

const Page = async () => {
  const result = await getTagsPosts();

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
    <>
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-col gap-2">
          <div className="w-full px-5 m-auto mt-5 flex justify-between items-center">
            <h2 className="text-[clamp(1.4rem,4vw,2.4rem)]">Tags</h2>
            <Button
              aria-label="create post"
              className="cursor-pointer min-w-[100px] min-h-[45px]"
            >
              Create Tag
              <Plus />
            </Button>
          </div>

          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <Suspense fallback={<Loading />}>
              <DataTableTags data={posts} />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
