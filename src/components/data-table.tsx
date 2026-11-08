import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Posts } from "@/Types/post.type";

import { Pencil, Trash2 } from "lucide-react";
import Link from "next/link";

type PostTableProps = {
  data: Posts[];
};

export function DataTable({ data: posts }: PostTableProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="overflow-hidden rounded-lg border">
        <Table className="min-w-[700px]">
          <TableHeader>
            <TableRow>
              <TableHead>Id</TableHead>
              <TableHead className="w-[35%]">Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Published At</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {posts.map((post) => (
              <TableRow key={post.id}>
                <TableCell>{post.id}</TableCell>

                <TableCell className="max-w-[260px] truncate font-medium">
                  {post.title}
                </TableCell>

                <TableCell>{post.category}</TableCell>

                <TableCell>{post.status}</TableCell>

                <TableCell>{post.publishedAt}</TableCell>

                <TableCell>
                  <div className="flex justify-end gap-2">
                    <Link href={post.id}>
                      <Button
                        variant="outline"
                        size="icon"
                        aria-label={`Edit ${post.title}`}
                      >
                        <Pencil className="size-4" />
                      </Button>
                    </Link>

                    <Button
                      variant="outline"
                      size="icon"
                      aria-label={`Delete ${post.title}`}
                    >
                      <Trash2 className="size-4 text-destructive" />
                    </Button>
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
