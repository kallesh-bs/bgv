/* eslint-disable max-len */
import React, { useEffect, useState, useRef } from "react";
import SectionHeadings from "./SectionHeadings";
import { useTranslation } from "react-i18next";
import { IoMdArrowBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { insightData } from "../Constants";

const LatestInsightMobileView = () => {
  const { t } = useTranslation();
  const maxScrollWidth = useRef(window.innerWidth);
  const [imageIndex, setImageIndex] = useState(0);
  const carousel = useRef(null);
  const navigate = useNavigate();

  const handleNextClick = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * imageIndex <=
        maxScrollWidth.current * imageIndex &&
      insightData.length - 1 > imageIndex
    ) {
      setImageIndex(imageIndex + 1);
    }
  };

  const handlePrevClick = () => {
    if (imageIndex > 0) {
      setImageIndex(imageIndex - 1);
    }
  };
  useEffect(() => {
    if (carousel.current) {
      carousel.current.scrollTo({
        left: (imageIndex * carousel.current.offsetWidth) / 2,
        behavior: "smooth",
      });
    }
  }, [imageIndex]);

  const slideStyles = {
    transform: `translateX(-${imageIndex * 100}%)`,
    transition: "transform 1s ease-in-out",
    whiteSpace: "nowrap",
    display: "flex",
  };

  return (
    <div className=" flex items-center flex-col py-[3.12rem] px-[35px] gap-[2.875rem]">
      <div className=" flex items-center justify-center w-full">
        <SectionHeadings
          headingPart1={t("insightsTitle1")}
          headingPart2={t("insightsTitle2")}
          subHeading={t("insightSubtitle")}
        />
      </div>
      <div className="w-full h-auto max-w-[73.125rem] overflow-hidden flex flex-col justify-center">
        {/* Image div */}
        <div style={slideStyles} className="max-h-[500px] relative">
          {insightData.map((item) => (
            <div
              key={item.id}
              className="w-full shrink-0 h-[250px] relative"
            >
              <img src={item.img} alt="" className="h-[18.25rem] w-[100vw]" />
              <div className="overlay absolute top-0 left-0 bg-black/30 w-[100vw] h-[18.25rem]">
                <div className="absolute top-[3.12rem] left-[2.38rem] flex flex-col gap-5">
                  <div>
                    <p className=" text-white text-[1.125rem] font-bold w-[18rem] text-wrap ">
                      {item.title.length > 100
                        ? `${t(item.title).substring(0, 100)}...`
                        : t(item.title)}
                    </p>
                  </div>
                  <div>
                    <button
                      className="border border-white  py-[0.625rem] px-[1.375rem] rounded-[0.625rem] text-white"
                      onClick={() => navigate(`/insight/${item.id}`)}
                    >
                      {t("readMore")}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cards Headings */}
        <div className="flex flex-col align-middle gap-[1.25rem]">
          <div
            className=" h-[15rem] relative top-[7.187rem] flex justify-start items-center px-[15px] gap-[2.4rem] overflow-x-auto overflow-y-hidden
           translate-y-[-8rem] no-scroll "
            ref={carousel}
          >
            {insightData.map((item, index) => (
              <div
                key={index}
                className={`background-animate latest_insight p-[2px] bg-white text-[#031B59] rounded-md insight_hover_bg transition-transform duration-3000`}
                onClick={() => {
                  setImageIndex(index);
                }}
              >
                <div
                  key={item.id}
                  className={`insight_hover flex flex-col gap-5 w-[13.5rem]
                 h-[10.7rem] rounded-md p-[1.25rem] hover:bg-white bg-[#031B59] text-white`}
                >
                  <h3 className="text-[1rem] font-bold">
                    {t(item.title).substring(0, 30)}
                  </h3>
                  <p className="text-base leading-5 font-extralight">
                    {t(item.content).substring(0, 60)}...
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center align-top gap-[1.25rem]">
            <button
              className="bg-white w-[2.62rem] h-[2.62rem]
         flex justify-center items-center text-[1.5rem]
         rounded-full border border-solid shadow-[1px_2px_1px_0px_#D8E3FF] bg-blue-gray-50"
            >
              <IoMdArrowBack onClick={() => handlePrevClick()} />
            </button>
            <button
              className="bg-white w-[2.62rem]
         h-[2.62rem] flex justify-center items-center text-[1.5rem]
         rounded-full border border-solid shadow-[-1px_2px_1px_0px_#D8E3FF] bg-blue-gray-50"
            >
              <IoMdArrowForward onClick={() => handleNextClick()} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestInsightMobileView;
