import { roboto } from "@/font/font";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";

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
    <section className="min-h-screen bg-background text-foreground">
      {children}
    </section>
  );
}
