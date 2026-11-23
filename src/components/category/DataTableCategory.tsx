"use client";
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
import Link from "next/link";
import { Category } from "@/Types/general.type";
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
} from "../ui/alert-dialog";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useCategoriesControllerDeleteCategory } from "@/app/api/generated";
import { toast } from "sonner";

type CategoryTableProps = {
  categories: Category[];
  accessToken: string;
};

export default function DataTableCategory({
  categories,
  accessToken,
}: CategoryTableProps) {
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);
  const queryClient = useQueryClient();

  const { mutate: deleteCategory, isPending } =
    useCategoriesControllerDeleteCategory({
      axios: {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
      mutation: {
        onSuccess: () => {
          toast.success("Delete Category was successfully");

          setSelectedPostId(null);
          queryClient.invalidateQueries({
            queryKey: ["/categories"],
          });
        },
        onError: (error) => {
          console.error("Failed to delete post:", error);
          toast.error("Failed to delete category.");
        },
      },
    });

  return (
    <div className="w-full overflow-hidden rounded-lg border">
      <div className="w-full overflow-x-auto">
        <Table className="min-w-[600px]">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[40%]">Category</TableHead>
              <TableHead>Slug</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {categories.map((category) => (
              <TableRow key={category.id}>
                <TableCell className="max-w-[260px] truncate font-medium">
                  {category.name}
                </TableCell>

                <TableCell className="text-muted-foreground">
                  {category.slug}
                </TableCell>

                <TableCell>
                  <div className="flex justify-end gap-2">
                    <Link href={`/admin/categories/${category.id}/edit`}>
                      <Button
                        variant="ghost"
                        size="icon"
                        aria-label={`Edit ${category.name}`}
                      >
                        <Pencil className="size-4" />
                      </Button>
                    </Link>

                    <AlertDialog
                      open={selectedPostId === category.id}
                      onOpenChange={(open) => {
                        setSelectedPostId(open ? category.id : null);
                      }}
                    >
                      <AlertDialogTrigger
                        render={
                          <Button
                            variant="outline"
                            size="icon"
                            aria-label={`Delete ${category.name}`}
                          />
                        }
                      >
                        <Trash2 className="size-4 text-destructive" />
                      </AlertDialogTrigger>

                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Delete this category?
                          </AlertDialogTitle>

                          <AlertDialogDescription>
                            Are you sure you want to delete
                            <strong> {category.name}</strong>? This action
                            cannot be undone.
                          </AlertDialogDescription>
                        </AlertDialogHeader>

                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>

                          <AlertDialogAction
                            disabled={isPending}
                            onClick={() =>
                              deleteCategory({ id: Number(category.id) })
                            }
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
