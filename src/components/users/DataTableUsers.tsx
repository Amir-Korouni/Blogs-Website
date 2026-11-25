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
import { User } from "@/Types/general.type";
import { useUsersControllerDeleteUser } from "@/app/api/generated";
import { toast } from "sonner";
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
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

type UserTableProps = {
  users: User[];
  accessToken: string;
};

export default function DataTableUsers({ users, accessToken }: UserTableProps) {
  const queryClient = useQueryClient();
  const [selectedUserId, setSelectedUserId] = useState<number | null>();

  const { mutate: deleteUser, isPending } = useUsersControllerDeleteUser({
    axios: {
      headers: { Authorization: `Bearer ${accessToken}` },
    },
    mutation: {
      onSuccess() {
        toast.success("User was deleted successfully.");
        console.log("Delete user");
        setSelectedUserId(null);
        queryClient.invalidateQueries({
          queryKey: ["/users"],
        });
      },

      onError(error) {
        toast.error("User was deleted unsuccessfully.");
        console.log(error);
      },
    },
  });

  if (!users) {
    return (
      <section className="flex h-full w-full items-center justify-center">
        <p className="text-lg text-muted-foreground">No users found.</p>
      </section>
    );
  }

  return (
    <div className="w-full overflow-hidden rounded-lg border">
      <div className="w-full overflow-x-auto">
        <Table className="min-w-[700px]">
          <TableHeader>
            <TableRow>
              <TableHead>Id</TableHead>
              <TableHead className="w-[35%]">User</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>

                <TableCell className="max-w-[260px] truncate font-medium">
                  {user.username}
                </TableCell>

                <TableCell>{user.email}</TableCell>

                <TableCell>{user.role}</TableCell>

                <TableCell>
                  <div className="flex justify-end gap-2">
                    <Link href={`/admin/users/${user.id}/edit`}>
                      <Button
                        variant="ghost"
                        size="icon"
                        aria-label={`Edit ${user.username}`}
                      >
                        <Pencil className="size-4" />
                      </Button>
                    </Link>

                    <AlertDialog
                      open={selectedUserId === user.id}
                      onOpenChange={(open) => {
                        setSelectedUserId(open ? user.id : null);
                      }}
                    >
                      <AlertDialogTrigger
                        render={
                          <Button
                            variant="outline"
                            size="icon"
                            aria-label={`Delete ${user.username}`}
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
                            <strong> {user.username}</strong>? This action
                            cannot be undone.
                          </AlertDialogDescription>
                        </AlertDialogHeader>

                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>

                          <AlertDialogAction
                            disabled={isPending}
                            onClick={() => deleteUser({ id: Number(user.id) })}
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
