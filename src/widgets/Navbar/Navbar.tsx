"use client";
import Link from "next/link";
import ThemeToggle from "@/shared/ui/ThemeToggle";
import NavLinks from "./Navlinks";
import MobileNav from "./MobileNav";
import { signInUp } from "@/shared/config/navigation.config";
import { useSession } from "next-auth/react";
import { useScrolled } from "@/shared/hooks/useScrolled";

const Navbar = () => {
  const scrolled = useScrolled(400);
  const { data: session, status } = useSession();
  return (
    <>
      <nav
        className={`w-full h-[100px] duration-300 ${scrolled ? "fixed z-15 top-0 bg-[#111827]/90 shadow-lg backdrop-blur-md" : "relative bg-transparent"}`}
      >
        <section className="hidden lg:flex size-full flex justify-around items-center px-10 bg-[#111827] text-white">
          <section>
            <h2>DEVLOG</h2>
          </section>
          <section className="w-[30vw] flex justify-between items-center">
            <NavLinks />
            <section className="flex gap-5">
              {session?.user.role === "user" && (
                <Link
                  href="/dashboard"
                  className="w-[80px] h-[40px] duration-200 bg-[#2563EB] hover:bg-[#1D4ED8] rounded-[10px] flex justify-center items-center"
                >
                  <h3 className="w-full text-[clamp(0.5rem,0.8vw,1rem)] text-center">
                    {session.user.name}
                  </h3>
                </Link>
              )}

              {session?.user.role === "admin" && (
                <Link
                  href="/admin"
                  className="w-auto h-[40px] duration-200 bg-[#2563EB] hover:bg-[#1D4ED8] rounded-[10px] flex justify-center items-center"
                >
                  <h3>
                    {session.user.name}({session.user.role})
                  </h3>
                </Link>
              )}

              {!session?.user && (
                <Link
                  href={signInUp.Signin.href}
                  className="w-[80px] h-[40px] duration-200 bg-[#2563EB] hover:bg-[#1D4ED8] rounded-[10px] flex justify-center items-center"
                >
                  <h3>{signInUp.Signin.name}</h3>
                </Link>
              )}
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
