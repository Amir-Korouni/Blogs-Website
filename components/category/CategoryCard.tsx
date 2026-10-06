import { Category } from "@/Types/category";
import { Card, CardContent } from "../ui/card";

const CategoryCard = ({ category }: Category) => {
  return (
    <>
      <Card
        className="w-full
            max-w-[250px]
            min-h-[200px]

            max-md:w-[150px]
            max-md:h-[150px]

            bg-card
            text-card-foreground
            rounded-[20px]
            border
            border-[#334155]

            cursor-pointer

            transition-transform
            duration-300
            hover:scale-104
             flex
              justify-center
              items-center

              hover:drop-shadow-[0_0_15px_#152f59]
            "
      >
        <CardContent className="w-full text-center">
          <p
            className="text-[clamp(0.875rem,1.5vw,1.9rem)]
                leading-relaxed
                text-zinc-300"
          >
            {category}
          </p>
        </CardContent>
      </Card>
    </>
  );
};

export default CategoryCard;
