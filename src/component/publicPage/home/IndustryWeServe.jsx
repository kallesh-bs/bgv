/* eslint-disable max-len */
/* eslint-disable padding-line-between-statements */
import React from "react";
import SectionHeadings from "./SectionHeadings";
import { awsURL } from "utils/Constants";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./style.css";

export default function IndustryWeServe() {
  const { t } = useTranslation();
  return (
    <div
      className="w-full lg:flex flex-col gap-[46px] items-center justify-center px-[38px]
     lg:px-[38px] py-[85px]"
    >
      <SectionHeadings
        headingPart1={t("industry")}
        headingPart2={t("weServe")}
        subHeading={t("industryServeSubheading")}
      />
      {/* Cards */}
      <div className="w-full h-fit flex items-center justify-center">
        <div className="w-fit h-[32.438rem] grid grid-cols-5 gap-[30px]">
          {/* 1st Column */}
          <div className="w-full min-w-[13.125rem] flex flex-col gap-[30px]">
            <div className="group overflow-hidden rounded-[20px] relative perspective origin-center">
              <Link
                to="/industry/auto-mobile"
                rel="canonical"
                className="flip-card-inner bg-auto w-full h-[20.375rem] p-[30px] flex flex-col justify-end gap-5 rounded-[20px]"
              >
                <div className="flip-card-back absolute bottom-8 left-4 flex flex-col gap-5 ">
                  <img
                    className="w-[34px] h-[34px] rounded-[20px]"
                    src={`${awsURL}/images/Logo_Automobile.png`}
                    alt="Automobile Industry"
                  />
                  <Link to="/industry/auto-mobile">
                    <p className="text-white uppercase leading-[26px] font-semibold">
                      {t("autoMobile")}
                    </p>
                  </Link>
                </div>
              </Link>
            </div>
            <div className="group overflow-hidden rounded-[20px] relative perspective origin-center">
              <Link
                to="industry/ngo"
                rel="canonical"
                className="flip-card-inner bg-empty w-full h-[10.188rem] p-[29px] text-white flex flex-col justify-end bg-[#031B59] gap-5 rounded-[20px] transform transition duration-300 ease-in-out hover:scale-125"
              >
                <div className="flip-card-back absolute left-4 bottom-4 flex flex-col gap-5 ">
                  <img
                    className="w-[34px] h-[34px]"
                    src={`${awsURL}/images/NGOIcon.png`}
                    alt="ngo"
                  />
                  <Link to="industry/ngo">
                    <p className="text-white uppercase leading-[26px] font-semibold">
                      {t("ngo")}
                    </p>
                  </Link>
                </div>
              </Link>
            </div>
          </div>
          {/* 2nd Column */}
          <div className="w-full min-w-[13.125rem] flex items-center">
            <div className="group overflow-hidden rounded-[20px] relative perspective origin-center h-[26.813rem]">
              <Link
                to="/industry/education"
                rel="canonical"
                className="flip-card-inner bg-edu w-full h-[26.813rem] min-w-[13.125rem] p-[30px] flex flex-col justify-end gap-5 rounded-[20px]"
              >
                <div className="flip-card-back absolute bottom-12 left-4 flex flex-col gap-5 ">
                  <img
                    className="w-[34px] h-[34px]"
                    src={`${awsURL}/images/Logo_Education.png`}
                    alt="Education"
                  />
                  <Link to="/industry/education">
                    <p className="text-white uppercase leading-[26px] font-semibold">
                      {t("education")}
                    </p>
                  </Link>
                </div>
              </Link>
            </div>
          </div>
          {/* 3rd Column */}
          <div className="w-full min-w-[13.125rem] flex flex-col-reverse gap-[30px]">
            <div className="group overflow-hidden rounded-[20px] relative perspective origin-center">
              <Link
                to="/industry/fashion"
                rel="canonical"
                className="flip-card-inner bg-fashion w-full h-[20.375rem] p-[30px] flex flex-col justify-end gap-5 rounded-[20px]"
              >
                <div className="flip-card-back absolute bottom-8 left-4 flex flex-col gap-5">
                  <img
                    className="w-[34px] h-[34px]"
                    src={`${awsURL}/images/Logo_Fashion.png`}
                    alt="Fashion"
                  />
                  <Link to="/industry/fashion">
                    <p className="text-white uppercase leading-[26px] font-semibold">
                      {t("fashion")}
                    </p>
                  </Link>
                </div>
              </Link>
            </div>
            <div className="group overflow-hidden rounded-[20px] relative perspective origin-center">
              <Link
                to="/industry/hospitality"
                rel="canonical"
                className="flip-card-inner bg-hospitality w-full h-[10.188rem] p-[30px] flex flex-col justify-end gap-5 rounded-[20px] "
              >
                <div className="flip-card-back absolute bottom-8 left-4 flex flex-col gap-5">
                  <img
                    className="w-[34px] h-[34px]"
                    src={`${awsURL}/images/Logo_Hospitiality.png`}
                    alt="Hospitality"
                  />
                  <Link to="/industry/hospitality">
                    <p className="text-white uppercase leading-[26px] font-semibold">
                      {t("hospitality")}
                    </p>
                  </Link>
                </div>
              </Link>
            </div>
          </div>
          {/* 4TH COLUMN */}
          <div className="w-full min-w-[13.125rem] flex items-center">
            <div className="group overflow-hidden rounded-[20px] relative perspective origin-center w-full min-w-[13.125rem]">
              <Link
                to="/industry/real-estate"
                rel="canonical"
                className="flip-card-inner bg-real w-full h-[26.813rem] p-[30px] flex flex-col justify-end gap-5 rounded-[20px] "
              >
                <div className="flip-card-back absolute bottom-8 left-4 flex flex-col gap-5 ">
                  <img
                    className="w-[34px] h-[34px]"
                    src={`${awsURL}/images/Logo_RealState.png`}
                    alt="Real Estate"
                  />
                  <Link to="/industry/real-estate">
                    <p className="text-white uppercase leading-[26px] font-semibold">
                      {t("realEstate")}
                    </p>
                  </Link>
                </div>
              </Link>
            </div>
          </div>
          {/* 5th Column */}
          <div className="w-full min-w-[13.125rem] flex flex-col gap-[30px]">
            <div className="group overflow-hidden rounded-[20px] relative perspective origin-center">
              <Link
                to="/industry/healtcare"
                rel="canonical"
                className="flip-card-inner bg-Health w-full h-[20.375rem] p-[30px] flex flex-col justify-end gap-5 rounded-[20px]"
              >
                <div className="flip-card-back absolute bottom-4 left-4 flex flex-col gap-5 ">
                  <img
                    className="w-[34px] h-[34px]"
                    src={`${awsURL}/images/Logo_HealthCare.png`}
                    alt="Healthcare"
                  />
                  <Link to="/industry/healtcare">
                    <p className="text-white uppercase leading-[26px] font-semibold">
                      {t("healthcare")}
                    </p>
                  </Link>
                </div>
              </Link>
            </div>
            <div className="group overflow-hidden rounded-[20px] relative perspective origin-center">
              <Link
                to="/industry/entertainment"
                rel="canonical"
                className="flip-card-inner bg-empty w-full h-[10.188rem] p-[29px] text-white flex flex-col justify-end bg-[#031B59] gap-5 rounded-[20px]"
              >
                <div className="flip-card-back absolute bottom-4 left-4 flex flex-col gap-5 ">
                  <img
                    className="w-[34px] h-[34px]"
                    src={`${awsURL}/images/EntertainmentIcon.png`}
                    alt="Entertainment"
                  />
                  <Link to="/industry/entertainment">
                    <p className="text-white uppercase leading-[26px] font-semibold">
                      {t("entertainment")}
                    </p>
                  </Link>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
