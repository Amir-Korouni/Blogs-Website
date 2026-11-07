import CategoryCardPage from "@/components/category/CategoryCardPage";

const Categories = () => {
  return (
    <>
      <main>
        <section className="w-full h-[30vh] bg-[var(--latest-section)]  text-zinc-100 flex flex-col justify-center items-center">
          <div className="text-foreground">
            <h2 className="text-[clamp(1.8rem,4vw,3rem)]">Categories</h2>
            <p className="text-[clamp(0.8rem,3vw,1.5rem)]">
              Explore articles by topic and technology{" "}
            </p>
          </div>
        </section>
        <section className="w-full min-h-[100vh] mt-[10px] mb-[10px] flex flex-col justify-center items-center bg-background">
          <div className="w-[80%]  xl:w-[80%] md:w-[85%] sm:w-[100%] flex justify-center items-center gap-8 flex-wrap">
            <CategoryCardPage
              category={{ category: "Front-end", slug: "front-end" }}
              quantity={25}
            />
            <CategoryCardPage
              category={{ category: "Back-end", slug: "back-end" }}
              quantity={20}
            />
            <CategoryCardPage
              category={{ category: "AI", slug: "ai" }}
              quantity={30}
            />
            <CategoryCardPage
              category={{ category: "DevOps", slug: "devops" }}
              quantity={18}
            />
            <CategoryCardPage
              category={{ category: "General", slug: "general" }}
              quantity={23}
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default Categories;
