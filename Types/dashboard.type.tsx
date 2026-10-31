import { Bell, LogOut, Settings2Icon, User } from "lucide-react";

export const navSec = {
  navSecondary: [
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: <Settings2Icon />,
    },
    {
      title: "Account",
      url: "/dashboard/account",
      icon: <User />,
    },
    {
      title: "Notification",
      url: "#",
      icon: <Bell />,
    },
    {
      title: "Logout",
      url: "/dashboard/logout",
      icon: <LogOut />,
    },
  ],
};
