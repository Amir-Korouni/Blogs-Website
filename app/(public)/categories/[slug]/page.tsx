import notFound from "@/app/not-found";
import PostCard from "@/components/posts/PostCard";
import { getPostCategory } from "@/lib/api/categories";
import { getPostDetail } from "@/lib/api/posts";
import { Posts } from "@/Types/post";
import { Metadata } from "next";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const categories: Posts[] = await getPostCategory(slug);

  if (categories.length === 0) {
    return {
      title: "Page not found",
    };
  }

  const post = categories[0];
  return {
    title: post.title,
    description: post.excerpt,
  };
}

const Page = async ({ params }: PageProps) => {
  const { slug } = await params;
  const categories: Posts[] = await getPostCategory(slug);
  if (categories.length === 0) {
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
          <div
            className="w-full
              grid
              grid-cols-1
              md:grid-cols-2
              xl:grid-cols-3
              gap-6
              xl:gap-8
              justify-items-center"
          >
            {categories.map((category) => (
              <PostCard data={category} key={category.id} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Page;
