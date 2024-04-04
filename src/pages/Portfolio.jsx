/* eslint-disable max-len */
import React, { useEffect, useState } from "react";
import CompanyCards from "component/publicPage/portfolio/CompanyCards";
import PortfolioFilter from "component/publicPage/portfolio/PortfolioFilter";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { PORTFOLIO } from "component/publicPage/portfolio/Constant";

const Portfolio = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [updatedPortfolioData, setUpdatedPortfolioData] = useState(PORTFOLIO);
  useEffect(() => {
    if (location?.state !== null) {
      const updatedData = PORTFOLIO.filter(
        (obj) => obj.fields.includes(location.state.name) && obj
      );
      setUpdatedPortfolioData(updatedData);
    } else {
      setUpdatedPortfolioData(PORTFOLIO);
    }
  }, [location?.state]);

  return (
    <div className="w-full flex flex-col space-y-[50px] overflow-x-hidden">
      <div className="portfolio_bg_img relative">
        <div className="h-[450px] w-full  flex flex-col justify-center items-center">
          <h1
            className="font-semibold text-[#F9FAFB] w-[80%] max-w-[52rem] lg:text-[40px] text-3xl
             text-center"
          >
            {t("thereAreThree")}
          </h1>
        </div>
        <PortfolioFilter setUpdatedPortfolioData={setUpdatedPortfolioData} />
      </div>
      <CompanyCards updatedPortfolioData={updatedPortfolioData} />
    </div>
  );
};

export default Portfolio;
