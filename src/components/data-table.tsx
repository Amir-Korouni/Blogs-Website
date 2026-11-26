"use client";

import { Button } from "@/shared/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/table";

import { Posts } from "@/shared/Types/general.type";

import { Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../shared/ui/alert-dialog";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { usePostsControllerDeletePost } from "@/shared/api/generated";

type PostTableProps = {
  data: Posts[];
  accessToken: string;
};

export function DataTable({ data: posts, accessToken }: PostTableProps) {
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);
  const queryClient = useQueryClient();

  const { mutate: deletePost, isPending } = usePostsControllerDeletePost({
    axios: {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
    mutation: {
      onSuccess: () => {
        setSelectedPostId(null);
        queryClient.invalidateQueries({
          queryKey: ["/posts"],
        });
      },
      onError: () => {
        console.error("Failed to delete post");
      },
    },
  });

  return (
    <div className="flex flex-col gap-2">
      <div className="overflow-hidden rounded-lg border">
        <Table className="min-w-[700px] man-h-[900px]">
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">Id</TableHead>
              <TableHead className="w-[35%] text-center">Title</TableHead>
              <TableHead className="text-center">Category</TableHead>
              <TableHead className="text-center">Status</TableHead>
              <TableHead className="text-center">Published At</TableHead>
              <TableHead className="text-right ">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {posts.map((post) => (
              <TableRow key={post.id} className="text-center">
                <TableCell>{post.id}</TableCell>

                <TableCell className="max-w-[260px] truncate font-medium">
                  {post.title}
                </TableCell>

                <TableCell>{post.category.name}</TableCell>

                <TableCell>{post.status}</TableCell>

                <TableCell>
                  <time dateTime={post.createdAt}>
                    {new Date(post.createdAt).toLocaleDateString()}
                  </time>
                </TableCell>

                <TableCell>
                  <div className="flex justify-end gap-2">
                    <Link href={`/admin/posts/${post.id}/edit`}>
                      <Button
                        variant="outline"
                        size="icon"
                        aria-label={`Edit ${post.title}`}
                      >
                        <Pencil className="size-4" />
                      </Button>
                    </Link>

                    <AlertDialog
                      open={selectedPostId === post.id}
                      onOpenChange={(open) => {
                        setSelectedPostId(open ? post.id : null);
                      }}
                    >
                      <AlertDialogTrigger
                        render={
                          <Button
                            variant="outline"
                            size="icon"
                            aria-label={`Delete ${post.title}`}
                          />
                        }
                      >
                        <Trash2 className="size-4 text-destructive" />
                      </AlertDialogTrigger>

                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Delete this post?</AlertDialogTitle>

                          <AlertDialogDescription>
                            Are you sure you want to delete
                            <strong> {post.title}</strong>? This action cannot
                            be undone.
                          </AlertDialogDescription>
                        </AlertDialogHeader>

                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>

                          <AlertDialogAction
                            disabled={isPending}
                            onClick={() => deletePost({ id: Number(post.id) })}
                          >
                            {isPending ? "Deleting..." : "Delete"}
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </TableCell>
              </TableRow>
            ))}

            {posts.length === 0 && (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="h-24 text-center text-muted-foreground"
                >
                  No posts found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* <Pagination /> */}
    </div>
  );
}
