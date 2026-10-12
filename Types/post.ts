export type Posts = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  status: "Published" | "UnPublished";
  category: string;
  author: string;
  publishedAt: string;
  readingTime: number;
};
