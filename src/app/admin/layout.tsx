import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { CSSProperties } from "react";
import { SiteHeader } from "@/components/site-header";
import { AppSidebar } from "@/components/app-sidebar";
import AuthProtected from "@/lib/auth/auth-Protected";
import QueryProvider from "@/components/providers/QueryProvider";
import { Toaster } from "@/components/ui/sonner";

type AdminType = {
  children: React.ReactNode;
};

export default function AdminLayout({ children }: AdminType) {
  AuthProtected();

  return (
    <QueryProvider>
      <SidebarProvider
        style={
          {
            "--sidebar-width": "calc(var(--spacing) * 72)",
            "--header-height": "calc(var(--spacing) * 12)",
          } as CSSProperties
        }
      >
        <AppSidebar variant="inset" />

        <SidebarInset>
          <SiteHeader />

          <main className="flex flex-1 flex-col">{children}</main>
        </SidebarInset>
        <Toaster closeButton className="radius-50" />
      </SidebarProvider>
    </QueryProvider>
  );
}
