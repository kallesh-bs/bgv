import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { FaStar } from "react-icons/fa6";
import { PORTFOLIO } from "./Constant";
import ServiceRecentWork from "component/common/ServiceRecentWork";
import { useTranslation } from "react-i18next";

export default function PortfolioDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const ratingArr = [1, 2, 3, 4, 5];
  const [imgIndex, setImgIndex] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      const requiredData = PORTFOLIO.filter((obj) => obj.id === Number(id));
      if (Number(imgIndex) === Number(requiredData[0].snippets.length - 1)) {
        setImgIndex(0);
      } else {
        setImgIndex((prevState) => prevState + 1);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [id, imgIndex]);

  return PORTFOLIO.map(
    (obj, index) =>
      obj.id === Number(id) && (
        <div className="w-full h-fit bg-" key={index}>
          <div
            className="w-full h-[69.675rem] flex flex-col background-color-gradient sm:px-[131px]
                 py-[30px] space-y-8"
          >
            {/* Portfolio Page Return Button  */}
            <button className="w-[30px] h-[30px] flex justify-center items-center mt-[4rem]">
              <HiArrowNarrowLeft
                className="stroke-[#031B59] h-[30px] w-[30px]"
                onClick={() => navigate(-1)}
              />
            </button>
            {/* Company Details Div */}
            <div className="w-full h-fit flex flex-col items-center gap-6">
              <div className="w-full max-w-[51.563] flex flex-col gap-[30px] items-center">
                <img
                  className=" h-[45px]"
                  src={obj.companyLogo}
                  alt="company logo"
                />
                <h3 className="text-5xl text-[#031B59] font-bold">
                  {obj.companyTitle}
                </h3>
                <p className="text-[#2B2B2B] leading-[22px] text-center ">
                  {obj.companyDetails}
                </p>
                <p className="text-sm text-[#2B2B2B]">{obj.startMonth}</p>
              </div>
              <a
                className="w-[11.5rem] h-[3.375rem] flex items-center justify-center rounded-[18px]
                  space-x-4 bg-[#031B59] text-white"
                href={obj.projectLink}
                target="_blank"
                rel="noreferrer"
              >
                <p>{t("explore")}</p>{" "}
                <HiArrowNarrowLeft className="stroke-white h-[13px] w-[15px] rotate-180" />
              </a>

              {/* Image Carousel/ Three Images */}
              <div
                className="w-fit h-[28.938rem] mt-14 flex items-center justify-center space-x-[30px]
                   rounded-lg"
              >
                {obj.snippets.map(
                  (img, index) =>
                    index === imgIndex && (
                      <img
                        key={index}
                        className="w-fit h-[28.938rem] rounded-lg"
                        src={img.img}
                        alt={img.alt}
                      />
                    )
                )}
              </div>
              <div className="w-fit space-x-4 mb-4">
                {obj.snippets.map((img, index) => (
                  <button
                    className={`w-3 h-3 rounded-full ${
                      index === imgIndex ? "bg-[#031B59]" : "bg-[#DEDEDE]"
                    }`}
                    key={index}
                    onClick={() => setImgIndex(index)}
                  ></button>
                ))}
              </div>
            </div>
          </div>
          {/* What we Did section */}
          <div
            className=" background-square-pattern w-full h-[37rem] py-[82px] sm:px-[132px] flex flex-col items-center
                justify-items-center gap-10"
          >
            <h3 className="text-4xl text-[#031B59] font-bold">
              {t("whatWeDid")}
            </h3>
            <div className="max-w-[73.188rem] text-center flex flex-col gap-[30px]">
              <h4 className="text-lg text-[#FF7914] font-semibold underline">
                {t("whatWeDid")}
              </h4>
              <p>{obj.caseStudy}</p>
            </div>
            <div className="max-w-[73.188rem] text-center flex flex-col justify-center items-center gap-[30px]">
              <h4 className="text-lg text-[#FF7914] font-semibold underline capitalize">
                {t("TechUsed")}
              </h4>
              <div className="w-fit h-fit flex justify-center items-center space-x-6">
                {obj.techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="w-[6.5rem] h-[6.5rem] bg-[#fff] flex
                      flex-col items-center justify-center rounded-[10px]
            px-[0px] py-[12px] shadow-[0px_0px_25px_0px_rgba(3,27,89,0.20),0px_-2px_2px_0px_#031B59_inset]
             gap-[10px] "
                  >
                    <img
                      className="w-[48px] h-[48px]"
                      src={tech.img}
                      alt={tech.title}
                    />
                    <p>{tech.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Carousel Image Section */}
          {obj.reviews.length > 0 &&
            obj.reviews.map((review, index) => (
              <div
                key={index}
                className="background-review-gradient max-w-[51.563]
                 w-full h-[29.625rem] py-[82px] px-[132px] flex flex-col
                  items-center gap-11"
              >
                <h3 className="text-4xl font-bold text-[#031B59]">
                  {t("clientSay")}
                </h3>
                <div
                  className="w-full h-full p-[30px] flex flex-col
                items-center justify-center gap-4 bg-white rounded-[14px]"
                >
                  <h4 className="text-2xl text-[#FF7914] font-bold text-center">
                    {review.clientName}
                  </h4>
                  <div className="w-fit h-fit flex">
                    {ratingArr.map((rate, index) =>
                      index < review.rating ? (
                        <FaStar key={index} className="fill-[#FFC700]" />
                      ) : (
                        <FaStar key={index} className="fill-[#A1A1A180]" />
                      )
                    )}
                  </div>
                  <p className="text-[#646978] text-center ">
                    {review.description}
                  </p>
                </div>
              </div>
            ))}
          <ServiceRecentWork />
        </div>
      )
  );
}
