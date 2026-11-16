import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { logout } from "@/lib/auth/auth";
import { Form } from "@base-ui/react";

const Logout = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col mt-10 px-10 items-start gap-8">
        <h1 className="text-[clamp(1.8rem,4vw,3rem)]">Logout Page</h1>

        <div className="w-full ">
          <Badge className="w-[100px] text-left">Warning</Badge>
          <Form
            action={logout}
            className="w-full flex flex gap-2 justify-between items-center"
          >
            <h2 className="w-[40%] text-[clamp(1rem,2vw,1.5rem)]">
              Are you shure about it? You want to logout and leave this session?
            </h2>
            <Button
              type="submit"
              className="w-[15rem] h-[2.5rem] cursor-pointer"
            >
              Logout
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Logout;
