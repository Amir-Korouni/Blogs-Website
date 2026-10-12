import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";

import { Pencil, Trash2 } from "lucide-react";
import { Posts } from "@/Types/post";

type PostTableType = {
  posts: Posts[];
};

export default async function PostsTable({ posts }: PostTableType) {
  if (posts.length === 0) {
    return (
      <section className="w-full h-full flex justify-center items-center">
        <p className="text-lg text-muted-foreground">No posts found.</p>
      </section>
    );
  }
  return (
    <div className="w-full h-full overflow-hidden rounded-lg border ">
      <div className="w-full overflow-x-auto">
        <Table className="min-w-[700px]">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[35%]">Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {posts.map((post) => (
              <TableRow key={post.id}>
                <TableCell className="max-w-[260px] truncate font-medium">
                  {post.title}
                </TableCell>

                <TableCell>{post.category}</TableCell>

                <TableCell>{post.status}</TableCell>

                <TableCell className="whitespace-nowrap text-muted-foreground">
                  {post.publishedAt}
                </TableCell>

                <TableCell>
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label={`Edit ${post.title}`}
                    >
                      <Pencil className="size-4" />
                    </Button>

                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label={`Delete ${post.title}`}
                    >
                      <Trash2 className="size-4 text-destructive" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
