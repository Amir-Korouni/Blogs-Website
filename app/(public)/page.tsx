import Categories from "@/components/layout/Public/Categories";
import Hero from "@/components/layout/Public/Hero";
import LatestSection from "@/components/layout/Public/Latest";
import { getPosts } from "@/lib/api/posts";

export default async function Home() {
  const posts = await getPosts();
  if (!posts.isOk) {
    console.log(posts.error.message);
    posts.error.redirect();
    return;
  }
  return (
    <>
      <Hero />
      <LatestSection posts={posts.data} />
      <Categories />
    </>
  );
}
