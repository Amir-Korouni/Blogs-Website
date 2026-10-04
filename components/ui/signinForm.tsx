"use client";
import { PostAuth } from "@/lib/api/auth";
import { signinState, SigninValidation } from "@/lib/validations/auth";
import { SignInFormData } from "@/Types/signin";
import { Button } from "@base-ui/react";
import { useMutation } from "@tanstack/react-query";
import { ChangeEvent, useActionState, useState } from "react";

const SigninForm = () => {
  const [user, setUser] = useState<SignInFormData>({ email: "", password: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const UserData = { ...user };

  const submitForm = async () => {
    const Auth = await PostAuth(UserData);
    console.log(Auth);
  };

  const initialState: signinState = { errors: {}, message: null };
  const [state, formAction] = useActionState(SigninValidation, initialState);
  return (
    <>
      <form
        action={formAction}
        className="w-[70%] max-md:w-[80%] flex flex-col gap-8"
        onSubmit={submitForm}
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
            onChange={(e) => {
              handleChange(e);
            }}
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
            onChange={(e) => handleChange(e)}
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
          Sign in
        </Button>
      </form>
    </>
  );
};

export default SigninForm;
