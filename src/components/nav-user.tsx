"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { DropdownMenu, DropdownMenuTrigger } from "@/shared/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/widgets/admin-sidebar/sidebar";
import { useSession } from "next-auth/react";

export function NavUser() {
  const { isMobile } = useSidebar();
  const session = useSession();
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <SidebarMenuButton size="lg" className="aria-expanded:bg-muted" />
            }
          >
            <Avatar className="size-8 rounded-lg grayscale">
              <AvatarImage
                src={session.data?.user.avatar}
                alt={session.data?.user.name}
              />
              <AvatarFallback className="rounded-lg">CN</AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">
                {session.data?.user.name}
              </span>
              <span className="truncate text-xs text-foreground/70">
                {session.data?.user.email}
              </span>
            </div>
          </DropdownMenuTrigger>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
