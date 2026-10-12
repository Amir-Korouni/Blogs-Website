"use client";

import { clsx } from "cn";
import { Button } from "../ui/button";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

type PaginationTypes = {
  currentPage: number;
  totalPages: number;
};

const Pagination = ({ currentPage, totalPages }: PaginationTypes) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  const search = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(search.toString());
    params.set("page", String(page));
    router.push(`${pathName}?${params.toString()}`);
  };

  const handlePrevious = () => {
    handlePageChange(Math.max(1, currentPage - 1));
  };

  const handleNext = () => {
    handlePageChange(Math.min(totalPages, currentPage + 1));
  };
  return (
    <>
      <nav
        aria-label="Pagination"
        className="w-full h-[10vh] flex justify-center items-center border"
      >
        <section className="flex justify-center items-center">
          <div>
            <Button
              variant="default"
              disabled={currentPage === 1}
              className="cursor-pointer rounded xl:w-[150px] md:w-[70px] sm:w-[50px]"
              onClick={handlePrevious}
            >
              Previous
            </Button>
          </div>
          <div>
            {pages.map((page) => (
              <Button
                variant="default"
                key={page}
                className={clsx(
                  "cursor-pointer rounded xl:w-[150px] md:w-[70px] sm:w-[50px] bg-transparent text-foreground",
                  { "bg-blue-700 text-white": page === currentPage },
                )}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </Button>
            ))}
          </div>
          <div>
            <Button
              variant="default"
              disabled={currentPage === totalPages}
              className="cursor-pointer rounded xl:w-[150px] md:w-[70px] sm:w-[50px]"
              onClick={handleNext}
            >
              Next
            </Button>
          </div>
        </section>
      </nav>
    </>
  );
};

export default Pagination;
