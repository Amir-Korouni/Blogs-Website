"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/table";

import { Button } from "@/shared/ui/button";
import { Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import { Tag } from "@/shared/Types/general.type";
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
} from "../../shared/ui/alert-dialog";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useTagControllerDeleteTag } from "@/shared/api/generated";

type TagsTableProps = {
  tag: Tag[];
  accessToken: string;
};

export function DataTableTags({ tag, accessToken }: TagsTableProps) {
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);
  const queryClient = useQueryClient();

  const { mutate: deleteTag, isPending } = useTagControllerDeleteTag({
    axios: {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
    mutation: {
      onSuccess: () => {
        toast.success("Delete Tag was successfully");

        setSelectedPostId(null);
        queryClient.invalidateQueries({
          queryKey: ["/tags"],
        });
      },
      onError: (error) => {
        console.error("Failed to delete tag:", error);
        toast.error("Failed to delete tag.");
      },
    },
  });
  if (!tag) {
    return (
      <section className="flex h-full w-full items-center justify-center">
        <p className="text-lg text-muted-foreground">No tags found.</p>
      </section>
    );
  }

  return (
    <div className="w-full overflow-hidden rounded-lg border">
      <div className="w-full overflow-x-auto">
        <Table className="min-w-[600px]">
          <TableHeader>
            <TableRow>
              <TableHead>Id</TableHead>
              <TableHead className="w-[40%]">Name</TableHead>
              <TableHead>Slug</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {tag.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="text-muted-foreground">
                  {item.id}
                </TableCell>

                <TableCell className="max-w-[260px] truncate font-medium">
                  {item.name}
                </TableCell>

                <TableCell className="text-muted-foreground">
                  {item.slug}
                </TableCell>

                <TableCell>
                  <div className="flex justify-end gap-2">
                    <Link href={`/admin/tags/${item.id}/edit`}>
                      <Button
                        variant="ghost"
                        size="icon"
                        aria-label={`Edit ${item.name}`}
                      >
                        <Pencil className="size-4" />
                      </Button>
                    </Link>

                    <AlertDialog
                      open={selectedPostId === item.id}
                      onOpenChange={(open) => {
                        setSelectedPostId(open ? item.id : null);
                      }}
                    >
                      <AlertDialogTrigger
                        render={
                          <Button
                            variant="outline"
                            size="icon"
                            aria-label={`Delete ${item.name}`}
                          />
                        }
                      >
                        <Trash2 className="size-4 text-destructive" />
                      </AlertDialogTrigger>

                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Delete this item?</AlertDialogTitle>

                          <AlertDialogDescription>
                            Are you sure you want to delete
                            <strong> {item.name}</strong>? This action cannot be
                            undone.
                          </AlertDialogDescription>
                        </AlertDialogHeader>

                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>

                          <AlertDialogAction
                            disabled={isPending}
                            onClick={() => deleteTag({ id: Number(item.id) })}
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
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
