/* eslint-disable no-undef */
import React from "react";
import { useTranslation } from "react-i18next";
import SectionHeadings from "./SectionHeadings";
import { awsURL } from "utils/Constants";

const EffectiveSolution = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full items-center py-20 hidden xl:flex flex-col gap-12 effective_soluction_wrapper">
      <div className="w-full flex items-center justify-center">
        <SectionHeadings
          headingPart1={t("Challenges")}
          headingPart2={t("effectiveSoluction")}
          subHeading={t("expertise")}
        />
      </div>
      <div className="w-full flex justify-center relative">
        <img className="max-h-[32rem]" src={`${awsURL}/images/home_effectiveSolution.webp`} alt="effective-soluction" />
      </div>
    </div>
  );
};

export default EffectiveSolution;
