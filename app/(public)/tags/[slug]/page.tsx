import InfiniteTag from "@/components/posts/InfiniteTag";
import PostCard from "@/components/posts/PostCard";
import { getPostsByTag } from "@/lib/api/tags";
import { PaginatedPosts } from "@/Types/post";
import { notFound } from "next/navigation";

type TagsType = {
  params: Promise<{ slug: string }>;
};

const Tags = async ({ params }: TagsType) => {
  const { slug } = await params;
  const posts = await getPostsByTag(slug);
  if (posts.data.length === 0) {
    notFound();
  }
  console.log(posts);

  return (
    <main className="container mx-auto px-4 py-12 flex flex-col justify-center items-center">
      <header className="w-[80%] h-auto flex flex-col gap-4 px-5 mb-10 border-b border-foreground">
        <h1 className="text-[clamp(1.8rem,4vw,3rem)]"># Tag: {slug}</h1>
        <p className="text-[clamp(0.9rem,1.2vw,1.8rem)] text-foreground">
          {" "}
          Articles, tutorials and insights about React.
        </p>

        <p className="text-[clamp(0.9rem,1.2vw,1.8rem)] text-muted-foreground">
          Posts related to this topic.
        </p>
        <p>{posts.data.length} Articles</p>
      </header>

      {posts.data.length > 0 ? (
        <InfiniteTag slug={slug} />
      ) : (
        <p className="py-12 text-center text-muted-foreground">
          No posts found for this tag.
        </p>
      )}
    </main>
  );
};

export default Tags;
