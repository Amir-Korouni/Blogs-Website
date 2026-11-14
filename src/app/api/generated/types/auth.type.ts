type userType = {
  id: number;
  email: string;
  username: string;
  role: "user" | "admin"
};

export type signinType = {
  accessToken: string;
  user: userType;
};
