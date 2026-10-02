import SigninForm from "@/Components/ui/signinForm";
import ThemeToggle from "@/Components/ui/ThemeToggle";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign in",
  description:
    "Sign in to created account and learn all of things about technologies or share experiences.",

  robots: {
    index: false,
    follow: false,
  },
};

const Page = () => {
  return (
    <main className="relative min-h-screen  flex items-center justify-between">
      <section
        className="w-[50%] h-[100vh] 
        max-md:absolute
        max-md:inset-0
        max-md:w-full
        max-md:h-full
        max-md:-z-10
        bg-gradient-to-br from-[#020617] via-[#0F172A] to-[#164E63]
        text-white"
      >
        <div className="size-full flex flex-col items-center justify-center gap-10">
          <h2 className="w-[400px] text-left text-bold text-[clamp(2rem,4vw,4rem)]">
            DEVLOG
          </h2>
          <div className="w-[400px] flex flex-col gap-5 text-[clamp(1rem,2vw,1.5rem)] text-left">
            <h3>Build your knowledge </h3>
            <br />
            <h3>share your ideas and experiences</h3>
          </div>
        </div>
      </section>
      <section
        className="
          w-[50%]
          max-md:w-[70%]
          max-lg:w-[80%]
          max-sm:w-[90%]
          max-w-3xl
          h-[60vh]
          mx-auto
          flex 
          flex-col 
          items-center 
          justify-center 
          gap-8 
          bg-[#0B1120] 
          p-6 
          sm:p-8 
          rounded-lg 
          shadow-[0_10px_20px_rgba(59,130,246,0.30)]
          text-white
        "
      >
        <div className="w-[70%] flex items-center justify-between">
          <div>
            <h1 className="text-[clamp(2rem,3vw,2.5rem)] font-bold">DEVLOG</h1>
            <h2 className="text-[clamp(1.8rem,3vw,1.8rem)] mt-2">
              Welcome back
            </h2>
          </div>
          <div>
            <ThemeToggle />
          </div>
        </div>

        <SigninForm />

        <div className="text-center text-sm sm:text-base">
          <p>Don't have an account?</p>

          <Link href="/signup" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Page;
