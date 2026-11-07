import { BookAIcon, ChartArea, FileText, House, Tag, User } from "lucide-react";

export const dataNavAdmin = {
  navMain: [
    {
      title: "Overview",
      url: "/admin",
      icon: <House />,
    },
    {
      title: "Posts",
      url: "/admin/posts",
      icon: <FileText />,
    },
    {
      title: "Categories",
      url: "/admin/categories",
      icon: <BookAIcon />,
    },
    {
      title: "Tags",
      url: "/admin/tags",
      icon: <Tag />,
    },
    {
      title: "Users",
      url: "/admin/users",
      icon: <User />,
    },
    {
      title: "Analytics",
      url: "/admin/analytics",
      icon: <ChartArea />,
    },
  ],
};
