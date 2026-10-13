"use client";
import Link from "next/link";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useRef, useTransition } from "react";
import { useDebouncedCallback } from "use-debounce";

const SearchNew = () => {
  const searchParam = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const initialQuery = searchParam.get("query")?.toString() ?? "";
  const QueryRef = useRef(initialQuery);

  const handleChange = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParam);
    if (value) {
      params.set("query", value);
    } else {
      params.delete("query");
    }

    startTransition(() => {
      router.replace(
        params.toString() ? `${pathName}?${params.toString()}` : pathName,
      );
    });
  }, 500);

  return (
    <>
      <div className="w-full px-10 flex justify-between items-cetner mt-10">
        <Input
          name="searchDashbaord"
          id="searchDashbaord"
          type="search"
          placeholder="Search..."
          aria-describedby="Search-Dashboard-blogs"
          className="w-[40%]
                h-10
                rounded
                border
                border-gray-300
                px-3
                py-2
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
                focus:border-blue-500"
          defaultValue={QueryRef.current}
          onChange={(event) => {
            handleChange(event.target.value);
          }}
        />
        {isPending && (
          <p className="mt-2 text-sm text-muted-foreground">
            Updating Results...
          </p>
        )}
        <Link href="/dashboard/posts/create">
          <Button
            aria-label="Create new post"
            className="
              xl:w-[200px]
              md:w-[150px]
              sm:w-[100px]
              h-10
              bg-blue-500
              text-white
              rounded
              hover:bg-blue-600
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
              cursor-pointer
            "
          >
            New Post
            <Plus />
          </Button>
        </Link>
      </div>
    </>
  );
};

export default SearchNew;
