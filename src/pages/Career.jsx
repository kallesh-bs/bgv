import React from "react";
import Openings from "component/publicPage/career/Openings";
import { useTranslation } from "react-i18next";

const Career = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full overflow-x-hidden">
      <div className="career_bg_image">
        <div className="h-[37.5rem] w-full  flex flex-col justify-center items-center">
          <h1 className="font-semibold text-[#F9FAFB] w-[80%] max-w-[52rem] text-[40px] text-center career-mob-bg-text">
            {t("portfolioImageHeading")}
          </h1>
        </div>
      </div>
      <Openings />
    </div>
  );
};

export default Career;
