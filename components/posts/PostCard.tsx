import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Posts } from "@/Types/post";

export type postData = {
  data: Posts;
};

const PostCard = ({ data }: postData) => {
  return (
    <>
      <Card
        className="
            max-w-[370px]
            min-h-[250px]

            bg-card
            text-card-foreground
            rounded
            border
            border-[#334155]

            transition-transform
            duration-300
            hover:-translate-y-1
            "
      >
        <article
          key={data?.id}
          className="size-full flex flex-col justify-between"
        >
          <CardHeader>
            <CardTitle className="flex flex-col gap-2">
              <Link href={`/categories/${data?.categorySlug}`}>
                <h3 className="text-sm text-blue-400">{data?.category}</h3>
              </Link>
              <Link
                href={`/posts/${data?.slug}`}
                className="text-[clamp(1.1rem,2vw,1.4rem)]
                leading-tight
                text-blue-700
                hover:text-blue-400
                transition-colors"
              >
                {data?.title}
              </Link>
            </CardTitle>
          </CardHeader>

          <CardContent className="w-full text-left">
            <p
              className="text-[clamp(0.875rem,1.5vw,1rem)]
                leading-relaxed
                text-zinc-300"
            >
              {data?.excerpt}
            </p>
            {/* Tags */}
            {data.tags?.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4 px-4 pb-4 border-t">
                {data.tags?.map((tag) => (
                  <Link
                    key={tag.id}
                    href={`/tags/${tag.slug}`}
                    className="
                    rounded-md
                    border border-blue-500/30
                    bg-blue-500/10
                    px-2 py-1
                    text-xs
                    text-blue-400
                    transition-colors
                    hover:bg-blue-500/20
                    hover:text-blue-300
                    "
                  >
                    {tag.name}
                  </Link>
                ))}
              </div>
            )}
          </CardContent>

          <CardFooter
            className=" w-full
            flex
            flex-wrap
            gap-2
            justify-between
            items-center
            bg-[#3B82F6]
            text-zinc-900
            px-4
            py-3"
          >
            <p className="text-[clamp(0.8rem,0.5vw,0.9rem)]">{data.author}</p>
            <time
              dateTime={data?.publishedAt}
              className="text-[clamp(0.8rem,0.5vw,0.9rem)]"
            >
              {data.publishedAt}
            </time>
            <p className="text-[clamp(0.8rem,0.5vw,0.9rem)]">
              {data.readingTime} min
            </p>
          </CardFooter>
        </article>
      </Card>
    </>
  );
};

export default PostCard;
