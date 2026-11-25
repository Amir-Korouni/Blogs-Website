import { EditUser } from "@/components/users/EditUser";
import { auth } from "@/lib/auth/auth";

type EditType = {
  params: Promise<{ id: string }>;
};

const Edit = async ({ params }: EditType) => {
  const { id } = await params;
  const session = await auth();
  
  return (
    <div className="w-full flex flex-1 flex-col">
      <div className="@container/main flex flex-col justify-center items-center gap-10">
        <div className="w-full px-5 m-auto mt-5 flex justify-start items-center">
          <h2 className="text-[clamp(1.4rem,4vw,2.4rem)]">
            Edit User with id: {id}
          </h2>
        </div>
        <div className="w-full px-10">
          <EditUser
            userId={Number(id)}
            accessToken={session?.user.accessToken}
          />
        </div>
      </div>
    </div>
  );
};

export default Edit;
