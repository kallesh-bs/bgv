import React, { useState } from "react";
import SectionHeadings from "../home/SectionHeadings";
import { useTranslation } from "react-i18next";
import { insightData } from "../Constants";
import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";
import { MdArrowForward } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const LatestInsights = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState("1");
  const [displayData, setDisplayData] = useState(insightData);
  const navigate = useNavigate();

  const handleCardIncrementClick = () => {
    const updated = displayData.shift();
    displayData.push(updated);
    setDisplayData(displayData);
    setActiveIndex((prevState) => prevState + 1);
  };

  const handleCardDecrementClick = () => {
    const lastData = displayData[displayData.length - 1];
    displayData.pop();
    displayData.unshift(lastData);
    setActiveIndex((prevState) => prevState - 1);
  };

  const handleRenderCard = (index, obj) => {
    return (
      <div
        key={index}
        className="min-w-[23.125rem] h-[27.625rem] rounded-[1.25rem] p-[0.75rem]
    shadow-[0px_0px_25px_0px_rgba(3,27,89,0.20)] cursor-pointer"
      >
        <div className="flex flex-col items-center justify-center relative ">
          <img
            src={obj.img}
            className="rounded-[1.125rem] w-full h-[12.125rem]"
          />
          <div
            className="w-[20.125rem] h-[15.375rem] flex flex-col items-start justify-start
    gap-[0.75rem] rounded-[1.125rem] absolute top-[10rem]
    bg-white py-[0.75rem] px-[0.88rem]"
          >
            <div className="w-full h-[2.125rem] flex items-center justify-start gap-[0.62rem]">
              <img
                src={obj.profile_pic}
                className="w-[2.125rem] h-[2.125rem] rounded-full"
              />
              <div className="flex items-center justify-start gap-[0.38rem]">
                <p className="text-[0.875rem] text-[#646978]">{obj.name}</p>
                <div className="w-[0.175rem] bg-[#DCDCDC] h-[1.5rem]"></div>
                <p className="text-[0.875rem] text-[#646978]">{obj.date}</p>
              </div>
            </div>
            <div className="w-full h-[8.875rem]">
              <h2
                className={`font-bold text-[#031B59] hover:text-[#ED6E0F] leading-6`}
              >
                {t(obj.title).length > 70
                  ? `${t(obj.title).slice(0, 70)}...`
                  : t(obj.title)}
              </h2>
              <p className="text-[0.875rem] leading-[1.375rem] text-[#646978]">
                {t(obj.content).length > 160
                  ? `${t(obj.content).slice(0, 160)}...`
                  : t(obj.content)}
              </p>
            </div>
            <div className="w-full h-[1.375rem] flex items-center justify-start gap-[0.38rem]">
              <p
                onClick={() => navigate(`${obj.id}`)}
                className={` text-[#031B59] hover:text-[#ED6E0F] cursor-pointer`}
              >
                {t("readMore")}
              </p>
              <MdArrowForward
                onClick={() => navigate(`${obj.id}`)}
                className={`text-[#031B59] hover:text-[#ED6E0F] w-[1.375rem] h-[1.375rem] cursor-pointer`}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div
        className="w-full flex flex-col items-center justify-center
  lg:pt-[85px] lg:pb-[27px] lg:px-[135px] px-[35px] p-[100px] gap-[2.88rem]"
      >
        <div>
          <SectionHeadings
            headingPart1={`${t("missionHeading1")}`}
            headingPart2={`${t("latestInsights")}`}
            subHeading="Lorem ipsum dolor sit amet consectetur. At nibh turpis rhoncus nulla vitae."
          />
        </div>
        <div className="w-[90rem] overflow-x-hidden flex justify-start h-[30rem] gap-[1.81rem] border no-scrollbar">
          {displayData.map((obj, index) => {
            return handleRenderCard(
              index,
              obj,
              activeIndex.toString(),
              setActiveIndex
            );
          })}
        </div>
        <div className="flex justify-center">
          <button
            className="flex w-[40px] h-[40px] justify-center items-center hover:bg-[#ED6E0F]
           group bg-white rounded-full mx-2 "
            onClick={handleCardDecrementClick}
          >
            <FaArrowLeftLong className="text-[#ED6E0F] group-hover:text-white" />
          </button>
          <button
            className="flex w-[40px] h-[40px] justify-center items-center hover:bg-[#ED6E0F]
           group bg-white rounded-full mx-2"
            onClick={handleCardIncrementClick}
          >
            <FaArrowRight className="text-[#ED6E0F] group-hover:text-white" />
          </button>
        </div>
      </div>
    </>
  );
};

export default LatestInsights;
