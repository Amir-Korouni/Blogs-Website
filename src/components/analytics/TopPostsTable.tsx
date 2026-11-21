"use client";
import {
  useViewControllerGetPopularPosts,
} from "@/app/api/generated";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { analytics, useQueryAuth } from "@/Types/general.type";
import { AxiosResponse } from "axios";

export function TopPostsTable({ accessToken }: useQueryAuth) {
  const startDate = "2026-11-19";
  const endDate = "2026-12-29";

  const { data, isLoading, isError, error } = useViewControllerGetPopularPosts<
    AxiosResponse<analytics[]>
  >(
    { startDate, endDate },
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

  if (isLoading) {
    return <p>Loading popular posts...</p>;
  }

  if (isError) {
    console.error("Failed to load popular posts:", error);
    return <p>Failed to load posts. Please try again later.</p>;
  }


  return (
    <Table>
      <TableCaption>A list of your recent Posts.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="text-center">Posts</TableHead>
          <TableHead className="text-center">PostId</TableHead>
          <TableHead className="text-center">TotalViews</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.data.map((post) => (
          <TableRow key={post.postId} className="text-center">
            <TableCell className="font-medium">{post.title}</TableCell>
            <TableCell>{post.postId}</TableCell>
            <TableCell>{post.totalViews}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
