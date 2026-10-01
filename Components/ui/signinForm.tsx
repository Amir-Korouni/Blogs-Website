"use client";
import { signinState, SigninValidation } from "@/lib/validations/auth";
import { useActionState } from "react";

const SigninForm = () => {
  const initialState: signinState = { errors: {}, message: null };
  const [state, formAction] = useActionState(SigninValidation, initialState);
  return (
    <>
      <form
        action={formAction}
        className="w-[70%] max-md:w-[80%] flex flex-col gap-8"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
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
          <div id="input-email" aria-live="polite" aria-atomic="true">
            {state?.errors?.email && (
              <p className="text-red-500">{state.errors.email}</p>
            )}
          </div>
        </div>

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
          <div>
            {state?.errors?.password && (
              <p className="text-red-500">{state.errors.password}</p>
            )}
          </div>
          <div>
            {state.errors?.email && state.errors.password && (
              <p className="text-red-500">{state.message}</p>
            )}
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
          Sign in
        </button>
      </form>
    </>
  );
};

export default SigninForm;
