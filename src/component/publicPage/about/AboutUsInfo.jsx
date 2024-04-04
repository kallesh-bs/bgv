import React from "react";
import { useTranslation } from "react-i18next";
import { awsURL } from "utils/Constants";

const AboutUsInfo = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full flex justify-center lg:pt-[85px] lg:px-[135px] px-[35px] pt-[100px]">
      <div className="w-full h-full flex justify-center items-center gap-14">
        <div className="w-full flex flex-col justify-center items-center">
          <div className="w-full max-w-[528px] flex flex-col justify-center items-center gap-6">
            <p
              className="text-[#031B59] text-[35px] text-center lg:text-left font-medium
              leading-[44px]"
            >
              {t("depOrionIsReputableITSoftwareCompany")}
            </p>
            <p className="text-[#646978] font-[jost] font-normal">
              {t("weAreLeadingSoftwareDevelopmentCompany")}
            </p>
          </div>
        </div>
        <div className="w-full h-full hidden xl:flex">
          <div className="w-full h-fit flex items-center gap-[1.24rem]">
            <img
              className="w-[17.34004rem] h-[30.9643rem] rounded-[28px] shadow-[4px_10px_30px_0px_rgba(0,0,0,0.15)]
                   translate-y-[2.91rem]"
              src={`${awsURL}/images/about_intro_01.webp`}
              alt="about"
            />
            <div className="flex flex-col gap-[1.24rem]">
              <div>
                <img
                  className="w-[17.15425rem] rounded-[28px] shadow-[4px_10px_30px_0px_rgba(0,0,0,0.15)]"
                  src={`${awsURL}/images/about_intro_02.webp`}
                  alt="about"
                  style={{ height: "277px", width: "274px" }}
                />
              </div>
              <div>
                <img
                  className="w-[17.15425rem] rounded-[28px] shadow-[4px_10px_30px_0px_rgba(0,0,0,0.15)]"
                  src={`${awsURL}/images/about_intro_03.webp`}
                  alt="about"
                  style={{ height: "178", width: "274px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsInfo;
