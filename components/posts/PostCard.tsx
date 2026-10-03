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
        className="w-full
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
              <h3 className="text-sm text-blue-400">{data?.category}</h3>
              <Link
                href={`/posts/${"data?.slug"}`}
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
            <p className="text-sm">{data.author}</p>
            <time dateTime={data?.date} className="text-sm">
              {data.date}
            </time>
            <p className="text-sm">{data.readingTime}</p>
          </CardFooter>
        </article>
      </Card>
    </>
  );
};

export default PostCard;
