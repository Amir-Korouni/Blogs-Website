import CategoryCard from "@/components/category/CategoryCard";
import { CategoriesList } from "@/config/home";

const Categories = () => {
  return (
    <>
      <section className="w-full min-h-[100vh] bg-[var(--category-page)] bordet-t border-t-[1px] flex flex-col justify-center items-center">
        <section className="size-full flex flex-col justify-evenly items-center">
          <h2 className="text-[clamp(2.5rem,7vw,4rem)]">Categories</h2>
          <section className="w-[80%] xl:w-[70%] md:w-[60%] sm:w-[100%] flex justify-center items-center gap-5 flex-wrap">
            <CategoryCard category="Front-end" />
            <CategoryCard category="Back-end" />
            <CategoryCard category="AI" />
            <CategoryCard category="DevOps" />
            <CategoryCard category="General" />
          </section>
        </section>
      </section>
    </>
  );
};

export default Categories;
