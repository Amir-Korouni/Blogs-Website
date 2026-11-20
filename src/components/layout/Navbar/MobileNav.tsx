"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { navLinks, signInUp } from "@/config/navigation.config";
import { Menu } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";

const MobileNav = () => {
  const { data: session } = useSession();
  return (
    <>
      <section className="flex shrink-0 lg:hidden size-full flex justify-between items-center px-10 bg-[#111827] text-white">
        <section>
          <h2>DEVLOG</h2>
        </section>
        <Sheet>
          <SheetTrigger className="inline-flex size-10 items-center justify-center rounded-md border">
            <Menu size={20} />
          </SheetTrigger>

          <SheetContent className="w-[80vw] sm:w-[350px] bg-[#111827] text-white">
            <nav className="flex flex-col gap-6 mt-10 px-5">
              <ul className=" flex flex-col justify-between gap-10">
                {navLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="duration-200 hover:text-[#1D4ED8] hover:underline"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex gap-4">
                <ThemeToggle />
                <section className="flex gap-5">
                  {session?.user.role === "user" && (
                    <Link
                      href="/dashboard"
                      className="w-[80px] h-[40px] duration-200 bg-[#2563EB] hover:bg-[#1D4ED8] rounded-[10px] flex justify-center items-center"
                    >
                      <h3 className="w-full text-[clamp(0.9rem,0.8vw,1rem)] text-center">{session.user.name}</h3>
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
                </section>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </section>
    </>
  );
};

export default MobileNav;
