type userType = {
  id: number;
  username: string;
  email: string;
};

export type signinType = {
  accessToken: string;
  user: userType;
};
