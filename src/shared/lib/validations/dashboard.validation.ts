import z from "zod";

export const editDashboardSchema = z.object({
  username: z.string().min(3, { message: "Be at least 3 characters long" }),
  email: z.string().email({ message: "Please enter a valid email." }).trim,
  password: z.string().min(8, { message: "Be at least 8 characters long" }),
  avatarMedia: z.number().min(2, { message: "Be at least 2 characters long" }),
});

export type editDashboardState = {
  forms?: {
    username: string;
    email: string;
    password: string;
    avatarMedia: number;
  };
  error?: {
    username: string[];
    email: string[];
    password: string[];
    avatarMedia: number[];
  };
};
