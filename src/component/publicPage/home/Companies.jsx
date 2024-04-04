import React from "react";
import { useTranslation } from "react-i18next";
import SectionHeadings from "./SectionHeadings";
import ImagesMarquee from "./ImagesMarquee";
import { CompanyImage } from "../Constants";

const Companies = () => {
  const { t } = useTranslation();

  return (
    <div
      className="bg-[#F3F6FD] h-fit py-[85px]  px-5 flex flex-col justify-center items-center
   gap-[46px]"
    >
      <SectionHeadings
        headingPart1={t("Companies")}
        headingPart2={t("weWorkWith")}
        subHeading={t("CurrentCompanies")}
      />
      <ImagesMarquee imageUrls={CompanyImage} />
    </div>
  );
};

export default Companies;
