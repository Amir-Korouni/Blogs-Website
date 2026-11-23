"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Form } from "@base-ui/react";
import { useCategoriesControllerCreateCategory } from "@/app/api/generated";
import { useQueryClient } from "@tanstack/react-query";
import { useQueryAuth } from "@/Types/general.type";
import { redirect } from "next/navigation";

const formSchema = z.object({
  name: z
    .string()
    .min(5, "Bug title must be at least 5 characters.")
    .max(32, "Bug title must be at most 32 characters."),
});

export function CreateCategory({ accessToken }: useQueryAuth) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  const queryClient = useQueryClient();

  const {
    mutate: CreateCategory,
    isPending,
    isError,
  } = useCategoriesControllerCreateCategory({
    axios: {
      headers: { Authorization: `Bearer ${accessToken}` },
    },
    mutation: {
      onSuccess: () => {
        toast.success("Category create successfully.");

        queryClient.invalidateQueries({
          queryKey: ["/categories"],
        });
      },

      onError: (error) => {
        console.error(error);
        toast.error("Faild to create category");
      },
    },
  });
  function onSubmit(data: z.infer<typeof formSchema>) {
    CreateCategory({
      data: data,
    });
    redirect("/admin/categories");
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Add Category</CardTitle>
        <CardDescription>Add Category</CardDescription>
      </CardHeader>
      <CardContent>
        <Form
          id="form-rhf-demo"
          onSubmit={form.handleSubmit(onSubmit)}
          action="/admin/categories"
        >
          <FieldGroup>
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-title">
                    category name
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-demo-title"
                    aria-invalid={fieldState.invalid}
                    placeholder="Category Name...."
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
            Craete Category
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
}
