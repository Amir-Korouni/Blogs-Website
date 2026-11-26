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
} from "../../shared/ui/dialog";
import { Button } from "../../shared/ui/button";
import { Input } from "../../shared/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

import { Field, FieldError, FieldGroup, FieldLabel } from "@/shared/ui/field";
import { useQueryClient } from "@tanstack/react-query";
import z from "zod";
import { useRouter } from "next/navigation";
import { useUsersControllerUpdateUser } from "@/shared/api/generated";

const formSchema = z.object({
  username: z
    .string()
    .min(3, "Bug title must be at least 3 characters.")
    .max(50, "Bug title must be at most 50 characters."),

  email: z
    .string()
    .email()
    .max(255, "Bug title must be at most 255 characters."),

  password: z
    .string()
    .min(8, "Bug title must be at least 8 characters.")
    .max(255, "Bug title must be at most 255 characters.")
    .or(z.literal("")),

  avatarMediaId: z.coerce
    .number()
    .int()
    .min(1, "Avatar Media ID must be at least 1."),
});

type FormInput = z.input<typeof formSchema>;
type FormOutput = z.output<typeof formSchema>;

type editUserType = {
  userId: number;
  accessToken: string;
};

const EditDialog = ({ userId, accessToken }: editUserType) => {
  const form = useForm<FormInput, undefined, FormOutput>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      avatarMediaId: 0,
    },
  });

  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate: editUsers, isPending } = useUsersControllerUpdateUser({
    axios: {
      headers: { Authorization: `Bearer ${accessToken}` },
    },
    mutation: {
      onSuccess() {
        toast.success("Edit users was successfully");
        console.log("Edit users was successfully");
        queryClient.invalidateQueries({
          queryKey: ["/users"],
        });
        router.push("/admin/users");
      },

      onError() {
        toast.error("Faild to add users.");
        console.log("Faild to add users.");
      },
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    if (!Number.isInteger(userId) || userId <= 0) {
      toast.error("Invalid User ID");
      return;
    }
    editUsers({
      id: userId,
      data: data,
    });
  }
  return (
    <Dialog>
      <Form>
        <DialogTrigger
          render={
            <Button type="button" className="w-full">
              Edit Profile
            </Button>
          }
        />
        <DialogContent className="sm:max-w sm:max-h">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <Form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
              <Controller
                name="username"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-rhf-demo-title">
                      username
                    </FieldLabel>
                    <Input
                      {...field}
                      id="form-rhf-demo-title"
                      aria-invalid={fieldState.invalid}
                      placeholder="Amir_K"
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-rhf-demo-title">email</FieldLabel>
                    <Input
                      {...field}
                      id="form-rhf-demo-title"
                      aria-invalid={fieldState.invalid}
                      autoComplete="off"
                      placeholder="example@gmail.com"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="password"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-rhf-demo-title">
                      password
                    </FieldLabel>
                    <Input
                      {...field}
                      id="form-rhf-demo-title"
                      aria-invalid={fieldState.invalid}
                      autoComplete="off"
                      placeholder="password..."
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="avatarMediaId"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-rhf-demo-title">
                      avatar Media Id
                    </FieldLabel>
                    <Input
                      type="number"
                      name={field.name}
                      ref={field.ref}
                      onBlur={field.onBlur}
                      // value={field.value}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                      id="avatarMediaId"
                      aria-invalid={fieldState.invalid}
                      placeholder="avatar media..."
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
            <Button type="submit" form="form-rhf-demo">
              {isPending ? "Updating" : "Save Changes"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Form>
    </Dialog>
  );
};

export default EditDialog;
