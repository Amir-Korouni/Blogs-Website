"use client";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import { Posts } from "@/shared/Types/general.type";
import { FileEdit, CheckCircle2, FileText, EyeOff } from "lucide-react";

type sessionType = {
  data: Posts[];
};

export function SectionCards({ data: posts }: sessionType) {
  const totalPosts = posts.length;

  const publishedPosts = posts.filter(
    (post) => post.status === "published",
  ).length;

  const draftPosts = posts.filter((post) => post.status === "draft").length;

  return (
    <div className="grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4 dark:*:data-[slot=card]:bg-card">
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Total Posts</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {totalPosts}
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            All Posts in your Blog <FileText className="size-4" />
          </div>
          <div>
            Your Blogs system has a {totalPosts} that people learn from that.
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Published Posts</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {publishedPosts}
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            All Published Posts in your Blogs{" "}
            <CheckCircle2 className="size-4" />
          </div>
          <div className="text-muted-foreground">
            {publishedPosts} Published Posts existing in Blog
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Draft Posts</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {draftPosts}
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Posts waiting for publication <FileEdit className="size-4" />
          </div>
          <div className="text-muted-foreground">
            {draftPosts} posts is still draft status
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Draft Posts</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {draftPosts}
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Posts waiting for publication <FileEdit className="size-4" />
          </div>
          <div className="text-muted-foreground">
            {draftPosts} posts is still draft status
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
