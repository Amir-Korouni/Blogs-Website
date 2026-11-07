import CategoryCardPage from "@/src/components/category/CategoryCardPage";
import { PostGrid } from "@/src/components/posts/PostGrid";
import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { navLinks } from "@/config/navigation.config";
import { getLatestPostsInDashboard } from "@/src/lib/api/posts.service";
import { MoveRightIcon } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import Loading from "./loading";

const Page = async () => {
  const posts = await getLatestPostsInDashboard();

  if (!posts?.isOk) {
    console.log(posts?.error.message);
    posts?.error.redirect();
    return;
  }

  return (
    <main className="w-full min-w-0">
      <section className="w-full min-h-[220px] sm:min-h-[260px] bg-[var(--latest-section)] text-zinc-100 flex flex-col justify-center items-center px-4 py-10">
        <div className="text-foreground text-center space-y-2 max-w-3xl">
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-bold">
            User Dashboard
          </h2>

          <p className="text-[clamp(0.9rem,2vw,1.2rem)]">Hello {"Amir"}! 👋</p>

          <p className="text-[clamp(0.85rem,2vw,1.2rem)]">
            Welcome to your personal space on DEVLOG.
          </p>

          <p className="text-sm sm:text-base">
            Explore new ideas, discover articles and manage your account.
          </p>
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">
          <div aria-label="Profile" className="min-w-0">
            <Card className="w-full h-full flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="text-base sm:text-lg">
                  👤 PERSONAL INFORMATION
                </CardTitle>
              </CardHeader>

              <CardContent>
                <div className="flex flex-col sm:flex-row items-center sm:items-center gap-5">
                  <div className="shrink-0 flex flex-col items-center gap-2">
                    <img
                      src="https://avatar.vercel.sh/shadcn1"
                      alt="Avatar"
                      width={120}
                      height={120}
                      className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover"
                    />

                    <h3 className="text-sm text-muted-foreground">Avatar</h3>
                  </div>

                  <div className="flex flex-col gap-5 w-full min-w-0 text-center sm:text-left">
                    <div>
                      <label className="text-sm text-muted-foreground">
                        Your Name:
                      </label>

                      <h2 className="text-lg sm:text-xl font-semibold break-words">
                        Amir Korouni
                      </h2>
                    </div>

                    <div>
                      <label className="text-sm text-muted-foreground">
                        Your Gmail:
                      </label>

                      <h2 className="text-base sm:text-lg font-medium break-all">
                        Amir@gmail.com
                      </h2>
                    </div>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex flex-col gap-4 mt-auto">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Manage your personal information and keep your account details
                  up to date.
                </p>

                <Button type="button" className="w-full">
                  Edit Profile
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div aria-label="Account Security" className="min-w-0">
            <Card className="w-full h-full flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="text-base sm:text-lg">
                  🔒 ACCOUNT SECURITY
                </CardTitle>

                <CardDescription>Protect your account</CardDescription>
              </CardHeader>

              <CardContent className="flex flex-col gap-5">
                <p className="text-sm sm:text-base leading-relaxed">
                  Keep your account secure by using a strong password and
                  updating it regularly.
                </p>

                <div className="bg-[var(--category-page)] border rounded-lg p-4 transition-colors duration-300 hover:bg-[var(--muted)]">
                  <h3 className="text-base sm:text-lg font-semibold">
                    Password Management
                  </h3>

                  <p className="text-sm sm:text-base text-muted-foreground mt-2">
                    Update your account password to maintain security.
                  </p>
                </div>
              </CardContent>

              <CardFooter className="flex flex-col gap-4 mt-auto">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Manage your personal password and keep your account details up
                  to date.
                </p>

                <Button type="button" className="w-full">
                  Change Password
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="w-full border rounded-xl p-4 sm:p-6 space-y-5">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
            <h2 className="text-lg sm:text-xl font-semibold">
              Latest Articles
            </h2>

            <Link
              href={navLinks[1].href}
              className="flex items-center gap-2 text-sm sm:text-base hover:text-primary transition-colors w-fit"
            >
              <span>View All</span>
              <MoveRightIcon size={18} />
            </Link>
          </div>

          <p className="text-sm sm:text-base text-muted-foreground">
            Discover what's new on DEVLOG.
          </p>

          <div className="w-full min-w-0">
            <Suspense fallback={<Loading />}>
              <PostGrid posts={posts.data} />
            </Suspense>
          </div>
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 mb-10">
        <div className="w-full border rounded-xl p-4 sm:p-6 space-y-5">
          <div>
            <h2 className="text-lg sm:text-xl font-semibold">
              Explore Categories
            </h2>
          </div>

          <p className="text-sm sm:text-base text-muted-foreground">
            Find articles based on your interests.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full min-w-0">
            <div className="min-w-0 w-full">
              <CategoryCardPage
                category={{ category: "Front-end", slug: "front-end" }}
                quantity={25}
              />
            </div>

            <div className="min-w-0 w-full">
              <CategoryCardPage
                category={{ category: "Back-end", slug: "back-end" }}
                quantity={20}
              />
            </div>

            <div className="min-w-0 w-full">
              <CategoryCardPage
                category={{ category: "DevOps", slug: "devops" }}
                quantity={18}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
