import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Posts",
  description: "Explore all articles about modern technologies.",
};

const Page = () => {
  return (
    <>
      <section>
        <h2>Posts</h2>
      </section>
    </>
  );
};

export default Page;
