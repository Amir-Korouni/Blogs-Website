"use client";
import { navLinks } from "@/config/navigation";
import { clsx } from "cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const pathname = usePathname();
  return (
    <>
      <ul className="w-[55%] flex justify-between items-center">
        {navLinks.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={clsx("duration-200 hover:text-[#1D4ED8] hover:underline", {"text-[#1D4ED8] underline": pathname === item.href})}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavLinks;
