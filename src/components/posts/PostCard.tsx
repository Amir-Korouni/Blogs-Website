import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../shared/ui/card";
import type { Posts } from "@/shared/Types/general.type";
import { Button } from "../../shared/ui/button";
import { Heart, SavePenIcon } from "lucide-react";

type PostCardProps = {
  post: Posts;
};

const PostCard = ({ post }: PostCardProps) => {
  return (
    <Card className="max-w-[370px] h-full min-h-[300px] flex flex-col bg-card text-[var(--foreground)] rounded border border-[#334155] transition-transform duration-300 hover:-translate-y-1">
      <article className="size-full flex flex-1 flex-col">
        <CardHeader>
          <CardTitle className="flex flex-col gap-2">
            <Link href={`/categories/${post.category.slug}`}>
              <h3 className="text-sm text-blue-400">{post.category.name}</h3>
            </Link>

            <Link
              href={`/posts/${post.slug}`}
              className="text-[clamp(1.1rem,2vw,1.4rem)] leading-tight text-blue-700 hover:text-blue-400 transition-colors"
            >
              {post.title}
            </Link>
          </CardTitle>
        </CardHeader>

        <CardContent className="w-full h-[100px] overflow-y-hidden text-left mt-8">
          <p className="text-[clamp(0.875rem,1.5vw,1rem)] leading-relaxed">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap gap-2 mt-4 px-4 pb-4 border-t">
            {post.tags.map((tag) => (
              <Button
                key={tag.id}
                variant="ghost"
                aria-label={`Posts tagged ${tag.name}`}
                className="rounded-md border border-blue-500 bg-blue-500/10 px-2 py-1 text-xs text-blue-700"
              >
                {tag.name}
              </Button>
            ))}
          </div>
        </CardContent>

        <CardFooter className="flex gap-2">
          <Button variant={"outline"}>
            <Heart color="white" />
          </Button>
          <Button variant={"outline"}>
            <SavePenIcon color="white" />
          </Button>
        </CardFooter>

        <CardFooter className="w-full flex flex-wrap gap-2 justify-between items-center bg-[#3B82F6] px-4 py-3">
          <p>{post.author.username}</p>

          <time dateTime={post.createdAt}>
            {new Date(post.createdAt).toLocaleDateString()}
          </time>
        </CardFooter>
      </article>
    </Card>
  );
};

export default PostCard;
