import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Categories",
  description:
    "Explore DEVLOG categories and discover articles about frontend, backend, AI engineering, DevOps, databases, and modern technologies.",
};

const Page = () => {
  return (
    <>
      <section>
        <h2>Categories</h2>
      </section>
    </>
  );
};

export default Page;
