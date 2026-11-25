"use client";
import { Form } from "@base-ui/react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useAuthControllerChangePassword } from "@/app/api/generated";

const formSchema = z.object({
  currentPassword: z.string().min(1, "Password must be at least 1 characters."),
  newPassword: z
    .string()
    .min(8, "Password must be at least 8 characters.")
    .max(255, "Password must be at most 255 characters."),
  confirmPassword: z
    .string()
    .min(5, "Password must be at least 5 characters.")
    .max(32, "Password must be at most 32 characters."),
});

const EditPass = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const { data: session } = useSession();
  const queryClient = useQueryClient();

  const { mutate: updatePass, isPending } = useAuthControllerChangePassword({
    axios: {
      headers: {
        Authorization: `Bearer ${session?.user.accessToken}`,
      },
    },
    mutation: {
      onSuccess: () => {
        toast.success("update a password successfully.");
        queryClient.invalidateQueries({
          queryKey: ["/tags"],
        });
      },
      onError: (error) => {
        console.error("Failed to update password:", error);
        toast.error("Failed to update password.");
      },
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    updatePass({
      data: data,
    });
  }
  return (
    <Dialog>
      <Form>
        <DialogTrigger
          render={
            <Button type="button" className="w-full">
              Change Password
            </Button>
          }
        />
        <DialogContent className="sm:max-w sm:max-h">
          <DialogHeader>
            <DialogTitle>Edit Password</DialogTitle>
            <DialogDescription>
              Make changes to your password profile here. Click save when
              you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <Form id="form-rhf-ChangePass" onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
              <Controller
                name="currentPassword"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-rhf-ChangePass-title">
                      Current Password
                    </FieldLabel>
                    <Input
                      {...field}
                      id="form-rhf-ChangePass-title"
                      aria-invalid={fieldState.invalid}
                      placeholder="your Current Password ...."
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="newPassword"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-rhf-ChangePass-title">
                      New Password
                    </FieldLabel>
                    <Input
                      {...field}
                      id="form-rhf-ChangePass-title"
                      aria-invalid={fieldState.invalid}
                      placeholder="New Password ...."
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="confirmPassword"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-rhf-ChangePass-title">
                      Confirm Password
                    </FieldLabel>
                    <Input
                      {...field}
                      id="form-rhf-ChangePass-title"
                      aria-invalid={fieldState.invalid}
                      placeholder="Confirm Password ...."
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </FieldGroup>
          </Form>
          <DialogFooter>
            <DialogClose
              render={
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => form.reset()}
                >
                  Cancel
                </Button>
              }
            />
            <Button type="submit" form="form-rhf-ChangePass">
              {isPending ? "Changing" : "Change Password"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Form>
    </Dialog>
  );
};

export default EditPass;
