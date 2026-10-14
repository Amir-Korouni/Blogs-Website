import { Button } from "@/components/ui/button";

const ProfileOverview = () => {
  return (
    <section className="w-full h-[40vh] text-zinc-100 flex justify-between items-start border-b ">
      <div className="w-full h-full flex justify-start items-center px-15">
        <div className="xl:w-[200px] xl:h-[200px] md:w-[100px] md:h-[100px] sm:w-[60px] sm:[60px] flex justify-center items-center bg-card rounded-[50%]">
          <img src="" alt="Avatar" />
        </div>
        <div className="w-[70%] h-[80%] flex flex-col justify-center items-center text-[clamp(0.8rem,2vw,1.5rem)]">
          <div className="w-[70%] flex justify-between items-center gap-10">
            <label htmlFor="Full Name">Full Name:</label>
            <h2>Amir Korouni</h2>
          </div>
          <div className="w-[70%] flex justify-between items-center gap-10">
            <label htmlFor="Email">Email: </label>
            <h2>Amir@gmail.com</h2>
          </div>
          <div className="w-[70%] flex justify-between items-center gap-10">
            <label htmlFor="Role">Role: </label>
            <Button variant="outline">Adminestrator</Button>
          </div>
        </div>
      </div>
      <div className="xl:w-[300px] xl:h-[200px] md:w-[200px] md:h-[150px] sm:w-[100px] sm:h-[100px] flex justify-center items-center bg-primary">
        <h2 className="text-[clamp(0.8rem,1.8vw,1.5rem)]">Profile Overview</h2>
      </div>
    </section>
  );
};

export default ProfileOverview;
