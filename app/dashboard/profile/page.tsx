import AccountSecurity from "@/components/dashboard/profile/AccountSecurity";
import PersonalInformation from "@/components/dashboard/profile/PersonalInformation";
import ProfileOverview from "@/components/dashboard/profile/ProfileOverview";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
};

const Page = () => {
  return (
    <>
      <main className="w-full h-auto bg-[var(--latest-section)]">
        <section className="w-full h-[20vh] text-zinc-100 flex flex-col justify-center items-center border-b">
          <div className="text-foreground">
            <h2 className="text-[clamp(1.8rem,4vw,3rem)]">Profile Settings</h2>
            <p className="text-[clamp(0.8rem,3vw,1.5rem)]">
              Manage your personal information and account preferences.
            </p>
          </div>
        </section>
        <ProfileOverview />
        <PersonalInformation />
        <AccountSecurity />
      </main>
    </>
  );
};

export default Page;
