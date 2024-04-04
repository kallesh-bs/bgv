/* eslint-disable max-len */
import React from "react";
import SectionHeadings from "./SectionHeadings";
import { useTranslation } from "react-i18next";
import { awsURL } from "utils/Constants";
import { GoArrowRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import AnimatedButton from "component/common/AnimatedButton";

const VettingProcess = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="w-full hidden lg:flex flex-col gap-[46px] lg:py-[85px] lg:px-[135px] px-[35px] py-[100px] bg-[#F3f6fd]">
      {/* Headings */}
      <div className="flex justify-center items-center flex-col gap-[2.88rem]">
        <SectionHeadings
          headingPart1={t("Deeporion")}
          headingPart2={t("vettingProcess")}
          subHeading={t("significantBenefits")}
        />
        <div>
          <img className="max-h-[40.125rem]" src={`${awsURL}/images/home_Vetting_process.webp`} alt="" />
        </div>
        <p className="text-[#031B59] font-bold text-2xl">
          <span className="text-[#ED6E0F]">{t("only1.2")}</span>{" "}
          {t("seniorDeveloper")}
        </p>
        <div>
          <AnimatedButton handleClick={() => navigate("/hire-us")}>
            <p>{t("hireNow")}</p>
            <div className="text-lg ml-4">
              <GoArrowRight />
            </div>
          </AnimatedButton>
        </div>
      </div>
    </div>
  );
};

export default VettingProcess;
