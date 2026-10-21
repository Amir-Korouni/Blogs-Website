"use client";
import { PostAuth, PostAuthSignup } from "@/lib/api/auth";
import { signupState, signupValidation } from "@/lib/validations/auth";
import { useActionState, useState } from "react";
import { Input } from "./input";

const SingupForm = () => {
  const initialState: signupState = { errors: {}, message: null };
  const [state, formAction, isPending] = useActionState(
    signupValidation,
    initialState,
  );

  const [authError, setAuthError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    setAuthError(null);
    setIsSubmitting(true);

    try {
      const name = formData.get("name");
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

      const response = await PostAuthSignup({
        name,
        username,
        email,
        password,
      });
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
          const validationResult = await signupValidation(
            initialState,
            formData,
          );

          if (
            validationResult.errors?.name?.length ||
            validationResult.errors?.username?.length ||
            validationResult.errors?.email?.length ||
            validationResult.errors?.password?.length
          ) {
            // Let useActionState manage validation errors.
            await formAction(formData);
            return;
          }
          await handleSubmit(formData);
        }}
        className="w-[70%] flex flex-col gap-8"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Name</label>

          <Input
            type="text"
            name="name"
            id="name"
            aria-invalid={!!state.errors?.name?.length}
            aria-describedby="input-name"
            className="
                w-full
                h-10
                rounded-md
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
          <div id="input-name" aria-live="polite">
            {state.errors?.name?.map((error) => (
              <p key={error} className="text-red-500">
                {error}
              </p>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="username">Username</label>

          <Input
            type="text"
            name="username"
            id="username"
            aria-invalid={!!state.errors?.username?.length}
            aria-describedby="input-username"
            className="
                w-full
                h-10
                rounded-md
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
          <div id="input-username" aria-live="polite">
            {state.errors?.username?.map((error) => (
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
          <label htmlFor="email">Email</label>
          <Input
            type="email"
            name="email"
            id="email"
            aria-describedby="input-email"
            className="
                w-full
                h-10
                rounded-md
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
          <div id="input-email" aria-live="polite">
            {state.errors?.email?.map((error) => (
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

          <input
            type="password"
            name="password"
            id="password"
            aria-describedby="input-password"
            className="
                w-full
                h-10
                rounded-md
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

        <button
          aria-label="submit button"
          type="submit"
          className="
              w-full
              h-10
              bg-blue-500
              text-white
              rounded-md
              hover:bg-blue-600
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
              cursor-pointer
            "
        >
          Sign up
        </button>
      </form>
    </>
  );
};

export default SingupForm;
