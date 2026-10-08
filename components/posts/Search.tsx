"use client";
import { CategoriesList } from "@/config/home";
import { Input } from "@/components/ui/input";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useState } from "react";

const Search = () => {
  const searchParam = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    console.log(term);
    const params = new URLSearchParams(searchParam);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathName}?${params.toString()}`);
  }, 500);

  const [query, setQuery] = useState(
    searchParam.get("query")?.toString() ?? "",
  );
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
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              handleSearch(e.target.value);
            }}
          />
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
          >
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
