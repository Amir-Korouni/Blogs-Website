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

import { useCategoriesControllerUpdateCategory } from "@/app/api/generated";
import { useQueryClient } from "@tanstack/react-query";

const formSchema = z.object({
  name: z
    .string()
    .min(5, "Category name must be at least 5 characters.")
    .max(32, "Category name must be at most 32 characters."),
});

type EditCategoryProps = {
  accessToken: string;
  categoryId: number;
  initialName: string;
};

export function EditCategory({
  accessToken,
  categoryId,
  initialName,
}: EditCategoryProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: initialName,
    },
  });

  React.useEffect(() => {
    form.reset({ name: initialName });
  }, [initialName, form]);
  const queryClient = useQueryClient();
  const { mutate: updateCategory, isPending } =
    useCategoriesControllerUpdateCategory( {
      axios: {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
      mutation: {
        onSuccess: () => {
          toast.success("Category updated successfully.");

          queryClient.invalidateQueries({
            queryKey: ["/categories"],
          });
        },
        onError: (error) => {
          console.error(error);
          toast.error("Failed to update category.");
        },
      },
    });

  function onSubmit(data: z.infer<typeof formSchema>) {
    updateCategory({
      id: categoryId,
      data: {
        name: data.name,
      },
    });
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Edit Category</CardTitle>
        <CardDescription>Update the category information.</CardDescription>
      </CardHeader>

      <CardContent>
        <form id="edit-category-form" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="category-name">Category Name</FieldLabel>

                  <Input
                    {...field}
                    id="category-name"
                    placeholder="Category name..."
                    autoComplete="off"
                    aria-invalid={fieldState.invalid}
                  />

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>

      <CardFooter className="flex justify-end gap-2">
        <Button
          type="button"
          variant="outline"
          onClick={() => form.reset({ name: initialName })}
        >
          Reset
        </Button>

        <Button type="submit" form="edit-category-form" disabled={isPending}>
          {isPending ? "Updating..." : "Update Category"}
        </Button>
      </CardFooter>
    </Card>
  );
}
