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
import { Status } from "@/config/dropDownLists.config";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { postsControllerCreatePost } from "@/app/api/generated";
import { Input } from "../ui/input";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const formSchema = z.object({
  title: z
    .string()
    .min(5, "Bug title must be at least 5 characters.")
    .max(32, "Bug title must be at most 32 characters."),

  content: z
    .string()
    .min(5, "Bug title must be at least 5 characters.")
    .max(32, "Bug title must be at most 32 characters."),

  excerpt: z
    .string()
    .min(5, "Bug title must be at least 5 characters.")
    .max(32, "Bug title must be at most 32 characters."),

  status: z.enum(["published", "draft"]),
  categoryId: z.number(),
  tagIds: z.array(z.number()),
  coverMediaId: z.number(),
});

export function CreatePosts() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
      excerpt: "",
      status: "draft",
      categoryId: 0,
      tagIds: [],
      coverMediaId: 0,
    },
  });

  const router = useRouter();

  const { data: session } = useSession();
  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      console.log("Submitting data:", data);

      const response = await postsControllerCreatePost(data, {
        headers: { Authorization: `Bearer ${session?.user?.accessToken}` },
      });

      console.log("API response:", response);

      toast.success("Post created successfully!");

      router.push("/admin/posts");
    } catch (error) {
      console.error("Failed to create post:", error);

      toast.error("Failed to create post. Please try again.");
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Create a Posts</CardTitle>
        <CardDescription>You able to create a post.</CardDescription>
      </CardHeader>
      <CardContent>
        <form
          id="form-rhf-demo"
          onSubmit={form.handleSubmit(onSubmit, (errors) => {
            console.log("Validation errors:", errors);
            toast.error("Please check your form fields.");
          })}
        >
          <FieldGroup>
            <Controller
              name="title"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-title">Title</FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-demo-title"
                    aria-invalid={fieldState.invalid}
                    placeholder="Title ...."
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="content"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-title">Content</FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-demo-title"
                    aria-invalid={fieldState.invalid}
                    placeholder="Content...."
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="excerpt"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-title">Excerpt</FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-demo-title"
                    aria-invalid={fieldState.invalid}
                    placeholder="Excerpt"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="status"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-title">Status</FieldLabel>
                  Status
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>

                    <SelectContent>
                      {Status.map((item) => (
                        <SelectItem key={item} value={item}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="categoryId"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-title">
                    categortIds
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-demo-title"
                    aria-invalid={fieldState.invalid}
                    placeholder=""
                    type="number"
                    autoComplete="off"
                    value={field.value ?? ""}
                    onChange={(event) =>
                      field.onChange(event.target.valueAsNumber)
                    }
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="tagIds"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-title">tagsIds</FieldLabel>
                  <Input
                    type="text"
                    placeholder="Example: 1, 2, 3"
                    value={field.value.join(", ")}
                    onChange={(event) => {
                      const ids = event.target.value
                        .split(",")
                        .filter((id) => id.trim() !== "")
                        .map((id) => Number(id.trim()));

                      field.onChange(ids);
                    }}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="coverMediaId"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-title">
                    coverMediaId
                  </FieldLabel>
                  <Input
                    {...field}
                    type="number"
                    id="form-rhf-demo-title"
                    aria-invalid={fieldState.invalid}
                    placeholder=""
                    autoComplete="off"
                    value={field.value ?? ""}
                    onChange={(event) =>
                      field.onChange(event.target.valueAsNumber)
                    }
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
      <CardFooter>
        <Field orientation="horizontal">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button type="submit" form="form-rhf-demo">
            Craete Post
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
}
