import { CategoriesList } from "@/config/home";
import { Input } from "@base-ui/react";

const Search = () => {
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
          ></Input>
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
