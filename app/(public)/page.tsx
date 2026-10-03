import Categories from "@/components/layout/Public/Categories";
import Hero from "@/components/layout/Public/Hero";
import LatestSection from "@/components/layout/Public/Latest";
import { getPosts } from "@/lib/api/posts";

export default async function Home() {
  const posts = await getPosts();
  return (
    <>
      <Hero />

      <LatestSection posts={posts} />

      <Categories />
    </>
  );
}
