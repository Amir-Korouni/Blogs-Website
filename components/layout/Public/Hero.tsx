import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <>
      <section className="w-full h-[100vh] bg-background">
        <section className="w-[50%] md:w-[60%] sm:w-[80%] h-full m-auto flex flex-col gap-15 justify-center items-center">
          <h2 className="w-full text-left text-[clamp(2.5rem,7vw,4rem)]">
            DEVLOG
          </h2>
          <div className="w-full">
            <h3 className="text-[clamp(1rem,2.5vw,2rem)]">
              Share knowledge.
              <br />
              Build better software.
            </h3>
          </div>
          <div className="w-full">
            <p className="text-left text-[clamp(0.9rem,1.2vw,1.8rem)]">
              DEVLOG is a place where developers share experiences, solve
              problems, and learn modern technologies. Do you like thie place?
              you can read or share your experiences
            </p>
          </div>
          <div className="w-full flex justify-between">
            <Button
              size="lg"
              aria-label="Explore more Posts"
              className="cursor-pointer rounded h-[50px] bg-[#3B82F6] p-6 max-md:w-[120px] md:h-[40px] max-sm:w-[100px] max-sm:h-[40px] text-[clamp(0.6rem,1.2vw,1.8rem)]"
            >
              Explore more Posts
            </Button>
            <Button
              size="lg"
              aria-label="Start writing post"
              className="cursor-pointer rounded h-[50px] bg-[#3B82F6] p-6 max-md:w-[120px] md:h-[40px] max-sm:w-[100px] max-sm:h-[40px] text-[clamp(0.6rem,1.2vw,1.8rem)]"
            >
              Start Writing
            </Button>
          </div>
        </section>
        <div
          className="
          absolute
          top-[25%]
          left-[30%]
          h-72
          w-72
          -translate-x-1/2
          rounded-full
          bg-[#164E63]
          opacity-30
          blur-[120px]
          "
        />
      </section>
    </>
  );
};

export default Hero;
