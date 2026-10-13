import { CategoriesList, Status } from "@/config/dropDownLists";
import { Input } from "../ui/input";

const ToolBar = () => {
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
        />

        <div className="w-[20%] flex">
          <label htmlFor="search">Filter By Status</label>
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
            <option value="all">All</option>
            {Status.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>

        <div className="w-[20%] flex">
          <label htmlFor="search">Filter By Category</label>
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
