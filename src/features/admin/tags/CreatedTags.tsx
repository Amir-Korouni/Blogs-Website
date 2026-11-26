"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import { Button } from "@/shared/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/shared/ui/field";
import { Input } from "@/shared/ui/input";
import { useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { Form } from "@base-ui/react";
import { redirect } from "next/navigation";
import { useTagControllerCreateTag } from "@/shared/api/generated";

const formSchema = z.object({
  tag: z
    .string()
    .min(5, "Bug title must be at least 5 characters.")
    .max(32, "Bug title must be at most 32 characters."),
});

export function CreatedTags() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tag: "",
    },
  });

  const { data: session } = useSession();
  const queryClient = useQueryClient();

  const { mutate: createCategory, isPending } = useTagControllerCreateTag({
    axios: {
      headers: {
        Authorization: `Bearer ${session?.user.accessToken}`,
      },
    },
    mutation: {
      onSuccess: () => {
        toast.success("You create a tag successfully.");
        queryClient.invalidateQueries({
          queryKey: ["/tags"],
        });
      },
      onError: (error) => {
        console.error("Failed to create post:", error);
        toast.success("Faild to create a tag.");
      },
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    createCategory({ data: { name: data.tag } });
    redirect("/admin/tags");
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Edit Tags</CardTitle>
        <CardDescription>Edit tags with Id.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="tag"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-title">Tag</FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-demo-title"
                    aria-invalid={fieldState.invalid}
                    placeholder="Tag ...."
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
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button type="submit" form="form-rhf-demo">
            update tag
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
}
