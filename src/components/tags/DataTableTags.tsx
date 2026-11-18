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
import { Tag } from "@/Types/general.type";

type TagsTableProps = {
  tag: Tag[];
};

export function DataTableTags({ tag }: TagsTableProps) {
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
                    <Link href={"/admin/tags/id/edit"}>
                      <Button
                        variant="ghost"
                        size="icon"
                        aria-label={`Edit ${item.name}`}
                      >
                        <Pencil className="size-4" />
                      </Button>
                    </Link>

                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label={`Delete ${item.name}`}
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
