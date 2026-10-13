"use client";
import { CategoriesList } from "@/config/dropDownLists";
import { Input } from "@/components/ui/input";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useRef, useTransition } from "react";

const Search = () => {
  const searchParam = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const initialQuery = searchParam.get("query")?.toString() ?? "";
  const initialQueryRef = useRef(initialQuery);

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParam);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    startTransition(() => {
      router.replace(
        params.toString() ? `${pathName}?${params.toString()}` : pathName,
      );
    });
  }, 500);

  const handleFilter = (term: string) => {
    const param = new URLSearchParams();
    if (term === "all") {
      param.delete("category");
    } else {
      param.set("category", term);
    }

    const queryString = param.toString();
    router.push(queryString ? `${pathName}?${queryString}` : pathName);
  };
  return (
    <>
      <div className="w-[50%] flex justify-between">
        <div>
          <label htmlFor="search">Search Posts</label>
          <Input
            type="search"
            name="search"
            id="search"
            aria-describedby="input-search"
            placeholder="Search..."
            className="
                w-full
                h-10
                rounded
                border
                border-gray-300
                px-3
                py-2
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
                focus:border-blue-500
              "
            defaultValue={initialQueryRef.current}
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
          />
          {isPending && (
            <p className="mt-2 text-sm text-muted-foreground">
              Updating Results...
            </p>
          )}
        </div>
        <div>
          <label htmlFor="search">Filter Posts</label>
          <select
            name="select"
            id="select"
            aria-describedby="select-search"
            className="
                w-full
                h-10
                rounded
                border
                border-gray-300
                px-3
                py-2
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
                focus:border-blue-500
              "
            onChange={(event) => {
              handleFilter(event.target.value);
            }}
          >
            <option value="all">All</option>
            {CategoriesList.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default Search;
