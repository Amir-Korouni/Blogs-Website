export type AuthUser = {
  id: number;
  username: string;
  email: string;
  role: "user" | "admin";
};

export type LoginResponse = {
  accessToken: string;
  user: AuthUser;
};
