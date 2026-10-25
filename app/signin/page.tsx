import { GalleryVerticalEnd } from "lucide-react";
import { LoginForm } from "@/components/login-form";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sign in",
  description:
    "Sign in to created account and learn all of things about technologies or share experiences.",

  robots: {
    index: false,
    follow: false,
  },
};

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link href="/" className="flex items-center gap-2 font-medium">
            <div className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <GalleryVerticalEnd className="size-4" />
            </div>
            DEVLOGS
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block relative min-h-screen  flex items-center justify-between">
        <section
          className="w-[100%] h-[100vh] 
          max-md:absolute
          max-md:inset-0
          max-md:w-full
          max-md:h-full
          max-md:-z-10
          bg-gradient-to-br from-[#020617] via-[#0F172A] to-[#164E63]
          text-white"
        >
          <div className="size-full flex flex-col items-center justify-center gap-10">
            <h2 className="w-[400px] text-left text-bold text-[clamp(2rem,4vw,4rem)]">
              DEVLOG
            </h2>
            <div className="w-[400px] flex flex-col gap-5 text-[clamp(1rem,2vw,1.5rem)] text-left">
              <h3>Build your knowledge </h3>
              <br />
              <h3>share your ideas and experiences</h3>
            </div>
          </div>
        </section>
        <section />
      </div>
    </div>
  );
}
