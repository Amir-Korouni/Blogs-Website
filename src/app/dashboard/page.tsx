import { Button } from "@/shared/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import { MoveRightIcon } from "lucide-react";
import Link from "next/link";
import { auth, logout } from "@/shared/lib/auth/auth";
import { redirect } from "next/navigation";
import { Form } from "@base-ui/react";
import DashboardHeader from "@/components/dashboard/dashboardHeader";
import EditPass from "@/features/dashboard/EditPass";

import { Suspense } from "react";
import { PostGrid } from "@/components/posts/PostGrid";
import Loading from "./loading";
import EditDialog from "@/features/dashboard/EditDialog";
import {
  postsControllerGetPosts,
  usersControllerGetMyProfile,
} from "@/shared/api/generated";

const Page = async () => {
  const session = await auth();

  if (session?.user.role !== "user") {
    redirect("/admin");
  }

  const userInfo = await usersControllerGetMyProfile({
    headers: { Authorization: `Bearer ${session?.user.accessToken}` },
  });

  const id = userInfo.data.id;

  const usersPost = await postsControllerGetPosts(
    {
      authorId: id,
    },
    {
      headers: { Authorization: `Bearer ${session?.user.accessToken}` },
    },
  );

  return (
    <main className="w-full min-w-0  min-h-screen ">
      <DashboardHeader user={userInfo.data.username} />

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
                        {userInfo.data.username}
                      </h2>
                    </div>

                    <div>
                      <label className="text-sm text-muted-foreground">
                        Your Gmail:
                      </label>

                      <h2 className="text-base sm:text-lg font-medium break-all">
                        {userInfo.data.email}
                      </h2>
                    </div>

                    <div>
                      <Form action={logout}>
                        <Button type="submit">Logout</Button>
                      </Form>
                    </div>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex flex-col gap-4 mt-auto">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Manage your personal information and keep your account details
                  up to date.
                </p>
                <EditDialog
                  userId={userInfo.data.id}
                  accessToken={session.user.accessToken}
                />
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

                <EditPass />
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="w-full border rounded-xl p-4 sm:p-6 space-y-5">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
            <h2 className="text-lg sm:text-xl font-semibold">Posts</h2>

            <Link
              href={"/dashboard/create"}
              className="flex items-center gap-2 text-sm sm:text-base hover:text-primary transition-colors w-fit"
            >
              <span>Create a Post</span>
              <MoveRightIcon size={18} />
            </Link>
          </div>

          <p className="text-sm sm:text-base text-muted-foreground">
            Discover whats new on DEVLOG.
            <br />
            {userInfo.data.username} write a {usersPost.data.length} posts and
            other people see that.
          </p>

          <div className="w-full min-w-0">
            <Suspense fallback={<Loading />}>
              <PostGrid posts={usersPost.data} />
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
        </div>
      </section>
    </main>
  );
};

export default Page;
