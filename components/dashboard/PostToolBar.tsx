"use client";
import { CategoriesList, Status } from "@/config/dropDownLists";
import { Input } from "../ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useRef, useTransition } from "react";
import { useDebouncedCallback } from "use-debounce";
import Link from "next/link";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";

const ToolBar = () => {
  const search = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const initialQuery = search.get("query")?.toString() ?? "";
  const QueryRef = useRef(initialQuery);

  const handleSetUrl = useDebouncedCallback((term: string) => {
    const param = new URLSearchParams(search);
    if (term) {
      param.set("query", term);
    } else {
      param.delete("query");
    }

    startTransition(() => {
      router.push(
        param.toString() ? `${pathName}?${param.toString()}` : pathName,
      );
    });
  }, 500);

  const handleFilter = (key: string, value: string) => {
    console.log(key);
    const param = new URLSearchParams(search.toString());
    if (value === "all") {
      param.delete(key);
    } else {
      param.set(key, value);
    }

    param.delete("page");

    const queryString = param.toString();

    router.push(queryString ? `${pathName}?${queryString}` : pathName);
  };
  return (
    <>
      <section className="w-full h-[10vh] flex justify-between px-10 mt-10">
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
          onChange={(param) => {
            handleSetUrl(param.target.value);
          }}
        />
        {isPending && (
          <p className="mt-2 text-sm text-muted-foreground">
            Updating Results...
          </p>
        )}
        <div className="w-[20%] flex">
          <label htmlFor="status">Filter By Status</label>
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
            value={search.get("status") ?? "all"}
            onChange={(event) => {
              handleFilter("status", event.target.value);
            }}
          >
            <option value="all">All</option>
            {Status.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>

        <div className="w-[20%] flex">
          <label htmlFor="category">Filter By Category</label>
          <select
            name="category"
            id="category"
            aria-describedby="category-list"
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
              handleFilter("category", event.target.value);
            }}
            value={search.get("category") ?? "all"}
          >
            <option value="all">All</option>
            {CategoriesList.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </section>
    </>
  );
};

export default ToolBar;
