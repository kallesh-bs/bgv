import ExploreTech from "component/publicPage/Insights/ExploreTech";
import LatestInsights from "component/publicPage/Insights/LatestInsights";
import ContactInfo from "component/publicPage/contactUs/ContactInfo";
import React from "react";
import { useTranslation } from "react-i18next";

function Insights() {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <div className="w-full insight_bg_img flex items-center ">
        <div className="h-fit w-full flex flex-col justify-center items-center">
          <h1
            className="font-bold text-[#F9FAFB] w-[80%] max-w-[68rem] text-[3rem]
          text-center about-bg-text leading-[3.5rem]"
          >
            {t("weAreYour")}
          </h1>
          <p className="text-white mt-[1.75rem]">
            Loreum ipsum dolor sit amet it consectutor...
          </p>
        </div>
      </div>
      <LatestInsights />
      <ExploreTech />
      <ContactInfo />
    </div>
  );
}

export default Insights;
