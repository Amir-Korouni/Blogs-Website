import CategoryCardPage from "@/components/category/CategoryCardPage";
import { PostGrid } from "@/components/posts/PostGrid";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { navLinks } from "@/config/navigation.config";
import { getLatestPostsInDashboard } from "@/lib/api/posts.service";
import { MoveRight, MoveRightIcon } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

const Page = async () => {
  const posts = await getLatestPostsInDashboard();
  if (!posts?.isOk) {
    console.log(posts?.error.message);
    posts?.error.redirect();
    return;
  }
  return (
    <>
      <main className="w-full h-auto">
        <section className="w-full h-[30vh] bg-[var(--latest-section)] text-zinc-100 flex flex-col justify-center items-center">
          <div className="text-foreground">
            <h2 className="text-[clamp(1.8rem,4vw,3rem)]">User Dashboard</h2>
            <p className="text-[clamp(0.8rem,3vw,1.5rem)]">
              Hello {"Amir"}! 👋
            </p>
            <p className="text-[clamp(0.8rem,3vw,1.5rem)]">
              Welcome to your personal space on DEVLOG.
            </p>
            <p className="text-[clamp(0.8rem,3vw,1.5rem)]">
              Explore new ideas, discover articles and manage your account.
            </p>
          </div>
        </section>
        <section className="w-[100%] flex justify-around items-cetner">
          <div aria-label="Profile" className="w-[45%] h-[60vh]">
            <Card className="w-full h-full flex flex-col justify-between mt-5">
              <CardHeader>
                <CardTitle>👤 PERSONAL INFORMATION </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full flex justify-cetner items-center gap-6">
                  <div className="w-[80%] flex justify-between  gap-5">
                    <div>
                      <img
                        src="https://avatar.vercel.sh/shadcn1"
                        alt="Avatar"
                        width={200}
                        height={200}
                      />
                      <h3>Avatar.....</h3>
                    </div>
                    <div className="flex flex-col justify-center items-cetner gap-5">
                      <div>
                        <label htmlFor="Name">Your Name: </label>
                        <h2 className="text-[clamp(0.8rem,3vw,1.5rem)]">
                          {"Amir Korouni"}
                        </h2>
                      </div>
                      <div>
                        <label htmlFor="Gmail">Your Gmail: </label>
                        <h2 className="text-[clamp(0.8rem,3vw,1.5rem)]">
                          {"Amir@gmail.com"}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex-col gap-2">
                <div>
                  <p>
                    {" "}
                    Manage your personal information and keep your account
                    details up to date.
                  </p>
                </div>
                <Button type="submit" className="w-full">
                  Edit Profile
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div aria-label="Profile" className="w-[45%] h-[60vh]">
            <Card className="w-full h-full flex flex-col justify-between mt-5">
              <CardHeader>
                <CardTitle>🔒 ACCOUNT SECURITY </CardTitle>
                <CardDescription> Protect your account </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-5">
                <div className="w-full flex justify-cetner items-center gap-6 mx-5">
                  <h3 className="text-[clamp(0.8rem,3vw,1.5rem)]">
                    Keep your account secure by using a strong password and
                    updating it regularly.
                  </h3>
                </div>
                <div className="bg-[var(--category-page)] duration-400 border border-4 rounded mx-5 hover:bg-[var(--muted)]">
                  <h3 className="text-[clamp(0.8rem,3vw,1.5rem)] mx-5">
                    Password management
                  </h3>
                  <h3 className="text-[clamp(0.8rem,3vw,1.5rem)] mx-5">
                    Update your account password
                  </h3>
                </div>
              </CardContent>
              <CardFooter className="flex-col gap-2">
                <div>
                  <p>
                    {" "}
                    Manage your personal password and keep your account details
                    up to date.
                  </p>
                </div>
                <Button type="submit" className="w-full">
                  Change Password
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>
        <section className="w-full h-[55vh] mt-10 flex flex-col justify-center border border-3 rounded">
          <div className="flex justify-between items-center px-5">
            <h2 className="text-[clamp(0.8rem,3vw,1.5rem)] bg-[var(--card)] px-5">
              Latest Articles
            </h2>
            <Link
              href={navLinks[1].href}
              className="flex gap-2 bg-[var(--card)] px-5"
            >
              <h3>View All {<MoveRightIcon />}</h3>
            </Link>
          </div>
          <div className=" px-8">
            <p>Discover what's new on DEVLOG.</p>
          </div>
          <div className="w-full m-auto">
            <Suspense>
              <PostGrid posts={posts.data} />
            </Suspense>
          </div>
        </section>
        <section className="w-full h-[45vh] mt-10 flex flex-col justify-center border border-3 rounded">
          <div className="flex justify-between items-center px-5">
            <h2 className="text-[clamp(0.8rem,3vw,1.5rem)] bg-[var(--card)] px-5">
              Explore Categories
            </h2>
          </div>
          <div className="px-8">
            <p>Find articles based on your interests.</p>
          </div>
          <div className="w-[100%] xl:w-[100%] md:w-[85%] sm:w-[100%] flex justify-center gap-8 flex-wrap mt-10">
            <CategoryCardPage
              category={{ category: "Front-end", slug: "front-end" }}
              quantity={25}
            />
            <CategoryCardPage
              category={{ category: "Back-end", slug: "back-end" }}
              quantity={20}
            />
            <CategoryCardPage
              category={{ category: "DevOps", slug: "devops" }}
              quantity={18}
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default Page;
