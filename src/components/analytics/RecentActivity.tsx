import {
  FilePlus2,
  FilePenLine,
  FileCheck2,
  Trash2,
  FolderPlus,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import Link from "next/link";

type ActivityType =
  | "POST_CREATED"
  | "POST_UPDATED"
  | "POST_PUBLISHED"
  | "POST_DELETED"
  | "CATEGORY_CREATED";

type Activity = {
  id: string;
  type: ActivityType;
  title: string;
  description: string;
  createdAt: string;
};

const activities: Activity[] = [
  {
    id: "1",
    type: "POST_PUBLISHED",
    title: "Post Published",
    description: "Understanding React Server Components",
    createdAt: "10 minutes ago",
  },
  {
    id: "2",
    type: "POST_UPDATED",
    title: "Post Updated",
    description: "Introduction to Go Concurrency",
    createdAt: "2 hours ago",
  },
  {
    id: "3",
    type: "CATEGORY_CREATED",
    title: "Category Created",
    description: "AI Engineering",
    createdAt: "Yesterday",
  },
  {
    id: "4",
    type: "POST_CREATED",
    title: "New Post Created",
    description: "Getting Started with Next.js",
    createdAt: "Yesterday",
  },
  {
    id: "5",
    type: "POST_DELETED",
    title: "Post Deleted",
    description: "Old JavaScript Guide",
    createdAt: "2 days ago",
  },
];

const activityConfig: Record<
  ActivityType,
  {
    icon: LucideIcon;
    color: string;
    badge: string;
  }
> = {
  POST_CREATED: {
    icon: FilePlus2,
    color: "bg-blue-500/10 text-blue-500",
    badge: "Created",
  },
  POST_UPDATED: {
    icon: FilePenLine,
    color: "bg-orange-500/10 text-orange-500",
    badge: "Updated",
  },
  POST_PUBLISHED: {
    icon: FileCheck2,
    color: "bg-green-500/10 text-green-500",
    badge: "Published",
  },
  POST_DELETED: {
    icon: Trash2,
    color: "bg-red-500/10 text-red-500",
    badge: "Deleted",
  },
  CATEGORY_CREATED: {
    icon: FolderPlus,
    color: "bg-purple-500/10 text-purple-500",
    badge: "Category",
  },
};

export default function RecentActivity() {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="space-y-1">
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Latest activities across your blog.</CardDescription>
        </div>

        <Link
          href="/admin/activity"
          className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          View all
          <ArrowRight className="size-4" />
        </Link>
      </CardHeader>

      <CardContent>
        <div className="relative space-y-6">
          {/* Timeline vertical line */}
          <div className="absolute left-[19px] top-5 bottom-5 w-px bg-border" />

          {activities.map((activity) => {
            const config = activityConfig[activity.type];
            const Icon = config.icon;

            return (
              <div key={activity.id} className="relative flex gap-4">
                {/* Activity Icon */}
                <div
                  className={`relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full ${config.color}`}
                >
                  <Icon className="size-4" />
                </div>

                {/* Activity Content */}
                <div className="flex min-w-0 flex-1 flex-col gap-1 pb-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="text-sm font-semibold">{activity.title}</h4>

                    <Badge variant="secondary" className="text-xs">
                      {config.badge}
                    </Badge>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    {activity.description}
                  </p>

                  <span className="text-xs text-muted-foreground">
                    {activity.createdAt}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
