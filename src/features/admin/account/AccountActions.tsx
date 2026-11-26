import { Button } from "@/shared/ui/button";
import { logout } from "@/shared/lib/auth/auth";
import { Form } from "@base-ui/react";

const AccountActions = () => {
  return (
    <div className="w-full h-[300px] px-5 m-auto mt-5 flex flex-col justify-center">
      <h2 className="text-[clamp(1.4rem,4vw,2.4rem)]">Account Actions</h2>
      <div className="w-full h-[50%] flex justify-between items-center">
        <h3 className="text-left text-[clamp(0.9rem,1.2vw,1.8rem)]">
          Sign out of your account
        </h3>
      </div>
      <div className="w-full h-[50%] flex justify-center">
        <Form>
          <Button
            formAction={logout}
            variant={"outline"}
            className="w-[20vw] cursor-pointer"
            type="submit"
          >
            Logout
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AccountActions;
