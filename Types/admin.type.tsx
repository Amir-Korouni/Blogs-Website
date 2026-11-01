import { Bell, Home, LogOut, Paperclip, Settings2Icon, User } from "lucide-react";

export const navSec = {
  navSecondary: [
    {
      title: "Settings",
      url: "/admin/settings",
      icon: <Settings2Icon />,
    },
    {
      title: "Account",
      url: "/admin/account",
      icon: <User />,
    },
    {
      title: "Back to main page",
      url: "/",
      icon: <Paperclip/>,
    },
    {
      title: "Logout",
      url: "/admin/logout",
      icon: <LogOut />,
    },
  ],
};
