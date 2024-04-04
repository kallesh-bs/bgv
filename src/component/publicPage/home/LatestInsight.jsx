/* eslint-disable max-len */
import React, { useEffect, useState, useRef } from "react";
import SectionHeadings from "./SectionHeadings";
import { useTranslation } from "react-i18next";
import { IoMdArrowBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { insightData } from "../Constants";

const LatestInsight = () => {
  const { t } = useTranslation();
  const maxScrollWidth = useRef(window.innerWidth);
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [activeScroll, setScrollActive] = useState(true);
  const carousel = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    let intervalId;
    if (activeScroll) {
      intervalId = setInterval(() => {
        setImageIndex((prevIndex) => (prevIndex + 1) % insightData.length);
      }, 5000);
    } else {
      return () => clearInterval(intervalId); // Clean up the interval on component unmount
    }

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, [activeScroll]);

  useEffect(() => {
    if (imageIndex === insightData.length - 1) {
      setActiveIndex(0);
    } else if (imageIndex !== 0 && imageIndex % 4 === 0) {
      setActiveIndex(activeIndex + 1);
    }
  }, [imageIndex]);

  const handleNextClick = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * activeIndex <=
        maxScrollWidth.current * activeIndex
    ) {
      setActiveIndex((prevState) => prevState + 1);
    }
  };

  const handlePrevClick = () => {
    if (activeIndex > 0) {
      setActiveIndex((prevState) => prevState - 1);
    }
  };

  useEffect(() => {
    if (carousel.current) {
      carousel.current.scrollTo({
        left: activeIndex * carousel.current.offsetWidth,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  const slideStyles = {
    transform: `translateX(-${imageIndex * 100}%)`,
    transition: "transform 1s ease-in-out",
    whiteSpace: "nowrap",
    display: "flex",
  };

  const handleMouseEnter = (id) => {
    setScrollActive(false);
    setImageIndex(id);
  };

  return (
    <div className="sm:flex items-center flex-col pt-[5.12rem] px-[35px] ">
      <div className=" flex items-center justify-center w-full">
        <SectionHeadings
          headingPart1={t("insightsTitle1")}
          headingPart2={t("insightsTitle2")}
          subHeading={t("insightSubtitle")}
        />
      </div>
      <button
        className="relative top-[41rem] left-[37rem] z-50  bg-white rounded-full w-[2.62rem]
         h-[2.62rem] flex justify-center items-center text-[1.5rem] border
         shadow-[0px_20px_21.4px_0px_rgba(3,27,89,0.10),8px_14px_20px_0px_rgba(3,27,89,0.10)]"
      >
        <IoMdArrowForward onClick={() => handleNextClick()} />
      </button>
      <button
        className="relative right-[36rem] top-[35rem] z-50 bg-white rounded-full w-[2.62rem] h-[2.62rem]
         flex justify-center items-center text-[1.5rem] border
         shadow-[0px_20px_21.4px_0px_rgba(3,27,89,0.10),8px_14px_20px_0px_rgba(3,27,89,0.10)]"
      >
        <IoMdArrowBack onClick={() => handlePrevClick()} />
      </button>
      <div className="w-full h-auto max-w-[73.125rem] overflow-hidden flex flex-col justify-center">
        {/* Image div */}
        <div style={slideStyles} className="max-h-[500px] relative">
          {insightData.map((item) => (
            <div
              key={item.id}
              // style={{ backgroundImage: `url(${item.img})` }}
              className="w-full shrink-0 h-[500px] relative "
            >
              <img src={item.img} alt="" className="h-[31.25rem] w-full" />
              <div className="overlay absolute top-0 left-0 bg-black/30 w-full  h-full">
                <div className="absolute top-[11.12rem] left-[4.38rem] flex flex-col gap-5">
                  <div>
                    <p className=" text-white text-[1.875rem] font-bold w-[27rem] text-wrap ">
                      {item.title.length > 100
                        ? `${t(item.title).substring(0, 100)}...`
                        : t(item.title)}
                    </p>
                  </div>
                  <div>
                    <button
                      className="border border-white  py-[0.625rem] px-[1.375rem] rounded-[1.125rem] text-white"
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
        <div
          className=" h-[17rem] relative top-[3.187rem] flex justify-start items-center px-[15px] gap-[2.4rem] overflow-x-auto overflow-y-hidden
           translate-y-[-10rem] no-scroll "
          ref={carousel}
        >
          {insightData.map((item, index) => (
            <div
              key={index}
              className={`background-animate latest_insight p-[2px] bg-white rounded-md insight_hover_bg transition-transform duration-3000 ${
                imageIndex === index && "translate-y-[-2rem]"
              }`}
              onClick={() => {
                setImageIndex(index);
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => {
                setScrollActive(true);
              }}
            >
              <div
                key={item.id}
                className="insight_hover flex flex-col gap-5 bg-[#031B59] text-white w-[16.5rem]
                 h-[12.365rem] rounded-md p-5 hover:bg-white "
              >
                <h3 className="text-lg font-bold">{t(item.title)}</h3>
                <p className="text-base leading-5 font-extralight">
                  {t(item.content).substring(0, 75)}...
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestInsight;
