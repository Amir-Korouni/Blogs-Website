import { getPostDetail } from "@/lib/api/posts";
import { Posts } from "@/Types/post";
import { Metadata } from "next";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const metadata: Metadata = {
  title: "Categories",
  description:
    "Explore DEVLOG categories and discover articles about frontend, backend, AI engineering, DevOps, databases, and modern technologies.",
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const postCategory: Posts[] = await getPostDetail(slug);

  if (postCategory.length === 0) {
    return {
      title: "Page not found",
    };
  }

  const post = postCategory[0];
  return {
    title: post.title,
    description: post.excerpt,
  };
}

const Page = () => {
  return (
    <>
      <section>
        <h2>Categories</h2>
      </section>
    </>
  );
};

export default Page;
