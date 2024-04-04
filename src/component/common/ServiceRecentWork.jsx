import SectionHeadings from "component/publicPage/home/SectionHeadings";
import React, { useState } from "react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { PORTFOLIO } from "component/publicPage/portfolio/Constant";

function ServiceRecentWork() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full h-fit py-[5.125rem] px-[8.43rem] flex items-center justify-center">
      <div
        className="w-[72.185rem] flex flex-col items-center
       justify-center gap-[2.875rem]"
      >
        <div className="sm:px-[2px] px-[2.75rem]">
          <SectionHeadings
            headingPart1="Our"
            headingPart2="Recent Work"
            subHeading={`The stories of some of our favourite projects, which 
          inspired us to go above and beyond to meet Deeporion-level standards.`}
          />
        </div>
        {PORTFOLIO.map(
          (obj, index) =>
            index === activeIndex && (
              <div
                key={index}
                className="h-fit w-full flex items-center justify-start recent-main"
              >
                <div
                  className="recent-card-1 w-[41.93rem] h-[22.81rem] flex items-center
                 justify-center relative rounded-[0.675rem]"
                >
                  <img
                    className="max-h-[22.8125rem] w-full max-w-[41.9375rem] rounded-[0.675rem]"
                    src={obj.cardImage}
                  />
                  <div
                    className="recent-card-2 w-[35.31rem] h-[15.65rem] absolute lg:left-[37.5rem]
                bg-[#031B59] text-white py-[2.5rem] px-[1.93rem] flex flex-col
                 items-start justify-start gap-[1.69rem]"
                  >
                    <div className="font-bold text-[1.25rem]">
                      {obj.companyTitle}
                    </div>
                    <div className="font-normal text-[1rem]">
                      {obj.companyDetails}
                    </div>
                  </div>
                </div>
              </div>
            )
        )}
        <div className="flex items-center justify-center gap-[1.13rem]">
          <buttton
            className="w-[3rem] h-[3rem] text-[#ED6E0F] hover:text-[#fff] text-[1.25rem]
            bg-[#fff] hover:bg-[#ED6E0F] border border-solid border-[#DCDCDC]
             hover:border-[#ED6E0F] hover:shadow-[0px_8px_23.3px_0px_rgba(237,110,15,0.50)] rounded-3xl
              p-[0.625rem] flex items-center justify-center cursor-pointer"
            onClick={() =>
              activeIndex === 0
                ? setActiveIndex(PORTFOLIO.length - 1)
                : setActiveIndex(activeIndex - 1)
            }
          >
            <MdArrowBack className="arrow-recent" />
          </buttton>
          <button
            className="w-[3rem] h-[3rem] text-[#ED6E0F] hover:text-[#fff] text-[1.25rem]
           bg-[#fff] hover:bg-[#ED6E0F] border border-solid border-[#DCDCDC]
             hover:shadow-[0px_8px_23.3px_0px_rgba(237,110,15,0.50)] rounded-3xl p-[0.625rem]
             flex items-center justify-center cursor-pointer"
            onClick={() =>
              activeIndex === PORTFOLIO.length - 1
                ? setActiveIndex(0)
                : setActiveIndex(activeIndex + 1)
            }
          >
            <MdArrowForward className="arrow-recent" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ServiceRecentWork;
