import notFound from "@/app/not-found";
import InfiniteCategory from "@/components/posts/InfiniteCategory";
import PostCard from "@/components/posts/PostCard";
import { getPostCategory } from "@/lib/api/categories";
import { PaginatedPosts } from "@/Types/post";
import { Metadata } from "next";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const categories: PaginatedPosts = await getPostCategory(slug, 1, 3);

  if (categories.data.length === 0) {
    return {
      title: "Page not found",
    };
  }

  const post = categories.data[0];
  return {
    title: post.title,
    description: post.excerpt,
  };
}

const Page = async ({ params }: PageProps) => {
  const { slug } = await params;
  const categories: PaginatedPosts = await getPostCategory(slug);
  if (categories.data.length === 0) {
    notFound();
  }
  console.log(categories);

  const CategoryName = slug
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
  return (
    <>
      <main>
        <section className="w-[60%] min-h-[80vh] mt-15 mb-10 m-auto bg-transparent flex flex-col gap-10 justify-start items-center">
          <div>
            <h2 className="text-[clamp(1.8rem,4vw,3rem)]">{CategoryName}</h2>
            <p className="text-[clamp(0.9rem,1.2vw,1.8rem)]">
              {" "}
              Articles about {slug} development and modern web technologies.
            </p>
          </div>

          <InfiniteCategory slug={slug} />
        </section>
      </main>
    </>
  );
};

export default Page;
