import { categoriesControllerGetCategories } from "@/app/api/generated";
import CategoryCardPage from "@/components/category/CategoryCardPage";

const Categories = async () => {
  const categoryPosts = await categoriesControllerGetCategories();
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
            {categoryPosts.data?.map((item) => (
              <CategoryCardPage key={item.id} category={item} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Categories;
