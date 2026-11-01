"use client";
import { SidebarMenuButton } from "@/components/ui/sidebar";
import { clsx } from "cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { Button } from "@/components/ui/button";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { CirclePlusIcon, MailIcon } from "lucide-react";

type globalType = {
  title: string;
  url: string;
  icon: React.ReactNode;
};

type adminNav = {
  item: globalType[];
};

const AdminNav = ({ item }: adminNav) => {
  const pathname = usePathname();
  return (
    <>
      <SidebarGroup>
        <SidebarGroupContent className="flex flex-col gap-2">
          <SidebarMenu>
            <SidebarMenuItem className="flex items-center gap-2">
              <SidebarMenuButton
                tooltip="Quick Create"
                className="min-w-8 bg-primary text-primary-foreground duration-200 ease-linear hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground"
              >
                <CirclePlusIcon />
                <span>Quick Create</span>
              </SidebarMenuButton>
              <Button
                size="icon"
                className="size-8 group-data-[collapsible=icon]:opacity-0"
                variant="outline"
              >
                <MailIcon />
                <span className="sr-only">Inbox</span>
              </Button>
            </SidebarMenuItem>
          </SidebarMenu>
          <SidebarMenu>
            {item.map((link) => {
              return (
                <SidebarMenuButton key={link.url}>
                  <Link
                    href={link.url}
                    className={clsx(
                      "flex w-[150px] grow items-center justify-center gap-2 duration-400 rounded-md p-3 text-sm font-medium hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 cursor-pointer",
                      {
                        "bg-[var(--category-page)] text-blue-600":
                          pathname === link.url,
                      },
                    )}
                  >
                    {link.icon}
                    <span>{link.title}</span>
                  </Link>
                </SidebarMenuButton>
              );
            })}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </>
  );
};

export default AdminNav;
