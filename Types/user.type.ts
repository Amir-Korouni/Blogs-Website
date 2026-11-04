export type User = {
  id: string;
  title: string;
  email: string;
  role: "admin" | "user";
};

export type PaginatedUser = {
  data: User[];
  first: number;
  prev: number | null;
  next: number | null;
  last: number;
  pages: number;
  items: number;
};
