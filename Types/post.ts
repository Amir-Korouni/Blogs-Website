type tagsType = {
  id: string;
  name: string;
  slug: string;
};

export type Posts = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  status: "Published" | "UnPublished";
  category: string;
  categorySlug: string;
  tags: tagsType[];
  author: string;
  publishedAt: string;
  readingTime: number;
};
