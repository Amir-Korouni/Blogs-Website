import EditorClient from "@/features/admin/posts/EditorClient.tsx";
import { auth } from "@/shared/lib/auth/auth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Post",
};

const Page = async () => {
  const session = await auth();

  console.log("Session:", session);

  return (
    <>
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-col gap-2 px-5">
          <div className="w-full px-5 m-auto mt-5 flex justify-between items-center">
            <h2 className="text-[clamp(1.4rem,4vw,2.4rem)]">Create Posts</h2>
          </div>
          <div>
            <EditorClient />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
