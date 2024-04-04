/* eslint-disable padding-line-between-statements */
import React from "react";
import SectionHeadings from "./SectionHeadings";
import { awsURL } from "utils/Constants";
import { useTranslation } from "react-i18next";

export default function IndustryWeServeMobileView() {
  const { t } = useTranslation();
  return (
    <div
      className="w-full flex flex-col gap-[46px] items-center justify-center px-[38px]
     lg:px-[38px] py-[85px]"
    >
      <SectionHeadings
        headingPart1={t("industry")}
        headingPart2={t("weServe")}
        subHeading={t("industryServeSubheading")}
      />
      <div className="w-full flex flex-col justify-center items-center gap-5">
        {/* 1st row */}
        <div className="w-full h-[8.125rem] flex items-center justify-center gap-5">
          <div className="bg-empty min-w-36 h-full p-[20px] flex flex-col justify-end rounded-[20px]">
            <div className="flex flex-col justify-between">
              <img
                className="w-[20px] h-[20px] mb-[5px]"
                src={`${awsURL}/images/Logo_Hospitiality.png`}
                alt="Hospitality"
              />
              <p className="text-white uppercase leading-[26px] text-[16px] font-semibold">
                {t("hospitality")}
              </p>
            </div>
          </div>
          <div className="bg-autoMob min-w-52 h-full p-[20px] flex flex-col justify-end rounded-[20px]">
            <div className="flex flex-col justify-between">
              <img
                className="w-[20px] h-[20px] mb-[5px]"
                src={`${awsURL}/images/Logo_Automobile.png`}
                alt="Automobile Industry"
              />
              <p className="text-white uppercase leading-[26px] text-[16px] font-semibold">
                {t("autoMobile")}
              </p>
            </div>
          </div>
        </div>
        {/* 2nd row */}
        <div className="w-full flex items-center justify-center gap-5 h-[8.125rem]">
          <div className="bg-eduMob w-[17.200rem] h-full p-[20px] flex flex-col justify-end rounded-[20px]">
            <div className="flex flex-col justify-between">
              <img
                className="w-[20px] h-[20px] mb-[5px]"
                src={`${awsURL}/images/Logo_Education.png`}
                alt="Education"
              />
              <p className="text-white uppercase leading-[26px] text-[16px] font-semibold">
                {t("eductaion")}
              </p>
            </div>
          </div>
        </div>
        {/* 3rd row */}
        <div className="w-full flex items-center justify-center gap-5 max-h-[8.125rem] h-full">
          <div className="bg-fashionMob min-w-52 h-full p-[20px] flex flex-col justify-end rounded-[20px]">
            <div className="flex flex-col justify-between">
              <img
                className="w-[20px] h-[20px] mb-[5px]"
                src={`${awsURL}/images/Logo_Fashion.png`}
                alt="Fashion"
              />
              <p className="text-white uppercase leading-[26px] text-[16px] font-semibold">
                {t("fashion")}
              </p>
            </div>
          </div>
          <div className="bg-empty min-w-36 h-full p-[20px] flex flex-col justify-end rounded-[20px]">
            <div className="flex flex-col justify-between">
              <img
                className="w-[20px] h-[20px] mb-[5px]"
                src={`${awsURL}/images/NGOIcon.png`}
                alt="ngo"
              />
              <p className="text-white uppercase leading-[26px] text-[16px] font-semibold">
                {t("ngo")}
              </p>
            </div>
          </div>
        </div>
        {/* 4th row */}
        <div className="w-full flex items-center justify-center gap-5 h-[8.125rem]">
          <div className="bg-realMob bg-cover w-[17.200rem] h-full p-[20px] flex flex-col justify-end rounded-[20px]">
            <div className="flex flex-col justify-between">
              <img
                className="w-[20px] h-[20px] mb-[5px]"
                src={`${awsURL}/images/Logo_RealState.png`}
                alt="Real Estate"
              />
              <p className="text-white uppercase leading-[26px] text-[16px] font-semibold">
                {t("realEstate")}
              </p>
            </div>
          </div>
        </div>
        {/* 5th row */}

        {/* 6th row */}
        <div className="w-full flex items-center justify-center h-[8.125rem] gap-5">
          <div className="w-fit flex items-center justify-center h-32">
            <div className="bg-empty min-w-36 h-full p-[20px] flex flex-col justify-end rounded-[20px]">
              <div className="flex flex-col justify-between">
                <img
                  className="w-[20px] h-[20px] mb-[5px]"
                  src={`${awsURL}/images/EntertainmentIcon.png`}
                  alt="Entertainment"
                />
                <p className="text-white uppercase leading-[26px] text-[16px] font-semibold">
                  {t("entertainment")}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-HealthMob min-w-52 h-full p-[20px] flex flex-col justify-end rounded-[20px]">
            <div className="flex flex-col justify-between">
              <img
                className="w-[34px] h-[34px]"
                src={`${awsURL}/images/Logo_HealthCare.png`}
                alt="Healthcare"
              />
              <p className="text-white uppercase leading-[26px] text-[16px] font-semibold">
                {t("healthcare")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
