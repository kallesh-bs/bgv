import React, { useEffect, useRef, useState } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { PORTFOLIO } from "./Constant";
import AnimatedButton from "component/common/AnimatedButton";
import { useTranslation } from "react-i18next";

export default function CompanyCards({ updatedPortfolioData }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const triggerRef = useRef([]);
  const [isTriggered, setIsTriggered] = useState([]);
  console.log("updatedPortfolioData",updatedPortfolioData);

  const handleScroll = () => {
    PORTFOLIO.forEach((obj, index) => {
      if (triggerRef.current && triggerRef.current[index]) {
        const elementTop =
          triggerRef.current[index].getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;
        if (elementTop < viewportHeight) {
          setIsTriggered((prev) => ({ ...prev, [index]: true }));
        }
      }
    });
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [triggerRef.current]); // Add triggerRef.current as a dependency

  return (
    <div className="w-full flex flex-col items-center justify-center gap-7 h-fit px-[35px] py-[50px] ">
      {updatedPortfolioData.length > 0 ? (
        updatedPortfolioData.map((obj, index) => (
          <div
            className={`w-full flex  ${
              index % 2 === 0
                ? "flex-row"
                : "flex-row-reverse lg:flex-row-reverse bg-[#F3F6FD]"
            } flex-col lg:flex-row lg:py-[85px] lg:px-[135px] px-[35px] py-[100px] gap-[46px]`}
            key={index}
          >
            <div className=" w-fit flex flex-col items-start order-1 lg:order-2 gap-5 ">
              <div className="flex flex-col gap-[0.88rem]">
                <h2 className="text-[#031B59] text-left font-Raleway text-[2.25rem] font-bold pb-[2px]">
                  {obj.companyTitle}
                </h2>
                <div className="flex gap-2 pb-[2px] flex-wrap">
                  {obj?.fields?.map((flds, index) => (
                    <div
                      className="flex h-[2rem] py-[0.375rem] px-[0.75rem] items-center gap-[0.4375rem] border
             border-[#ED6E0F] rounded-[1.625rem]"
                      key={index}
                    >
                      <h2 className="text-[#ED6E0F] font-normal text-nowrap">
                        {flds}
                      </h2>
                    </div>
                  ))}
                </div>
                <p className="text-[#646978] text-[1rem] font-normal">
                  {obj.companyDetails}
                </p>
              </div>
              <div>
                <h3 className="text-[#242529] text-[1rem] font-normal pb-[0.625rem]">
                  Tools Used
                </h3>
                <div className="flex flex-row gap-[0.625rem] items-start flex-wrap ">
                  {obj.techStack.map((item, index) => (
                    <div
                      className="bg-[#FFF] py-[0.625rem] px-[0.9375rem] flex justify-center items-center
                     gap-[0.625rem] min-w-[5.5rem] rounded-[0.625rem] shadow-2xl"
                      key={index}
                    >
                      <img
                        src={item.img}
                        alt={item.alt}
                        className="h-[2.0625rem] w-[2.0625rem]"
                      />
                      <h2 className="text-nowrap">{item.title}</h2>
                    </div>
                  ))}
                </div>
              </div>
              <AnimatedButton
                handleClick={() => navigate(`/portfolio/details/${obj.id}`)}
              >
                <p>{t("explore_more")}</p>
                <div className="text-lg ml-4">
                  <IoMdArrowRoundForward />
                </div>
              </AnimatedButton>
            </div>
            <div className=" contents max-w-[35.625rem] max-h-[23.0625rem] w-full h-full ">
              <img
                src={obj.cardImage}
                alt=""
                className={`w-[23.875rem] h-[15.4375rem] lg:w-[35.625rem] lg:h-[23.0625rem] rounded-[1.25rem] ${
                  index % 2 === 0 ? "scroll-trigger" : "scroll-trigger-right"
                } ${isTriggered[index] ? "animate" : ""}`}
                ref={(ele) => {
                  triggerRef.current[index] = ele;
                }}
              />
            </div>
          </div>
        ))
      ) : (
        <div>
          <p>NO DATA FOUND</p>
        </div>
      )}
    </div>
  );
}

CompanyCards.propTypes = {
  updatedPortfolioData: PropTypes.array,
};
