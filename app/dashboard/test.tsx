/*
import DashboardTable from "@/components/dashboard/DashboardTable";
import SearchNew from "@/components/dashboard/SearchNew";
import { getSearchPost } from "@/lib/api/posts.service";
import { Suspense } from "react";
import Loading from "./loading";

type dashboardType = {
  searchParams: Promise<{ query?: string }>;
};

const Page = async ({ searchParams }: dashboardType) => {
  const { query } = await searchParams;
  const posts = await getSearchPost(query);
  if (!posts?.isOk) {
    console.log(posts?.error.message);
    posts?.error.redirect();
    return;
  }
  return (
    <>
      <main className="w-full h-[100vh] border">
        <section className="size-full flex flex-col justify-start items-center mt-10">
          <h2 className="w-full text-[clamp(1rem,2.5vw,2rem)] text-left ml-15">
            Dashboard
          </h2>
          <SearchNew />
          <div className="w-full h-[50vh] flex justify-center items-center">
            <Suspense fallback={<Loading />}>
              <DashboardTable posts={posts.data} />
            </Suspense>
          </div>
        </section>
      </main>
    </>
  );
};

export default Page;

*/





/*

const Page = async ({ searchParams }: Props) => {
  const { page, query, status, category } = await searchParams;

  const requestedPage = Number(page) || 1;

  const posts = await getSearchPost(query);
  if (!posts?.isOk) {
    console.log(posts?.error.message);
    posts?.error.redirect();
    return;
  }

  const filteredPosts = posts.data.filter((post) => {
    const matchesStatus = !status || post.status === status;
    const matchesCategory = !category || post.category === category;

    return matchesStatus && matchesCategory;
  });

  const pageSize = 10;
  const totalPosts = filteredPosts.length;
  const totalPages = Math.ceil(totalPosts / pageSize);

  const currentPage = Math.min(totalPages || 1, Math.max(1, requestedPage));

  const offset = (currentPage - 1) * pageSize;

  const paginatedPosts = filteredPosts.slice(offset, offset + pageSize);
  return (
    <>
      <main className="w-full h-[100vh] border">
        <section className="size-full flex flex-col  items-center mt-10">
          <div className="w-full flex justify-between items-center px-10">
            <h2 className="w-full text-[clamp(1rem,2.5vw,2rem)] text-left ml-15">
              Posts
            </h2>
            <Link href="/dashboard/posts/create">
              <Button
                aria-label="Create new post"
                className="
              xl:w-[200px]
              md:w-[150px]
              sm:w-[100px]
              h-10
              bg-blue-500
              text-white
              rounded
              hover:bg-blue-600
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
              cursor-pointer
            "
              >
                New Post
                <Plus />
              </Button>
            </Link>
          </div>
          <ToolBar />
          <div className="w-full h-[50vh] flex justify-center items-center">
            <Suspense fallback={<Loading />}>
              <PostsTable posts={paginatedPosts} />
            </Suspense>
          </div>
          <div className="mt-5 flex w-full justify-center">
            {paginatedPosts && (
              <Pagination currentPage={currentPage} totalPages={totalPages} />
            )}
          </div>
        </section>
      </main>
    </>
  );
};
*/


/*

"use client"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { EllipsisVerticalIcon, CircleUserRoundIcon, CreditCardIcon, BellIcon, LogOutIcon } from "lucide-react"

export function NavUser({
  user,
}: {
  user: {
    name: string
    email: string
    avatar: string
  }
}) {
  const { isMobile } = useSidebar()
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <SidebarMenuButton size="lg" className="aria-expanded:bg-muted" />
            }
          >
            <Avatar className="size-8 rounded-lg grayscale">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="rounded-lg">CN</AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">{user.name}</span>
              <span className="truncate text-xs text-foreground/70">
                {user.email}
              </span>
            </div>
            <EllipsisVerticalIcon className="ml-auto size-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="min-w-56"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuGroup>
              <DropdownMenuLabel className="p-0 font-normal">
                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                  <Avatar className="size-8">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">{user.name}</span>
                    <span className="truncate text-xs text-muted-foreground">
                      {user.email}
                    </span>
                  </div>
                </div>
              </DropdownMenuLabel>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <CircleUserRoundIcon
                />
                Account
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCardIcon
                />
                Billing
              </DropdownMenuItem>
              <DropdownMenuItem>
                <BellIcon
                />
                Notifications
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOutIcon
              />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
*/



/*
"use client";
import Link from "next/link";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useRef, useTransition } from "react";
import { useDebouncedCallback } from "use-debounce";

const SearchNew = () => {
  const searchParam = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const initialQuery = searchParam.get("query")?.toString() ?? "";
  const QueryRef = useRef(initialQuery);

  const handleChange = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParam);
    if (value) {
      params.set("query", value);
    } else {
      params.delete("query");
    }

    startTransition(() => {
      router.replace(
        params.toString() ? `${pathName}?${params.toString()}` : pathName,
      );
    });
  }, 500);

  return (
    <>
      <div className="w-full px-10 flex justify-between items-cetner mt-10">
        <Input
          name="searchDashbaord"
          id="searchDashbaord"
          type="search"
          placeholder="Search..."
          aria-describedby="Search-Dashboard-blogs"
          className="w-[40%]
                h-10
                rounded
                border
                border-gray-300
                px-3
                py-2
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
                focus:border-blue-500"
          defaultValue={QueryRef.current}
          onChange={(event) => {
            handleChange(event.target.value);
          }}
        />
        {isPending && (
          <p className="mt-2 text-sm text-muted-foreground">
            Updating Results...
          </p>
        )}
        <Link href="/dashboard/posts/create">
          <Button
            aria-label="Create new post"
            className="
              xl:w-[200px]
              md:w-[150px]
              sm:w-[100px]
              h-10
              bg-blue-500
              text-white
              rounded
              hover:bg-blue-600
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
              cursor-pointer
            "
          >
            New Post
            <Plus />
          </Button>
        </Link>
      </div>
    </>
  );
};

export default SearchNew;

*/