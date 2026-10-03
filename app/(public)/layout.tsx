import Navbar from "@/components/layout/Navbar/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ThemeProvider>
        <Navbar />
        <main>{children}</main>
      </ThemeProvider>
    </>
  );
}
