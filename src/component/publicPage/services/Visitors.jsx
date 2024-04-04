import React from "react";
import SectionHeadings from "../home/SectionHeadings";
import { awsURL } from "utils/Constants";
import "styles/App.css";
import { useTranslation } from "react-i18next";

const Visitors = () => {
  const { t } = useTranslation();

  return (
    <>
      <div
        className="bg-[#F3F6FD] w-full h-full lg:p-[80px_135px] p-[10px] items-center
         gap-[63px] flex flex-start flex-col
      flex-wrap"
      >
        <div className="w-full flex flex-col items-center text-center gap-[18px]">
          <SectionHeadings
            headingPart1={`${t("VisitorsHeading1")}`}
            headingPart2={`${t("VisitorsHeading2")}`}
            subHeading={`${t("VisitorsSubHeading")}`}
          />
        </div>
        <div className="flex items-center justify-center">
          <img src={`${awsURL}/images/ConvertCustomers.png`} alt="Mission" />
        </div>
      </div>
    </>
  );
};

export default Visitors;
