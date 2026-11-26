"use client";

import { Button } from "@/shared/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/shared/ui/field";
import { Input } from "@/shared/ui/input";
import { signInUp } from "@/shared/config/navigation.config";
import {
  signupState,
  signupValidation,
} from "@/shared/lib/validations/auth.validation";
import Link from "next/link";
import { useActionState, useState } from "react";
import { startTransition } from "react";
import { useRouter } from "next/navigation";
import { authControllerRegister } from "@/shared/api/generated";

export function SignupForm({ ...props }: React.ComponentProps<typeof Card>) {
  const initialState: signupState = { errors: {}, message: null };
  const [state, formAction, isPending] = useActionState(
    signupValidation,
    initialState,
  );

  const [authError, setAuthError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const route = useRouter();

  const handleSignup = async (formData: FormData) => {
    setAuthError(null);
    setIsSubmitting(true);

    try {
      const username = formData.get("username");
      const email = formData.get("email");
      const password = formData.get("password");

      if (
        typeof name !== "string" ||
        typeof username !== "string" ||
        typeof email !== "string" ||
        typeof password !== "string"
      ) {
        setAuthError("Invalid form data.");
        return;
      }

      const response = await authControllerRegister({
        username,
        email,
        password,
      });

      console.log(response);

      route.push("/signin");
    } catch (error) {
      setAuthError(`Sign up failed. Please try again. Error: ${error}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setAuthError(null);

    const formData = new FormData(event.currentTarget);

    const validationResult = await signupValidation(initialState, formData);

    const hasErrors =
      validationResult.errors?.name?.length ||
      validationResult.errors?.username?.length ||
      validationResult.errors?.email?.length ||
      validationResult.errors?.password?.length;

    if (hasErrors) {
      startTransition(() => {
        formAction(formData);
      });

      return;
    }

    await handleSignup(formData);
  };

  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          Enter your information below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleFormSubmit}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">User name</FieldLabel>
              <Input
                id="username"
                name="username"
                type="text"
                placeholder="Amir_Ko"
                required
                aria-invalid={!!state.errors?.username?.length}
                aria-describedby="input-user-name"
              />
              <div id="input-name" aria-live="polite">
                {state.errors?.name?.map((error) => (
                  <p key={error} className="text-red-500">
                    {error}
                  </p>
                ))}
              </div>
            </Field>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="m@example.com"
                required
                aria-describedby="input-email"
              />
              <FieldDescription>
                We&apos;ll use this to contact you. We will not share your email
                with anyone else.
              </FieldDescription>
              <div id="input-email" aria-live="polite">
                {state.errors?.email?.map((error) => (
                  <p key={error} className="text-red-500">
                    {error}
                  </p>
                ))}
              </div>
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input
                id="password"
                type="password"
                name="password"
                required
                aria-describedby="input-password"
              />
              <FieldDescription>
                Must be at least 8 characters long.
              </FieldDescription>

              <div id="input-password" aria-live="polite">
                {state.errors?.password?.map((error) => (
                  <p key={error} className="text-red-500">
                    {error}
                  </p>
                ))}
              </div>
            </Field>
            <Field>
              <FieldLabel htmlFor="confirm-password">
                Confirm Password
              </FieldLabel>
              <Input
                id="confirm-password"
                type="password"
                name="confirm-password"
                required
              />
              <FieldDescription>Please confirm your password.</FieldDescription>
            </Field>
            <FieldGroup>
              <Field>
                <Button type="submit">Create Account</Button>
                <Button variant="outline" type="button">
                  Sign up with Google
                </Button>
                <FieldDescription className="px-6 text-center">
                  Already have an account?{" "}
                  <Link href={signInUp.Signin.href}>
                    {signInUp.Signin.name}
                  </Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}
