import PostCard from "@/components/posts/PostCard";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/config/navigation";
import { Posts } from "@/Types/post";
import Link from "next/link";

type latestSectionprops = {
  posts: Posts[];
};

const LatestSection = ({ posts }: latestSectionprops) => {
  return (
    <>
      <section className="w-full h-auto bg-background">
        <section className="size-full flex flex-col justify-center items-center">
          <section className="w-[60%] h-[20%]">
            <h2 className="text-[clamp(1.8rem,4vw,3rem)]">Latest Post</h2>
            <h3 className="text-[clamp(0.8rem,3vw,1.5rem)]">
              Recent articles from DEVLOG
            </h3>
          </section>
          <section className="w-[60%] min-h-[70%]">
            <section
              className="w-full
                grid
                grid-cols-1
                md:grid-cols-2
                xl:grid-cols-3
                gap-6
                xl:gap-8
                justify-items-center"
            >
              {posts.map((post) => (
                <PostCard key={post.id} data={post} />
              ))}
            </section>
            {/* <PostGrid /> */}
          </section>
          <section className="w-[50%] h-[20%] flex justify-end items-center mt-5">
            <Link href={navLinks[1].href}>
              <Button
                size={"lg"}
                aria-label="Explore more Posts"
                className="cursor-pointer rounded h-[50px] bg-[#3B82F6] p-6 max-md:w-[80px] md:h-[40px] max-sm:w-[60px] max-sm:h-[40px] text-[clamp(0.6rem,1.2vw,1.8rem)]"
              >
                View All {navLinks[1].name}
              </Button>
            </Link>
          </section>
        </section>
      </section>
    </>
  );
};

export default LatestSection;
