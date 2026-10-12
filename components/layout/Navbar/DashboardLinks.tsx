import { DashboardNavLinks } from "@/config/dashboardLinks";
import { navLinks } from "@/config/navigation";
import { clsx } from "cn";
import { Link2Icon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DashboardNav = () => {
  const pathname = usePathname();
  return (
    <>
      {DashboardNavLinks.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 duration-400 rounded-md bg-blue-800 p-3 text-sm font-medium hover:bg-[#c3ccd6] hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-sky-200 text-blue-600": pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
};

export default DashboardNav;
