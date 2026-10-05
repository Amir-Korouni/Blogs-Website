"use client";
import Link from "next/link";
import ThemeToggle from "@/components/ui/ThemeToggle";
import NavLinks from "./Navlinks";
import MobileNav from "./MobileNav";
import { signInUp } from "@/config/navigation";
import { useScrolled } from "@/hooks/useScrolled";

const Navbar = () => {
  const scrolled = useScrolled(400);
  return (
    <>
      <nav
        className={`w-full h-[8vh] duration-300 ${scrolled ? "fixed z-15 top-0 bg-[#111827]/90 shadow-lg backdrop-blur-md" : "relative bg-transparent"}`}
      >
        <section className="hidden lg:flex size-full flex justify-around items-center px-10 bg-[#111827] text-white">
          <section>
            <h2>DEVLOG</h2>
          </section>
          <section className="w-[30vw] flex justify-between items-center">
            <NavLinks />
            <section className="flex gap-5">
              <Link
                href={signInUp.Signin.href}
                className="w-[80px] h-[40px] duration-200 bg-[#2563EB] hover:bg-[#1D4ED8] rounded-[10px] flex justify-center items-center"
              >
                <h3>{signInUp.Signin.name}</h3>
              </Link>
              {/* <h3><p className="text-sm">User Name</p></h3> */}
              <ThemeToggle />
            </section>
          </section>
        </section>
        <MobileNav />
      </nav>
    </>
  );
};

export default Navbar;
