import React from "react";
import { awsURL } from "utils/Constants";
import { allWebPageData } from "../Constants";
import { t } from "i18next";

export default function ServiceTemplate() {
  return (
    <>
      {allWebPageData?.map(
        (obj, index) =>
          window.location.pathname.includes(obj.path) && (
            <div
              key={index}
              className="w-full h-fit flex flex-col justify-center items-center pt-[5rem] pb-0 mb-0 "
            >
              {/* Hero Container Section */}
              <div className="w-full h-full flex lg:flex-row flex-col gap-10 lg:gap-0 items-start justify-between">
                <div
                  className="basis-1/2 w-full h-full lg:pt-[13.78rem] flex
                 flex-col justify-end items-center gap-6 order-2 lg:order-1"
                >
                  {/* Section headings */}
                  <div className="w-full h-full flex flex-col items-center lg:items-start lg:px-24 px-4 gap-1">
                    <h4 className="text-xl text-[#FE872E] font-medium font-Raleway">
                      {t("services")}
                    </h4>
                    <img
                      className="w-fit h-fit"
                      src={`${awsURL}/images/Frame+260.png`}
                      alt="services"
                    />
                  </div>
                  <div
                    className="w-full h-full flex flex-col items-center lg:items-start gap-[12px]
                     font-extrabold lg:px-24 px-4 text-center lg:text-left"
                  >
                    <h1 className="text-[#031B59] text-[38px] sm:text-5xl lg:text-[70px] uppercase leading-[86.5px]
                     font-Raleway">
                      {t(obj.subHeadingPart1)}
                      <span className="text-[#ED6E0F] text-[38px] sm:text-5xl lg:text-[70px]
                       inline-flex leading-[86.5px] font-Raleway">
                        {t(obj.subHeadingPart2)}
                      </span>
                    </h1>
                    <p className="text-base leading-[22px] font-normal text-center lg:text-left">
                      {t(obj.headingPara)}
                    </p>
                  </div>
                </div>
                {/* Section Image */}
                <div className="basis-1/2 w-full h-fit flex items-start justify-end order-1">
                  <img
                    className="w-[38.61285rem] h-[36.875rem]"
                    src={obj.heroImage}
                    alt="hero Image"
                  />
                </div>
              </div>
              {/* Details section */}
              <div
                className="w-full lg:h-[45.563rem] lg:py-[60px] py-[20px] xl:px-[150px] lg:px-20 flex flex-col
                  lg:flex-row justify-center gap-4"
              >
                <div className="w-full min-w-[14rem] h-full flex justify-center items-center order-2 lg:order-1">
                  <div className="w-full min-w-[24rem] h-full gap-10 grid grid-cols-1 sm:grid sm:grid-cols-2 ">
                    {/* 4 image cards */}
                    {obj.data.map((obj) => (
                      <div
                        key={obj.id}
                        className="w-full h-fit even:justify-start
                          flex lg:even:translate-y-16 "
                      >
                        <div
                          className={`w-full h-full flex flex-col items-center ${obj.class}`}
                        >
                          <div
                            className="w-full max-w-[13.938rem] h-[14.375rem] p-[3px]
                            rounded-[20px] background-animate"
                          >
                            <div
                              className="w-full h-full p-4 flex flex-col
                               items-center justify-center bg-white rounded-[18px] gap-7 "
                            >
                              <obj.img />
                              <h5 className="font-bold text-[#031B59] text-center uppercase ">
                                {t(obj.data)}
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Details */}
                <div className="w-full h-full flex flex-col justify-center items-start px-4 gap-4 order-1 lg:order-2">
                  <div className="w-full flex flex-col items-center lg:items-start gap-2">
                    <img
                      className="w-fit h-fit"
                      src={`${awsURL}/images/Frame+260.png`}
                      alt={obj.detailHeading}
                    />
                    <h4 className="lg:text-4xl text-2xl font-bold text-center lg:text-left text-[#031B59] capitalize">
                      {t(obj.detailHeading)}
                    </h4>
                    <p className="w-full text-[#646978] text-justify">
                      {t(obj.detailDescription)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )
      )}
    </>
  );
}
