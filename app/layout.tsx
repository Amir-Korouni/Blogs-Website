import type { Metadata } from "next";
import "./globals.css";
import { roboto } from "@/font/font";
import ThemeProvider from "@/components/providers/ThemeProvider";

export const metadata: Metadata = {
  title: {
    template: "%s | DEVLOG",
    default: "DEVLOG - Developer Blog",
  },

  description:
    "DEVLOG is a developer blog where you can share experiences, solve problems, and learn about modern technologies.",

  keywords: [
    "Developer Blog",
    "Programming",
    "Frontend",
    "Backend",
    "AI Engineering",
    "Next.js",
    "React",
    "TypeScript",
  ],

  authors: [
    {
      name: "Y Team",
      url: "http://localhost:3001",
    },
  ],

  creator: "Y Team",
  publisher: "DEVLOG",

  metadataBase: new URL("http://localhost:3001"),

  openGraph: {
    title: "DEVLOG - Developer Blog",
    description:
      "Share experiences, solve problems, and learn modern technologies.",
    url: "http://localhost:3001",
    siteName: "DEVLOG",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "DEVLOG - Developer Blog",
    description: "A place for developers to share knowledge and learn.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${roboto.className} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground)]">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
