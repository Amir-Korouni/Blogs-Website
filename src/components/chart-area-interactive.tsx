"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { useViewControllerGetDailyViews } from "@/app/api/generated";
import { useQueryAuth } from "@/Types/general.type";

export interface DailyView {
  date: string;
  views: number;
}

const chartConfig = {
  views: {
    label: "Views",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function ChartAreaInteractive({ accessToken }: useQueryAuth) {
  const { data, isError, isLoading, error } = useViewControllerGetDailyViews(
    { startDate: "2026-11-10", endDate: "2026-11-30" },
    {
      axios: {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
      query: {
        enabled: !!accessToken,
        staleTime: 5 * 60 * 1000,
      },
    },
  );

  if (isLoading) return <p>Loading...</p>;

  if (isError) {
    console.error("Popular posts error:", error);
    return <p>Failed to load popular posts.</p>;
  }

  const dailyViews = (data?.data ?? []) as DailyView[];

  console.log("Complete response:", data);
  console.log("Response payload:", data?.data);

  return (
    <Card className="size-full">
      <CardHeader>
        <CardTitle>Area Chart</CardTitle>
        <CardDescription>
          Showing total visitors for the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={dailyViews}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />

            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />

            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />

            <Area
              dataKey="views"
              type="natural"
              fill="var(--color-views)"
              fillOpacity={0.4}
              stroke="var(--color-views)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="text-sm text-muted-foreground">
          Daily views over the selected period.
        </div>
      </CardFooter>
    </Card>
  );
}
