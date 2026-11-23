import { EditCategory } from "@/components/category/EditForm";
import { auth } from "@/lib/auth/auth";

type EditCategoryPage = {
  params: Promise<{ id: number }>;
};

const EditPage = async ({ params }: EditCategoryPage) => {
  const { id } = await params;
  const session = await auth();
  return (
    <>
      <div className="w-full flex flex-1 flex-col">
        <div className="@container/main flex flex-col justify-center items-center gap-10">
          <div className="w-full px-5 m-auto mt-5 flex justify-start items-center">
            <h2 className="text-[clamp(1.4rem,4vw,2.4rem)]">
              Edit Category with id: {"id"}
            </h2>
          </div>
          <div className="w-full px-10">
            <EditCategory
              accessToken={session?.user.accessToken}
              categoryId={id}
              initialName={"category"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPage;
