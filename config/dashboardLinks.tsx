import {
  FolderOpen,
  House,
  UserRound,
  LucideIcon,
  FileText,
} from "lucide-react";

type linksType = {
  name: string;
  href: string;
  icon: LucideIcon;
};

export const DashboardNavLinks: linksType[] = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: House,
  },
  {
    name: "Posts",
    href: "/dashboard/posts",
    icon: FileText,
  },
  {
    name: "Categories",
    href: "/dashboard/categories",
    icon: FolderOpen,
  },
  {
    name: "Profile",
    href: "/dashboard/profile",
    icon: UserRound,
  },
];
