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
    name: "Profile",
    href: "/dashboard/profile",
    icon: UserRound,
  },
];

export const dataNav = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: (
        <House
        />
      ),
    },
    {
      title: "Posts",
      url: "/dashboard/posts",
      icon: (
        <FileText
        />
      ),
    },
    {
      title: "Profile",
      url: "/dashboard/profile",
      icon: (
        <UserRound
        />
      ),
    },
    
  ],
}