import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ArrowAnimation from "./image/ArrowAnimation.json";
import { useNavigate } from "react-router-dom";
import { PORTFOLIO } from "../portfolio/Constant";
import Lottie from "lottie-react";

export default function OurPortfolioMobileView() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0); // Initialize with -1 to indicate no active project
  const [activeLoop, setActiveLoop] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
    setActiveLoop(index);
  };

  useEffect(() => {
    if (typeof activeLoop === "number") {
      setActiveLoop(null);
    }
  }, [activeLoop]);

  return (
    <div className="w-full flex flex-col items-center py-[5.12rem] px-[1.5rem] gap-[2.88rem] ">
      <div
        className="text-center font-Raleway text-[#031B59] flex flex-col justify-center
			 items-center gap-[0.875rem]"
      >
        <span className="font-bold text-4xl leading-9">
          {t("our")} <span className="text-[#ED6E0F] ">{t("portfolio")}</span>
        </span>
        <p className="text-[#646978]">{t("signigicant_benefit")}</p>
      </div>
      <div className="flex flex-col justify-center cursor-pointer gap-[4rem]">
        <div className="flex flex-col items-center justify-center gap-[1rem]">
          <div
            className="p-3 overflow-x-auto overflow-y-hidden max-w-[100vw] flex justify-start
           items-start gap-[0.75rem]"
          >
            {PORTFOLIO.map(
              (obj, index) =>
                index < 4 && (
                  <button
                    key={index}
                    className={`p-3 w-full flex-wrap items-center text-[#031B59] font-bold 
                       justify-center text-nowrap bg-${
                  activeIndex === index ? "[#031B59]" : "white"
                  }
              text-${activeIndex === index ? "white" : "#031B59"}
              border-${activeIndex === index ? "#031B59" : "#A1A1A1"}
              rounded-[0.5rem] border project-btn uppercase`}
                    onClick={() => handleClick(index)}
                  >
                    {obj.companyTitle}
                  </button>
                )
            )}
          </div>
          <div
            className={`w-36 h-20 rotate-[100deg]
                     last: flex justify-center animated_arrow visible
                     }`}
          >
            <Lottie
              animationData={ArrowAnimation}
              loop={activeLoop === activeIndex}
            />
          </div>
        </div>
        <div className="w-full h-[19.75rem] flex flex-col items-center justify-center gap-4">
          <div className="h-[19.75rem] w-fit flex justify-center items-center">
            {activeIndex !== -1 && (
              <div className="w-full h-full">
                <img
                  className="w-full h-full max-w-[30.8125rem] max-h-[15.30rem]"
                  src={PORTFOLIO[activeIndex].snippets[0].img}
                  alt="project-img"
                />
              </div>
            )}
          </div>
          <div className="w-full h-auto flex justify-center px-5">
            {activeIndex !== -1 && (
              <div className="w-full text-center">
                <h5
                  className="uppercase text-xl font-bold text-[#031B59] "
                  onClick={() =>
                    navigate(`/portfolio/details/${PORTFOLIO[activeIndex].id}`)
                  }
                >
                  {PORTFOLIO[activeIndex].companyTitle}
                </h5>
                <p className="w-full text-[#646978]">
                  {PORTFOLIO[activeIndex].companyDetails}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
