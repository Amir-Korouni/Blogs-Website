import PostCard from "@/components/posts/PostCard";
import { getPostsByTag } from "@/lib/api/posts";

type TagsType = {
  params: Promise<{ slug: string }>;
};

const Tags = async ({ params }: TagsType) => {
  const { slug } = await params;
  const posts = await getPostsByTag(slug);
  if (!posts.isOk) {
    console.log(posts.error.message);
    posts.error.redirect();
    return;
  }
  return (
    <main className="container mx-auto px-4 py-12">
      <header className="mb-10">
        <h1 className="text-[clamp(1.8rem,4vw,3rem)]">
          Tag: {slug}
        </h1>

        <p className="text-[clamp(0.9rem,1.2vw,1.8rem)] text-muted-foreground">
          Posts related to this topic.
        </p>
      </header>

      {posts.data.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {posts.data.map((post) => (
            <PostCard key={post.id} data={post} />
          ))}
        </div>
      ) : (
        <p className="py-12 text-center text-muted-foreground">
          No posts found for this tag.
        </p>
      )}
    </main>
  );
};

export default Tags;
