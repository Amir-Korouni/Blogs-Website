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
  <html
    lang="en"
    className={`${roboto.className} h-full antialiased`}
    suppressHydrationWarning
  >
    <body className="min-h-full flex flex-col bg-color-background text-color-foreground">
      <ThemeProvider>{children}</ThemeProvider>
    </body>
  </html>;
}
