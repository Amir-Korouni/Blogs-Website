import { SectionCards } from "@/components/section-cards";
import { Button } from "@/components/ui/button";
import UeserSectionCard from "@/components/users/UserSectionCards";
import { Plus } from "lucide-react";

const Page = () => {
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-col justify-center items-center gap-2">
        <div className="w-full px-5 m-auto mt-5 flex justify-between items-center">
          <h2 className="text-[clamp(1.4rem,4vw,2.4rem)]">User Managment</h2>
          <Button
            aria-label="create post"
            className="cursor-pointer min-w-[150px] min-h-[55px]"
          >
            Add User
            <Plus />
          </Button>
        </div>
        <div className="w-full px-5 m-auto mt-5 flex justify-between items-center">
          <h3 className="text-[clamp(1.4rem,4vw,2rem)]">
            Manage and monitor registered users.
          </h3>
        </div>
      </div>
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        <UeserSectionCard />
        <div>{/* <DataTable data={post} /> */}</div>
      </div>
    </div>
  );
};

export default Page;
