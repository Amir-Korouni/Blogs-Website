"use client";
import { CategoriesList, Status } from "@/config/dropDownLists.config";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useTransition } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";

type searchType = {
  ifAdmin?: boolean;
};

const Search = ({ ifAdmin }: searchType) => {
  const searchParam = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

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

  const handleFilter = (term: string | null) => {
    const param = new URLSearchParams(searchParam);
    if (term === "all") {
      param.delete("category");
    } else {
      param.set("category", term!);
    }

    const queryString = param.toString();
    router.push(queryString ? `${pathName}?${queryString}` : pathName);
  };

  const handleFilterState = (term: string | null) => {
    const param = new URLSearchParams(searchParam);
    if (term === "all") {
      param.delete("status");
    } else {
      param.set("status", term!);
    }

    const queryString = param.toString();
    router.push(queryString ? `${pathName}?${queryString}` : pathName);
  };
  return (
    <>
      <div className="w-[100%] flex justify-between">
        <div className="w-[40%]">
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
        {!ifAdmin && (
          <div className="w-[40%]">
            <label htmlFor="search">Filter Posts</label>
            <Select
              value={searchParam.get("category") ?? "all"}
              onValueChange={(value) => {
                handleFilter(value);
              }}
            >
              <SelectTrigger
                id="select"
                name="select"
                aria-describedby="select-search"
                className="w-full h-10"
              >
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="all">All</SelectItem>

                {CategoriesList.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
        {ifAdmin && (
          <div className="w-[40%]">
            <label htmlFor="search">Filter Posts</label>
            <Select
              value={searchParam.get("category") ?? "all"}
              onValueChange={(value) => {
                handleFilterState(value );
              }}
            >
              <SelectTrigger
                id="select"
                name="select"
                aria-describedby="select-search"
                className="w-full h-10"
              >
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="all">All</SelectItem>

                {Status.map((status) => (
                  <SelectItem key={status} value={status}>
                    {status}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
      </div>
    </>
  );
};

export default Search;
