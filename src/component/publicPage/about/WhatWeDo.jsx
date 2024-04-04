import React, { useState } from "react";
import SectionHeadings from "../home/SectionHeadings";
import { aboutWhatWeDoData } from "../Constants";
import { MdArrowDownward } from "react-icons/md";
import { useTranslation } from "react-i18next";

function WhatWeDo() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      className="w-full h-fit py-[5.12rem] sm:px-[8.43rem] flex flex-col
    justify-center items-center bg-[#F3F6FD] gap-[2.875rem]"
    >
      <SectionHeadings
        headingPart1="What We"
        headingPart2="Do at Deeporion"
        subHeading="We provide you with significant benefits to help you with your digital development."
      />
      <div className="h-fit about-card">
        {aboutWhatWeDoData.map((obj, index) => (
          <div key={index}>
            <div
              onMouseOver={() =>
                window.innerWidth > 480 && setActiveIndex(index)
              }
              className={`${activeIndex === index
                ? `w-[35.75rem] active${activeIndex + 1}`
                : `w-[16.65rem] ${obj.className}`
              } h-[35.12rem] rounded-[1.25rem] shadow-[0px_0px_25px_0px_rgba(3,27,89,0.20)]
              p-[1.88rem] transition-all duration-200 ease-in-out ${activeIndex !== index
            ? "about-card-list"
            : "about-card-list-active"
          }`}
            >
              {activeIndex !== index && (
                <div
                  className="arrow rounded-3xl bg-white w-[2rem] h-[2rem] flex items-center
                  justify-center relative top-[4rem] left-[18rem]"
                  onClick={() => {
                    setActiveIndex(index);
                  }}
                >
                  <MdArrowDownward className="arrow-icon" />
                </div>
              )}
              <div
                className={`text-white w-full h-full flex flex-col items-start justify-end
                 ${activeIndex === index ? "" : "hidden"} about-content`}
              >
                <p className="font-normal text-[1rem] about-content-1">
                  {obj.heading1}
                </p>
                <p className="text-[1.25rem] leading-7 mt-[1.25rem] about-content-2">
                  {`${t(obj.desc)}`}
                </p>
                <button
                  className="mt-[1.25rem] py-[0.875rem] px-[1.625rem] bg-white
                bg-opacity-30 rounded-[0.625rem] about-content-btn"
                >
                  {t("seeWork")}
                </button>
              </div>
            </div>
            <p className="mt-[0.6rem] font-normal text-[1.25rem]">
              {obj.heading1}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhatWeDo;
