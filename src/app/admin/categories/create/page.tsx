import { CreateCategory } from "@/components/category/CreateCategory";

const Page = () => {
  return (
    <>
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-col gap-2">
          <div className="w-full px-5 m-auto mt-5 flex justify-between items-center">
            <h2 className="text-[clamp(1.4rem,4vw,2.4rem)]">Create Category</h2>
          </div>
          <div>
            <CreateCategory />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
