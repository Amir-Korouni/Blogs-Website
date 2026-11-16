import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const PersonalInformation = () => {
  return (
    <section className="w-full h-[70vh] text-zinc-100 flex flex-col justify-between items-start border-b ">
      <div className="w-full flex justify-between items-center">
        <div className="text-foreground pl-10">
          <h2 className="text-[clamp(0.8rem,1.8vw,1.5rem)]">
            Personal Information
          </h2>
          <p className="text-[clamp(0.8rem,3vw,1.5rem)]">
            Update your personal details.
          </p>
        </div>
        <div className="xl:w-[300px] xl:h-[200px] md:w-[200px] md:h-[150px] sm:w-[100px] sm:h-[100px] flex justify-center items-center bg-primary">
          <h2 className="text-[clamp(0.8rem,1.8vw,1.5rem)]">
            Personal Information
          </h2>
        </div>
      </div>
      <form
        action=""
        className="w-[60%] h-full ml-10 bg-card flex flex-col justify-around border rounded px-10"
      >
        <div className="w-full flex justify-between items-center">
          <div>
            <label htmlFor="FullName">FullName</label>
            <Input
              type="text"
              name="FullName"
              id="FullName"
              aria-describedby="input-Fullname"
              className="
                          w-full
                          h-10
                          rounded
                          border
                          border-gray-300
                          px-3
                          py-2
                          focus:outline-none
                          focus:ring-2
                          focus:ring-blue-500
                          focus:border-blue-500
                              "
            />
          </div>
          <div>
            <label htmlFor="UserName">User Name</label>
            <Input
              type="text"
              name="UserName"
              id="UserName"
              aria-describedby="input-UserName"
              className="
                          w-full
                          h-10
                          rounded
                          border
                          border-gray-300
                          px-3
                          py-2
                          focus:outline-none
                          focus:ring-2
                          focus:ring-blue-500
                          focus:border-blue-500
                              "
            />
          </div>
        </div>
        <div>
          <label htmlFor="Email">Email</label>
          <Input
            type="email"
            name="email"
            id="email"
            aria-describedby="input-email"
            className="
                      w-full
                      h-10
                      rounded
                      border
                      border-gray-300
                      px-3
                      py-2
                      focus:outline-none
                      focus:ring-2
                      focus:ring-blue-500
                      focus:border-blue-500
                      "
          />
        </div>
        <div>
          <label htmlFor="Bio">Bio</label>
          <Textarea
            name="Bio"
            id="Bio"
            placeholder="Tell readers about yourself..."
          />
        </div>
        <div className="w-full flex justify-end">
          <Button
            type="submit"
            aria-label="Change your data"
            className="w-[200px] rounded"
          >
            Save Change
          </Button>
        </div>
      </form>
    </section>
  );
};

export default PersonalInformation;
