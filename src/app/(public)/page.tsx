import { postsControllerGetPosts } from "@/shared/api/generated";
import Categories from "@/widgets/Public/Categories";
import Hero from "@/widgets/Public/Hero";
import LatestSection from "@/widgets/Public/Latest";

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
