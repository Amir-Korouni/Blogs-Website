import { Metadata } from "next";
import { SignupForm } from "@/components/signup-form"

export const metadata: Metadata = {
  title: "Sign up",
  description:
    "craete an acount for learn all of things about technologies or share experiences.",
};

export default function Page() {
  return (
    <main className="w-full flex min-h-svh  items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-xl">
        <SignupForm />
      </div>
    </main>
  )
}