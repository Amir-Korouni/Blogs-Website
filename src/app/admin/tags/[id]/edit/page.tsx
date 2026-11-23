import { EditTags } from "@/components/tags/EditTag";

type EditPageType = {
  params: Promise<{ id: string }>;
};

const EditPage = async ({ params }: EditPageType) => {
  const { id } = await params;

  console.log("Raw route ID:", id);
  console.log("Parsed route ID:", Number(id));

  return (
    <div className="w-full flex flex-1 flex-col">
      <div className="@container/main flex flex-col justify-center items-center gap-10">
        <div className="w-full px-5 m-auto mt-5 flex justify-start items-center">
          <h2 className="text-[clamp(1.4rem,4vw,2.4rem)]">
            Edit Tag with id: {id}
          </h2>
        </div>
        <div className="w-full px-10">
          <EditTags tagId={Number(id)} />
        </div>
      </div>
    </div>
  );
};

export default EditPage;
