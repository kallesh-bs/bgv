import React, { useEffect, useMemo, useRef, useState } from "react";
import PropTypes from "prop-types";
import { IoIosArrowDown } from "react-icons/io";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "redux/store";
import {
  bgvSetPaginationCurrentPage,
  bgvSetPaginationPerPage,
} from "redux/actions/action";
import { fetchBgvFilterEmployeeData } from "redux/appThunk/Admin/bgv";

interface IPaginateProps {
  initialPageCount: any;
  pageRangeDisplayed: any;
  currentPage: any;
}

export default function Paginate({
  initialPageCount,
  pageRangeDisplayed,
  currentPage,
}: IPaginateProps) {
  const dispatch = useDispatch<AppDispatch>();
  const pginationNumber = [10, 25, 50, 100, 150];
  const [perPagepop, setPerPagePop] = useState(false);
  const { perPage, filterTab }: any = useSelector(
    (state: RootState) => state.bgvReducer
  );

  const stype =
    filterTab === 2
      ? "verified"
      : filterTab === 3
      ? "in_progress"
      : filterTab === 4
      ? "insufficient"
      : filterTab === 5
      ? "rejected"
      : "";

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (!isFirstRender.current) {
      fetchBgvFilterEmployeeData(dispatch, currentPage, stype, perPage);
    }
    isFirstRender.current = false;
  }, [currentPage, perPage]);

  const [isClickedForPop, setIsClickedForPop] = useState(true);
  const menuRef = useRef<HTMLDivElement>(null);
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
    dispatch(bgvSetPaginationCurrentPage(nextStartingPage));
  };

  const goToPreviousPages = () => {
    const previousStartingPage = countArray[0] - pageRangeDisplayed;
    dispatch(bgvSetPaginationCurrentPage(previousStartingPage));
  };

  const handlePerPage = async (obj: any) => {

    dispatch(bgvSetPaginationCurrentPage(1));

    dispatch(bgvSetPaginationPerPage(+obj));

    setPerPagePop(false);
  };

  const handleClosePerPage = () => {
    if (isClickedForPop) {
      setPerPagePop(true);
      setIsClickedForPop(false);
    }
  };

  const useOnClickOutside = (ref: any, handler: any) => {
    useEffect(() => {
      const listener = (event: any) => {
        const el = ref.current;
        if (!el || el.contains(event.target)) {
          return;
        }

        handler(event);
      };

      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);

      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    }, [ref, handler]);
  };

  const ClickOutsideClose = (
    openFilter: boolean,
    setIsClicked: any,
    ref: any,
    handler: any
  ) => {
    useEffect(() => {
      if (!openFilter) {
        setTimeout(() => {
          setIsClicked(true);
        }, 500);
      }
    }, [openFilter]);

    useOnClickOutside(ref, () => handler());
  };

  ClickOutsideClose(perPagepop, setIsClickedForPop, menuRef, () =>
    setPerPagePop(false)
  );

  return (
    <div className="">
      <div className="flex items-center">
        <div className="pr-5 flex items-center gap-2 relative h-full ">
          <h1 className="text-[#686868]">Rows per page:</h1>
          <p
            className="flex items-center gap-1 cursor-pointer text-[#686868] hover:bg-[#E2E8F0] p-[2px] rounded-[10px]"
            onClick={handleClosePerPage}
          >
            {perPage}
            <IoIosArrowDown />
          </p>
          {perPagepop && (
            <div
              ref={menuRef}
              className="absolute animate-popover bg-white bottom-[2rem] right-0 w-[6.6rem] border border-[#DEE4EB] rounded-[0.5rem] "
            >
              {pginationNumber?.map((item) => {
                return (
                  <div
                    className=" h-[2.3rem] flex items-center hover:bg-[#f6faff] pl-[1rem] rounded-[0.5rem] cursor-pointer"
                    onClick={() => handlePerPage(item)}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="flex flex-row justify-center items-center">
          <button
            className={`mr-3`}
            onClick={goToPreviousPages}
            disabled={currentPage <= pageRangeDisplayed}
          >
            <MdChevronLeft
              className={`text-[1.5rem] ${
                currentPage === 1 ? "text-[rgb(199,199,199)]" : "text-[#031B59]"
              } 
        ${
          currentPage <= pageRangeDisplayed
            ? "text-[#c7c7c7]"
            : "text-[#031B59]"
        }`}
            />
          </button>
          {countArray.map((count) => (
            <h4
              className={`${
                currentPage === count
                  ? "bg-[#031B59] text-white"
                  : "bg-white text-black"
              } 
          cursor-pointer px-3 py-1 flex justify-center rounded-full`}
              onClick={() => dispatch(bgvSetPaginationCurrentPage(+count))}
              key={count}
            >
              {count}
            </h4>
          ))}
          <button
            className={`ml-3`}
            onClick={goToNextPages}
            disabled={countArray.includes(initialPageCount)}
          >
            <MdChevronRight
              className={` text-[1.5rem] ${
                countArray.includes(initialPageCount)
                  ? "text-[#c7c7c7]"
                  : "text-[#031B59]"
              }`}
            />
          </button>
        </div>
      </div>
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
  setItemPerPage: PropTypes.func,
};
