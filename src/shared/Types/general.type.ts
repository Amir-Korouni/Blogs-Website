export type User = {
  id: number;
  username: string;
  email: string;
  role: "user" | "admin";
};

export type Category = {
  id: number;
  name: string;
  slug: string;
  updatedAt: string;
};

export type Media = {
  id: number;
  url: string;
  // Add other properties returned by your API.
};

export type Tag = {
  id: number;
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
};

export type PostStatus = "published" | "draft";

export type Posts = {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  status: PostStatus;
  author: User;
  category: Category;
  coverMedia: Media | null;
  tags: Tag[];
  createdAt: string;
  updatedAt: string;
};

export type analytics = {
  postId: number;
  title: string;
  totalViews: number;
  totalPosts: number;
  totalUsers: number;
};

export type useQueryAuth = {
  accessToken: string;
};
