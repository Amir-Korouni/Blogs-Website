import { Posts } from "@/Types/post";

type ArticleProps = {
  posts: Posts;
};

const PostArticle = ({ posts }: ArticleProps) => {
  return (
    <>
      <div
        key={posts.id}
        className="w-full h-[50vh] flex flex-col justify-start items-center p-10"
      >
        <h1 className="text-[clamp(1.8rem,4vw,3rem)] font-bold">{posts.title}</h1>

        <article
          className="w-[50%]"
          dangerouslySetInnerHTML={{ __html: posts.content }}
        />
      </div>
    </>
  );
};

export default PostArticle;
