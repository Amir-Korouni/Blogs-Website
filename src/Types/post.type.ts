// export type Posts = {
//   id: number;

//   title: string;

//   slug: string;

//   content: string;

//   excerpt: string;

//   status: "Published" | "UnPublished" | "Draft";

//   author: string;

//   category: string;

//   coverMedia: string;

//   tags: number[];

//   createdAt: string;

//   updatedAt: string;
// };

// type nextType = {
//   next: string | null
// }

// export type PostsResponse = Posts[] & nextType;

export type User = {
  id: number;
  username: string;
  email: string;
};

export type Category = {
  id: number;
  name: string;
  slug: string;
};

export type Media = {
  id: number;
  url: string;
  // Add other properties returned by your API.
};

export type Tag = {
  id: number;
  name: string;
};

export type PostStatus = "Published" | "UnPublished" | "Draft";

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