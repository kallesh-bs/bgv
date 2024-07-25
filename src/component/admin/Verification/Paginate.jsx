/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import { useMemo } from "react";

export default function Paginate({
  next,
  previous,
  initialPageCount,
  pageRangeDisplayed,
  currentPage,
  setCurrentPage,
}) {
  const generatePageNumbers = () => {
    const currentPageGroup = Math.ceil(currentPage / pageRangeDisplayed);
    const startPage = (currentPageGroup - 1) * pageRangeDisplayed + 1;
    const endPage = Math.min(
      startPage + pageRangeDisplayed - 1,
      initialPageCount
    );
    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const countArray = useMemo(generatePageNumbers, [
    currentPage,
    initialPageCount,
    pageRangeDisplayed,
  ]);

  const goToNextPages = () => {
    const nextStartingPage = countArray[0] + pageRangeDisplayed;
    setCurrentPage(nextStartingPage);
  };

  const goToPreviousPages = () => {
    const previousStartingPage = countArray[0] - pageRangeDisplayed;
    setCurrentPage(previousStartingPage);
  };

  return (
    <div className="flex flex-row justify-center items-center">
      <button
        className={`mr-5 ${
          currentPage === 1 ? "text-[rgb(199,199,199)]" : "text-[#031B59]"
        } 
        ${
          currentPage <= pageRangeDisplayed
            ? "text-[#c7c7c7]"
            : "text-[#031B59]"
        }`}
        onClick={goToPreviousPages}
        disabled={currentPage <= pageRangeDisplayed}
      >
        {previous}
      </button>
      {countArray.map((count) => (
        <h4
          className={`${
            currentPage === count
              ? "bg-[#031B59] text-white"
              : "bg-white text-black"
          } 
          cursor-pointer px-3 py-1 flex justify-center rounded-full`}
          onClick={() => setCurrentPage(count)}
          key={count}
        >
          {count}
        </h4>
      ))}
      <button
        className={`ml-5 ${
          countArray.includes(initialPageCount)
            ? "text-[#c7c7c7]"
            : "text-[#031B59]"
        }`}
        onClick={goToNextPages}
        disabled={countArray.includes(initialPageCount)}
      >
        {next}
      </button>
    </div>
  );
}

Paginate.propTypes = {
  next: PropTypes.string,
  previous: PropTypes.string,
  initialPageCount: PropTypes.number,
  pageRangeDisplayed: PropTypes.number,
  currentPage: PropTypes.number,
  setCurrentPage: PropTypes.func,
};
