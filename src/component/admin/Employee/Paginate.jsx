/* eslint-disable react/react-in-jsx-scope */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function Paginate({
  next,
  previous,
  initialPageCount,
  pageRangeDisplayed,
  currentPage,
  setCurrentPage,
}) {
  const [countArray, setCountArray] = useState([]);
  const getNumberArray = () => {
    let array = [];

    for (let i = 1; i <= initialPageCount; i++) {
      array.push(i);
    }

    if (initialPageCount > pageRangeDisplayed) {
      const data = array.splice(currentPage - 1, pageRangeDisplayed);
      if (data?.length < pageRangeDisplayed) {
        for (let i = array[array.length - 1]; data.length !== pageRangeDisplayed; i--) {
          data.unshift(i);
        }
      }
      setCountArray(data);
    } else {
      setCountArray(array);
    }

  };

  useEffect(() => {
    getNumberArray();
  }, [currentPage, initialPageCount]);

  return (
    <div className="flex flex-row justify-center items-center">
      <button
        className={`mr-5 ${currentPage === 1 ? "text-[#c7c7c7]" : "text-[#031B59]"}`}
        disabled={currentPage === 1}
        onClick={() => { setCurrentPage(currentPage - 1); }}
      >
        {previous}
      </button>
      {countArray
        ?.map((count) => (
          <h4
            className={`${currentPage == count
              ? "bg-[#031B59] text-white"
              : "bg-white text-black"
            } cursor-pointer px-3 py-1 flex justify-center rounded-full`}
            onClick={() => setCurrentPage(count)}
            key={count}
          >
            {count}
          </h4>
        ))}
      <button
        className={`ml-5 ${currentPage === initialPageCount ? "text-[#c7c7c7]" : "text-[#031B59]"}`}
        disabled={currentPage === initialPageCount}
        onClick={() => { setCurrentPage(currentPage + 1); }}
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
  setCurrentPage: PropTypes.string,
};
