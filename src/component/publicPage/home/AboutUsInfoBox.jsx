import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { awsURL } from "utils/Constants";
import AnimatedButton from "component/common/AnimatedButton";

const AboutUsInfoBox = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="w-full flex justify-center lg:px-[135px] py-[85px] md:px-[35px] px-5">
      <div className="w-full flex justify-evenly">
        {/* Heading section */}
        <div className="w-full flex flex-col items-center gap-[14px]">
          <div className="w-full max-w-[528px] flex flex-col gap-[14px] font-Raleway text-center lg:text-left">
            <p className="text-[#FE872E] leading-[28px] font-medium text-xl">
              {t("aboutUs")}
            </p>
            <p className=" text-[#031B59] text-2xl lg:text-[30px] font-bold tracking-[-0.15px] lg:leading-[44px]">
              {t("softwareDevelopmentCompany")}
            </p>
          </div>
          <div
            className="w-full max-w-[539px] pt-1 flex flex-col text-center lg:text-left
           items-center lg:items-start gap-[31px]"
          >
            <p className="text-[#646978] leading-[22px]">
              {t("web&MobileSolution")}
            </p>
            {/* Project completed card */}
            <div className="w-full flex gap-2 justify-center">
              <div
                className="w-full mx-w-[13.313rem] bg-white p-7 rounded-2xl flex flex-col justify-center
               items-center gap-5 mr-6 shadow-[4px_10px_30px_0px_rgba(0,0,0,0.06)]"
              >
                <div>
                  <span className="text-[40px] text-[#FE872E] font-[jost] font-medium">
                    47+
                  </span>
                </div>
                <div>
                  <p className="text-[#646978] font-[jost] font-medium home-about-mob-text">
                    {t("projectCompleted")}
                  </p>
                </div>
              </div>
              <div
                className="w-full bg-white p-7 rounded-2xl flex flex-col justify-center items-center gap-5
              shadow-[4px_10px_30px_0px_rgba(0,0,0,0.06)]"
              >
                <div>
                  <span className="text-[40px] text-[#FE872E] font-[jost] font-medium">
                    39+
                  </span>
                </div>
                <div>
                  <p className="text-[#646978] font-[jost] font-medium home-about-mob-text">
                    {t("satisfiedClients")}
                  </p>
                </div>
              </div>
            </div>
            {/* View More Button */}
            <AnimatedButton handleClick={() => navigate("/about")}>
              <p>{t("viewMore")}</p>
              <div className="text-lg ml-4">
                <FaArrowRight />
              </div>
            </AnimatedButton>
          </div>
        </div>
        <div className="w-full hidden lg:flex">
          <div className="w-full h-fit flex items-center gap-[1.24rem]">
            <img
              className="w-[17.34004rem] h-[30.9643rem] rounded-[28px] shadow-[4px_10px_30px_0px_rgba(0,0,0,0.15)]
               translate-y-[2.91rem]"
              src={`${awsURL}/images/home_about_01.webp`}
              alt="frame"
            />
            <div className="w-full h-fit flex flex-col justify-beetween gap-[1.24rem]">
              <img
                className="w-[17.154254rem] rounded-[28px] shadow-[4px_10px_30px_0px_rgba(0,0,0,0.15)]"
                src={`${awsURL}/images/home_about_02.webp`}
                alt="frame"
              />
              <img
                className="w-[17.15425rem] rounded-[28px] shadow-[4px_10px_30px_0px_rgba(0,0,0,0.15)]"
                src={`${awsURL}/images/home_about_03.webp`}
                alt="frame"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsInfoBox;
