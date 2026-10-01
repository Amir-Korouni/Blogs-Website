import SigninForm from "@/Components/ui/signinForm";
import SingupForm from "@/Components/ui/signupForm";
import ThemeToggle from "@/Components/ui/ThemeToggle";
import { Moon, Sun } from "lucide-react";

const Page = () => {
  return (
    <>
      <main className="min-h-screen flex items-center justify-center px-4 py-8 text-white">
        <section
          className="
          w-full
          max-w-3xl
          h-[75vh]
          flex flex-col 
          items-center 
          justify-center 
          gap-8 
          bg-[#111827] 
          p-6 
          sm:p-8 
          rounded-lg 
          shadow-[0_10px_20px_rgba(59,130,246,0.30)]
        "
        >
          <div className="w-[70%] flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">DEVLOG</h1>
              <h2 className="text-xl sm:text-2xl mt-2">
                Sign up and have a great experience!
              </h2>
            </div>
            <div>
              <ThemeToggle />
            </div>
          </div>
          <SingupForm />
        </section>
      </main>
    </>
  );
};

export default Page;
