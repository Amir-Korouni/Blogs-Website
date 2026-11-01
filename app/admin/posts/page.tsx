import { getPosts } from "@/lib/api/posts.service";
import { DataTable } from "@/components/data-table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const Page = async () => {
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
    <>
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="w-full px-5 m-auto mt-5 flex justify-between items-center">
            <h2 className="text-[clamp(1.4rem,4vw,2.4rem)]">Posts</h2>
            <Button
              aria-label="create post"
              className="cursor-pointer min-w-[100px] min-h-[45px]"
            >
              Create Post
              <Plus />
            </Button>
          </div>
          <div className="w-full px-5 m-auto mt-5 flex justify-between items-center">
            <Input
              id="search"
              name="search"
              type="search"
              placeholder="Search blogs ..."
              aria-describedby="input-search-posts"
              className="h-[2.5rem]"
            />
          </div>
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <DataTable data={posts} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
