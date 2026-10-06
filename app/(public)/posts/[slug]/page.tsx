import PostArticle from "@/components/posts/PostArticle";
import { getPostDetail } from "@/lib/api/posts";
import { Posts } from "@/Types/post";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const postDetail: Posts[] = await getPostDetail(slug);

  if (postDetail.length === 0) {
    return {
      title: "Page not found.",
    };
  }

  const post = postDetail[0];

  return {
    title: post.title,
    description: post.excerpt,
  };
}

const Page = async ({ params }: PageProps) => {
  const { slug } = await params;
  console.log("SLUG:", slug);
  const postDetail: Posts[] = await getPostDetail(slug);
  if (postDetail.length === 0) {
    notFound();
  }
  const post = postDetail[0];

  return (
    <>
      <main>
        <section className="w-full h-[40vh] flex flex-col justify-center items-center gap-10">
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-bold">
            {post.category}
          </h2>
          <h3 className="w-full text-center text-[clamp(1.8rem,4vw,3rem)]">
            {post.title}
          </h3>
          <div className="w-[30%] md:w-[50%] max-sm:w-[80%] flex justify-between items-center">
            <p>{post.author}</p>
            <p>{post.publishedAt}</p>
            <p>{post.readingTime}</p>
          </div>
        </section>
        <section className="w-full border-t border-t-px">
          <PostArticle posts={post} />
        </section>
      </main>
    </>
  );
};

export default Page;
