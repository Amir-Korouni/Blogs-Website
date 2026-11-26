import Footer from "@/widgets/Footer/Footer";
import Navbar from "@/widgets/Navbar/Navbar";
import QueryProvider from "@/components/providers/QueryProvider";
import { Toaster } from "@/shared/ui/sonner";
import { ThemeProvider } from "next-themes";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <QueryProvider>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
        <Toaster />
      </QueryProvider>
    </>
  );
}
