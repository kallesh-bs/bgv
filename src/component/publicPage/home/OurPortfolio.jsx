import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ArrowAnimation from "./image/ArrowAnimation.json";
import Lottie from "lottie-react";
import { LuChevronRight } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { PORTFOLIO } from "../portfolio/Constant";
import AnimatedButton from "component/common/AnimatedButton";
import { FaArrowRight } from "react-icons/fa";

const OurPortfolio = () => {
  const { t } = useTranslation();

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

  const navigate = useNavigate();

  return (
    <div className="w-full lg:flex flex-col items-center py-[5.12rem] gap-[2.88rem] ">
      <div
        className="text-center font-Raleway text-[#031B59] flex flex-col justify-center
			 items-center gap-[1.12rem]"
      >
        <span className="font-bold text-4xl leading-9">
          {t("our")} <span className="text-[#ED6E0F] ">{t("portfolio")}</span>
        </span>
        <p className="text-[#646978]">{t("signigicant_benefit")}</p>
      </div>
      {/* Portfolio component */}
      <div className="flex justify-center items-start cursor-pointer">
        <div className="h-full flex flex-col justify-start items-start gap-[1.88rem]">
          {PORTFOLIO.map(
            (obj, index) =>
              index < 4 && (
                <div
                  className="w-full h-[4.75rem] flex items-center text-[#031B59] font-bold"
                  key={index}
                >
                  {/* Button Headings */}
                  <div
                    className={`w-[28.5rem] h-full py-5 flex items-center justify-center bg-${
                      activeIndex === index ? "[#031B59]" : "white"
                    }
              text-${activeIndex === index ? "white" : "#031B59"}
              border-${activeIndex === index ? "#031B59" : "#A1A1A1"}
             gap-[1.88rem] rounded-[1.125rem] border project-btn`}
                    onClick={() => handleClick(index)}
                  >
                    <p>
                      <span>0</span>
                      {obj.id}
                    </p>
                    <p className="w-[17.5rem] uppercase">{obj.companyTitle}</p>
                    <button>
                      <LuChevronRight />
                    </button>
                  </div>
                  <div
                    key={index}
                    className={`w-36 h-20  ${
                      activeIndex === 3
                        ? "rotate-[-5deg] translate-y-[-2rem]"
                        : "rotate-45"
                    }
                     last: flex justify-center animated_arrow ${
                activeIndex === index ? "visible" : "hidden"
                }`}
                  >
                    <Lottie
                      animationData={ArrowAnimation}
                      loop={activeLoop === index}
                    />
                  </div>
                </div>
              )
          )}
        </div>
        {/* Right Container */}
        <div className="w-full h-[28rem] flex flex-col gap-4">
          <div className="h-[19.75rem] w-fit flex justify-center items-center">
            {activeIndex !== -1 && (
              <div className="w-[30.8125rem] h-[19.75rem]">
                <img
                  className="w-full h-full max-w-[30.8125rem] max-h-[19.75rem]"
                  src={PORTFOLIO[activeIndex].snippets[0].img}
                  alt="project-img"
                />
              </div>
            )}
          </div>
          <div className="w-full h-full flex px-5">
            {activeIndex !== -1 && (
              <div className="w-fit">
                <h5
                  className="uppercase text-xl font-bold text-[#031B59] "
                  onClick={() =>
                    navigate(`/portfolio/details/${PORTFOLIO[activeIndex].id}`)
                  }
                >
                  {PORTFOLIO[activeIndex].companyTitle}
                </h5>
                <p className="w-[30.8125rem] text-[#646978]">
                  {PORTFOLIO[activeIndex].companyDetails}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* View all Button */}
      <AnimatedButton handleClick={() => navigate("/portfolio")}>
        <p>{t("viewMore")}</p>
        <div className="text-lg ml-4">
          <FaArrowRight />
        </div>
      </AnimatedButton>
    </div>
  );
};

export default OurPortfolio;
