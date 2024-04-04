import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./portfolio.css";
import { awsURL } from "utils/Constants";

const Portfolio = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full h-fit lg:px-[135px] py-[85px] md:px-[35px] px-5">
      <div className="text-center">
        <span className="font-[jost] text-[40px] font-semibold leading-[44px] text-[#031B59]">
          {t("ourPortfolio")}
        </span>
        <p className="font-[jost] text-[#646978] font-normal my-5">
          The stories of some of our favourite projects, which inspired us to go
          above and beyond to meet Deeporion-level standards.
        </p>
      </div>

      <div className="portfolio-mob-img-container">
        <div className="portfolio-scroll-container">
          <div className="flex justify-center">
            <div>
              <img
                className=""
                src={`${awsURL}/images/Frame+9144.png`}
                alt="frame"
              />
            </div>
            <div>
              <img src={`${awsURL}/images/Frame+9145.png`} alt="frame" />
            </div>
            <div>
              <img src={`${awsURL}/images/Frame+9141.png`} alt="frame" />
            </div>
          </div>
        </div>
        <div className="flex justify-center portfolio-scroll-container portfolio-scroll-containe-margin-left">
          <div>
            <img
              className=""
              src={`${awsURL}/images/Frame+9143.png`}
              alt="frame"
            />
          </div>
          <div>
            <img src={`${awsURL}/images/Frame+9146.png`} alt="frame" />
          </div>
          <div
            className="w-[300px] max-h-[244.678px] flex-col flex justify-center
            items-center bg-[#E3EAFC] rounded-[30px] mt-6"
          >
            <button
              type="button"
              className="btn btn-outline-primary text-[#FE872E] rounded-full bg-white p-3 text-3xl"
            >
              <Link rel="canonical" to="/portfolio">
                <FaArrowRight />
              </Link>
            </button>
            <p className="text-[#FE872E] text-lg font-semibold mt-2">
              {t("viewMore")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
