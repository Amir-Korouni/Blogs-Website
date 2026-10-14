import { Button } from "@/components/ui/button";
import Link from "next/link";

const AccountSecurity = () => {
  return (
    <section className="w-full h-[30vh] text-zinc-100 flex justify-between items-start border-b ">
      <div className="text-foreground px-10 mt-5">
        <h2 className="text-[clamp(1.8rem,4vw,3rem)] w-full text-cetner">
          Account Security
        </h2>
        <h2 className="text-[clamp(0.8rem,3vw,1.5rem)] font-bold">Password</h2>
        <p className="text-[clamp(0.8rem,3vw,1.5rem)]">
          Change your password to keep your account secure.
        </p>
        <Link href="/changepass">
          <Button className="w-[200px] cursor-pointer rounded">
            Change Password
          </Button>
        </Link>
      </div>
      <div className="xl:w-[300px] xl:h-[200px] md:w-[200px] md:h-[150px] sm:w-[100px] sm:h-[100px] flex justify-center items-center bg-primary">
        <h2 className="text-[clamp(0.8rem,1.8vw,1.5rem)]">Account Security</h2>
      </div>
    </section>
  );
};

export default AccountSecurity;
