"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { Menu } from "lucide-react";
import Link from "next/link";

const MobileNav = () => {
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
              <Link href="#about">f</Link>
              <Link href="#skills">f</Link>
              <Link href="#project">f</Link>
              <Link href="#experience">f</Link>
              <Link href="#contact">f</Link>
              <div className="flex gap-4">
                <div>
                  <ThemeToggle />
                </div>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </section>
    </>
  );
};

export default MobileNav;
