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

type CategoryTableProps = {
  categories: Category[];
};

export default function DataTableCategory({ categories }: CategoryTableProps) {
  if (!categories) {
    return (
      <section className="flex h-full w-full items-center justify-center">
        <p className="text-lg text-muted-foreground">No categories found.</p>
      </section>
    );
  }

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

                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label={`Delete ${category.name}`}
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
