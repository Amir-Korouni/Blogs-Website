import Categories from "@/components/layout/Public/Categories";
import Hero from "@/components/layout/Public/Hero";
import LatestSection from "@/components/layout/Public/Latest";
import { postsControllerGetPosts } from "../api/generated";

export default async function Home() {
  const posts = await postsControllerGetPosts();
  console.log(posts.data);

  return (
    <>
      <Hero />
      <LatestSection posts={posts.data} />
      <Categories />
    </>
  );
}
