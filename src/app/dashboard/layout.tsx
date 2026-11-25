import type { Metadata } from "next";
import "@/app/globals.css";
import AuthProtected from "@/lib/auth/auth-Protected";
import QueryProvider from "@/components/providers/QueryProvider";

export const metadata: Metadata = {
  title: {
    template: "%s | DEVLOG Dashboard",
    default: "Dashboard",
  },

  description: "Manage your DEVLOG content.",

  robots: {
    index: false,
    follow: false,
  },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  AuthProtected();

  return (
    <QueryProvider>
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full grow p-6 overflow-x-hidden md:overflow-y-auto">
          {children}
        </div>
      </div>
    </QueryProvider>
  );
}
