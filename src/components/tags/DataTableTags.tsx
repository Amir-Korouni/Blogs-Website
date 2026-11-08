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
import { Tags } from "@/Types/tags.type";
import Link from "next/link";

type TagsTableProps = {
  data: Tags[];
};

export function DataTableTags({ data: tags }: TagsTableProps) {
  if (tags.length === 0) {
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
            {tags.map((tag) => (
              <TableRow key={tag.id}>
                <TableCell className="text-muted-foreground">
                  {tag.id}
                </TableCell>

                <TableCell className="max-w-[260px] truncate font-medium">
                  {tag.tag}
                </TableCell>

                <TableCell className="text-muted-foreground">
                  {tag.slug}
                </TableCell>

                <TableCell>
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label={`Edit ${tag.tag}`}
                    >
                      <Pencil className="size-4" />
                    </Button>

                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label={`Delete ${tag.tag}`}
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
