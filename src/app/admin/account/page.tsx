import AccountActions from "@/components/admin/account/AccountActions";
import { ChangePass } from "@/components/admin/account/ChangePassword";
import { ProfileInformation } from "@/components/admin/account/Profile-Information";

const page = () => {
  return (
    <>
      <div className="w-full flex flex-1 flex-col">
        <div className="w-full @container/main flex flex-col gap-10">
          <div className="w-full px-5 m-auto mt-5 flex flex-col justify-center">
            <h2 className="text-[clamp(1.4rem,4vw,2.4rem)]">Account</h2>
            <h3 className="text-left text-[clamp(0.9rem,1.2vw,1.8rem)]">
              Manage your account settings and personal information.
            </h3>
          </div>
          <div className="w-full flex justify-center items-center p-10 border-b-5 text-[var-[--foreground]]">
            <ProfileInformation />
          </div>
          <div className="w-full flex justify-center items-center p-10 border-b-5 text-[var-[--foreground]]">
            <ChangePass />
          </div>
          <AccountActions />
        </div>
      </div>
    </>
  );
};

export default page;
