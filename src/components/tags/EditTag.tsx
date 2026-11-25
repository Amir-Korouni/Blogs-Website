"use client";

import { useTagControllerUpdateTag } from "@/app/api/generated";
import { useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import {  useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Form } from "@base-ui/react";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  tag: z.string().min(5).max(32),
});

type EditTagsType = {
  tagId: number;
};

export function EditTags({ tagId }: EditTagsType) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tag: "",
    },
  });

  const { data: session } = useSession();
  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate: editTag, isPending } = useTagControllerUpdateTag({
    axios: {
      headers: {
        Authorization: `Bearer ${session?.user.accessToken}`,
      },
    },
    mutation: {
      onSuccess: () => {
        toast.success("update a tag successfully.");
        queryClient.invalidateQueries({
          queryKey: ["/tags"],
        });
        router.push("/admin/tags");
      },
      onError: (error) => {
        console.error("Failed to update post:", error);
        toast.error("Failed to update tag.");
      },
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    if (!Number.isInteger(tagId) || tagId <= 0) {
      toast.error("Invalid tag ID");
      return;
    }
    editTag({
      id: tagId,
      data: {
        name: data.tag,
      },
    });
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
