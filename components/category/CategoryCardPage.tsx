import { Category } from "@/Types/category";
import { Card, CardContent, CardFooter } from "../ui/card";
import Link from "next/link";

type categoryProps = {
  category: Category;
  quantity: number;
};

const CategoryCardPage = ({ category, quantity }: categoryProps) => {
  return (
    <>
      <Card
        className="w-full
            max-w-[500px]
            min-h-[250px]

            bg-card
            text-card-foreground
            rounded-[20px]
            border
            border-[#334155]

            cursor-pointer

            duration-500
            hover:scale-102
             flex
              justify-center
              items-center

              hover:drop-shadow-[0_0_15px_#0f2242]
            "
      >
        <Link
          href={`categories/${category.slug}`}
          className="w-full text-[clamp(0.875rem,1.5vw,1.9rem)]
                leading-relaxed
                text-zinc-300"
        >
          <CardContent className="w-full h-[8rem] text-center">
            {category.category}
          </CardContent>
        </Link>
        <CardFooter className="w-full h-[4rem] bg-[#152f59] flex justify-center items-center ">
          <Link
            href={`categories/${category.slug}`}
            className="w-full text-center text-[clamp(0.875rem,1vw,1.9rem)]
                leading-relaxed
                text-zinc-300"
          >
            {quantity} Articles that you can read and learn.
          </Link>
        </CardFooter>
      </Card>
    </>
  );
};

export default CategoryCardPage;
