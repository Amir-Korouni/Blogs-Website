"use client";

import * as React from "react";

import { NavDocuments } from "@/components/nav-documents";
import { NavSecondary } from "@/components/nav-secondary";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/widgets/admin-sidebar/sidebar";
import { CommandIcon } from "lucide-react";
import Link from "next/link";
import { navSec } from "@/shared/Types/admin.type";
import { NavUser } from "./nav-user";
import { dataNavAdmin } from "@/shared/config/adminLinks.config";
import AdminNav from "../widgets/Navbar/AdminLinks";
import { auth } from "@/shared/lib/auth/auth";
import { useSession } from "next-auth/react";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const session = useSession();

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              className="data-[slot=sidebar-menu-button]:p-1.5!"
              render={<Link href="/" />}
            >
              <CommandIcon className="size-5!" />
              <span className="text-base font-semibold">DEVLOGS</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <AdminNav item={dataNavAdmin.navMain} />
        <NavSecondary items={navSec.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
