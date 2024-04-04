import SectionHeadings from "component/publicPage/home/SectionHeadings";
import React from "react";
import { useTranslation } from "react-i18next";
import IndustryAutoM from "svgComponents/IndustryAutoM";
import IndustryEducation from "svgComponents/IndustryEducation";
import IndustryEstate from "svgComponents/IndustryEstate";
import IndustryFashion from "svgComponents/IndustryFashion";
import IndustryHealth from "svgComponents/IndustryHealth";

function IndustryWeServe() {
  const { t } = useTranslation();

  return (
    <div
      className="h-fit lg:py-[85px] py-[100px]
    flex flex-col items-center justify-center gap-12"
    >
      <SectionHeadings
        headingPart1="Industries"
        headingPart2="We Serve"
        subHeading="The stories of some of our favourite projects,
           which inspired us to go above and beyond to meet Deeporion-level standards."
      />
      <div className="w-[100vw] overflow-x-auto flex items-center gap-[5rem] px-[4rem]">
        <div className="h-full w-[20vw] gap-y-4 flex justify-center items-center flex-col text-center font-semibold">
          <IndustryEducation />
          <h3 className="font-Raleway">{t("education")}</h3>
        </div>
        <div className="h-full w-[20vw] gap-y-4 flex justify-center items-center flex-col text-center font-semibold">
          <IndustryAutoM />
          <h3 className="font-Raleway">{t("autoMobile")}</h3>
        </div>
        <div className="h-full w-[20vw] gap-y-4 flex justify-center items-center flex-col text-center font-semibold">
          <IndustryFashion />
          <h3 className="font-Raleway">{t("fashion")}</h3>
        </div>
        <div className="h-full w-[20vw] gap-y-4 flex justify-center items-center flex-col text-center font-semibold">
          <IndustryEstate />
          <h3 className="font-Raleway">{t("realEstate")}</h3>
        </div>
        <div className="h-full w-[20vw] gap-y-4 flex flex-col justify-center items-center text-center font-semibold">
          <IndustryHealth />
          <h3 className="font-Raleway">{t("healthcare")}</h3>
        </div>
      </div>
    </div>
  );
}

export default IndustryWeServe;
