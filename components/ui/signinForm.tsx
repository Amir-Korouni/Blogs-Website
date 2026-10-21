"use client";
import { PostAuth } from "@/lib/api/auth";
import { signinState, SigninValidation } from "@/lib/validations/auth";
import { Button, Input } from "@base-ui/react";
import { useActionState, useState } from "react";

const SigninForm = () => {
  const initialState: signinState = { errors: {}, message: null };
  const [state, formAction, isPending] = useActionState(
    SigninValidation,
    initialState,
  );

  const [authError, setAuthError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    setAuthError(null);
    setIsSubmitting(true);

    try {
      const email = formData.get("email");
      const password = formData.get("password");
      if (typeof email !== "string" || typeof password !== "string") {
        setAuthError("Invalid form data.");
        return;
      }
      const response = await PostAuth({ email, password });
      console.log(response);
    } catch (error) {
      setAuthError("Sign in failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form
        action={async (formData) => {
          const validationResult = await SigninValidation(
            initialState,
            formData,
          );

          if (
            validationResult.errors?.email?.length ||
            validationResult.errors?.password?.length
          ) {
            await formAction(formData);
            return;
          }
          await handleSubmit(formData);
        }}
        className="w-[70%] max-md:w-[80%] flex flex-col gap-8"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <Input
            type="email"
            name="email"
            id="email"
            aria-invalid={!!state.errors?.email?.length}
            aria-describedby="input-email"
            className="
                w-full
                h-10
                rounded
                border
                border-gray-300
                px-3
                py-2
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
                focus:border-blue-500
              "
          />
          <div id="input-password" aria-live="polite">
            {state.errors?.password?.map((error) => (
              <p key={error} className="text-red-500">
                {error}
              </p>
            ))}
          </div>
        </div>

        {(authError || state.message) && (
          <p role="alert" className="text-red-500">
            {authError || state.message}
          </p>
        )}

        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>

          <Input
            type="password"
            name="password"
            id="password"
            aria-describedby="input-password"
            className="
                w-full
                h-10
                rounded
                border
                border-gray-300
                px-3
                py-2
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
                focus:border-blue-500
              "
          />
          <div id="input-password" aria-live="polite">
            {state.errors?.password?.map((error) => (
              <p key={error} className="text-red-500">
                {error}
              </p>
            ))}
          </div>
        </div>

        {(authError || state.message) && (
          <p role="alert" className="text-red-500">
            {authError || state.message}
          </p>
        )}

        <Button
          aria-label="submit button"
          type="submit"
          className="
              w-full
              h-10
              bg-blue-500
              text-white
              rounded
              hover:bg-blue-600
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
              cursor-pointer
            "
        >
          {isPending || isSubmitting ? "Signing in..." : "Sign in"}
        </Button>
      </form>
    </>
  );
};

export default SigninForm;
