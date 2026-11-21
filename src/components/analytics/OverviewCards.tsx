"use client";

import { useViewControllerGetOverview } from "@/app/api/generated";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { analytics, useQueryAuth } from "@/Types/general.type";
import { AxiosResponse } from "axios";
import { TrendingUpIcon } from "lucide-react";

export function OverviewCardAnalytics({
  accessToken: accessToken,
}: useQueryAuth) {
  const { data, isLoading, isError, error } = useViewControllerGetOverview<
    AxiosResponse<analytics>
  >({
    axios: {
      headers: { Authorization: `Bearer ${accessToken}` },
    },
    query: {
      staleTime: 1000 * 60 * 5,
    },
  });
  if (isLoading) return <p>Loading analytics...</p>;

  if (isError) {
    console.error(error);
    return <p>Failed to load analytics.</p>;
  }


  return (
    <div className="grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4 dark:*:data-[slot=card]:bg-card">
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Posts</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {data?.data.totalPosts}
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Your Blogs system has a {data?.data.totalPosts} posts that people
            learn from that.
          </div>
          <div className="text-muted-foreground">
            Last systems check for 6 month ago
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Views</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {data?.data.totalViews}
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Your Blogs system has a {data?.data.totalViews} posts that people
            watched.
          </div>
          <div className="text-muted-foreground">
            Last systems check for 6 month ago
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>UnPublished</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            45
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            We already have a 45 unpublished posts.
          </div>
          <div className="text-muted-foreground">
            Last systems check for 6 month ago
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Unknown</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            100
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Steady performance increase <TrendingUpIcon className="size-4" />
          </div>
          <div className="text-muted-foreground">Meets growth projections</div>
        </CardFooter>
      </Card>
    </div>
  );
}
