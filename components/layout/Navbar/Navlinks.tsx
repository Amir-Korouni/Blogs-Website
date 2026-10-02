import { navLinks } from "@/config/navigation";
import Link from "next/link";

const NavLinks = () => {
  return (
    <>
      <ul className="w-[55%] flex justify-between items-center">
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
    </>
  );
};

export default NavLinks;
