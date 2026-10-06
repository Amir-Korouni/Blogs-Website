import { navLinks, signInUp } from "@/config/navigation";
import Link from "next/link";

const notFound = () => {
  return (
    <>
      <section className="size-full h-[100vh] flex flex-col justify-center items-center gap-[25px] bg-gradient-to-br from-[#020617] via-[#0F172A] to-[#164E63]">
        <div className="w-[70%] h-[80%] flex justify-center items-center bg-black/20 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-[10px] px-[15px] flex flex-col gap-[20px] relative">
          <div className="w-[70%] h-full flex flex-col justify-center items-center gap-[25px]">
            <h1 className="text-[150px] font-black text-[#164E63] drop-shadow-[0_0_25px_#164E63]">
              404
            </h1>
            <div className="bg-black/20 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-[10px] px-[15px] flex flex-col gap-[20px] relative">
              <h3 className="text-2xl text-zinc-100">Page Not Found</h3>
              <p className="text-white drop-shadow-[0_0_55px_#a855f7]">
                Sorry, we couldn't find that post.
              </p>
              <p className="text-white drop-shadow-[0_0_55px_#a855f7]">
                You may have mistyped the address or the page may have been
                moved. You can 
                <span className="w-[50px] text-blue-500 rounded duration-700 hover:bg-purple-500 hover:text-white shadow-purple-500/50">
                  <Link href={signInUp.Signin.href}>
                    {" "}
                    {signInUp.Signin.name}{" "}
                  </Link>
                </span>
                or see 
                <span className="w-[50px] text-blue-500 rounded duration-700 hover:bg-purple-500 hover:text-white shadow-purple-500/50">
                  <Link href={navLinks[1].href}> {navLinks[1].name} </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default notFound;
