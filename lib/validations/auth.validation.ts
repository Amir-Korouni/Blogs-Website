import * as z from "zod";

export type signinState = {
  errors?: {
    email?: string[];
    password?: string[];
  };
  message?: string | null;
};

export type signupState = {
  errors?: {
    name?: string[];
    username?: string[];
    email?: string[];
    password?: string[];
  };
  message?: string | null;
};

const signinSchema = z.object({
  email: z.string("Please enter your email address.").email("Please enter a valid email address."),
  password: z.string("Please enter your password.").min(8, "Password must be at least 8 characters long."),
});

export async function SigninValidation(
  prevState: signinState,
  FormData: FormData,
): Promise<signinState> {
  const validated = signinSchema.safeParse({    
    email: FormData.get("email"),
    password: FormData.get("password"),
  });

  if (!validated.success) {
    return {
      errors: validated.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Signin in DEVLOG.",
    };
  }

  return {
    errors: {},
    message: null,
  };
}

const signupSchema = z.object({
  name: z.string("Please enter your name.").min(3, "Name must be at least 3 characters long."),
  username: z.string("Please enter a username.").min(3, "username must be at least 3 characters long."),
  email: z.string("Please enter your email address.").email("Please enter a valid email address."),
  password: z.string("Please enter your password.").min(8, "Password must be at least 8 characters long."),
});

export async function signupValidation(
  prevState: signupState,
  FormData: FormData,
): Promise<signupState> {
  const validated = signupSchema.safeParse({
    name: FormData.get("name"),
    username: FormData.get("username"),
    email: FormData.get("email"),
    password: FormData.get("password"),
  });

  if (!validated.success) {
    return {
      errors: validated.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Signup DEVLOG.",
    };
  }

  return {
    errors: {},
    message: null,
  };
}
