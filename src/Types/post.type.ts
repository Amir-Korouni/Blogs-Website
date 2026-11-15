/**
 * getPosts(query: QueryPostsModels): Promise<Post[]>;

QueryPostsModels {

  search?: string;

  categoryId?: number;

  authorId?: number;

  sortBy?: 'createdAt' | 'updatedAt' | 'title';

  sortOrder?: 'ASC' | 'DESC';

}

Post[] {

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

  createdAt: Date;

  updatedAt: Date;

}
 */

export type Posts = {
  id: number;

  title: string;

  slug: string;

  content: string;

  excerpt: string;

  status: "Published" | "UnPublished" | "Draft";

  author: string;

  category: string;

  coverMedia: string;

  tags: number[];

  createdAt: string;

  updatedAt: string;
};

type nextType = {
  next: string | null
}

export type PostsResponse = Posts[] & nextType;

export type PaginatedPosts = {
  data: Posts[];
  first: number;
  prev: number | null;
  next: number | null;
  last: number;
  pages: number;
  items: number;
};