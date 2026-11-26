import { CreateCategory } from "@/features/admin/category/CreateCategory";
import { auth } from "@/shared/lib/auth/auth";

const Page = async () => {
  const session = await auth();

  return (
    <>
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-col gap-2">
          <div className="w-full px-5 m-auto mt-5 flex justify-between items-center">
            <h2 className="text-[clamp(1.4rem,4vw,2.4rem)]">Create Category</h2>
          </div>
          <div>
            <CreateCategory accessToken={session?.user.accessToken} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
