import DashboardNavbar from "@/components/layout/Navbar/DashboardNavbar";
import type { Metadata } from "next";
import "@/app/globals.css";

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
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <DashboardNavbar />
      </div>
      <div className="w-full grow p-6 overflow-hidden md:overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
