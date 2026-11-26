import notFound from "@/app/not-found";
import InfiniteCategory from "@/components/posts/InfiniteCategory";
import { categoriesControllerGetCategories } from "@/shared/api/generated";
import { Metadata } from "next";
import { cache } from "react";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);

  if (!category) {
    return {
      title: "Category not found",
    };
  }

  return {
    title: `${category.name} | DEVLOG`,
    description: `Explore articles about ${category.slug}.`,
  };
}

const getCategoryBySlug = cache(async (slug: string) => {
  const response = await categoriesControllerGetCategories();

  return response.data.find((category) => category.slug === slug) ?? null;
});

const Page = async ({ params }: PageProps) => {
  const { slug } = await params;

  const category = await getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

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

          <InfiniteCategory categoryId={category?.id} />
        </section>
      </main>
    </>
  );
};

export default Page;
