import React from "react";
import { awsURL } from "utils/Constants";
import SectionHeadings from "../home/SectionHeadings";
import { useTranslation } from "react-i18next";

const Mission = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full h-fit p-8 lg:px-[8.44rem] lg:py-[6.25rem] flex justify-center items-center bg-[#F9FAFB]">
      <div className="w-full h-full flex flex-col gap-5 lg:gap-0 lg:flex-row lg:space-x-14 justify-center items-center">
        <div className="xl:basis-1/3 w-full h-full flex items-center justify-center">
          <img
            className="w-full h-full max-w-[33.75rem] max-h-[21.25rem] rounded-[18px]"
            src={`${awsURL}/images/about_ourMission.webp`}
            alt="Mission"
          />
        </div>
        <SectionHeadings
          headingPart1={t('missionHeading1')}
          headingPart2={t("missionHeading2")}
          subHeading={t("misionSubheading")}
          textAlign="left"
        />
      </div>
    </div>
  );
};

export default Mission;
