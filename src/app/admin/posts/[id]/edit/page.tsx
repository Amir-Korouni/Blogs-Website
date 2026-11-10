import { EditPosts } from "@/components/posts/EditForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit Post",
};

type EditPostsType = {
  SearchParams: Promise<{ id: number }>;
};

const Page = async ({ SearchParams }: EditPostsType) => {
  const { id } = await SearchParams;
  console.log(id);

  return (
    <>
      <div className="w-full flex flex-1 flex-col">
        <div className="@container/main flex flex-col justify-center items-center gap-10">
          <div className="w-full px-5 m-auto mt-5 flex justify-start items-center">
            <h2 className="text-[clamp(1.4rem,4vw,2.4rem)]">
              Edit User with id: {"id"}
            </h2>
          </div>
          <div className="w-full px-10">
            <EditPosts />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
