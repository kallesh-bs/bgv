import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { t } from "i18next";

export default function CtaTemplate({ heading, subHeading, bgImg = "" }) {
  return (
    <div className="sm:w-full">
      <div
        className={`${
          bgImg === "" ? "background-polka bg-[#031B59]" : "background-people"} w-full h-fit py-[73px]
           min-h-[22.5rem] lg:py-[100px]  flex flex-col items-center justify-center text-white gap-6 p-1`}
      >
        <h4
          className="max-w-[50.75rem] w-full text-2xl leading-[32px] -tracking-[0.12px] md;text-4xl font-bold
      lg:leading-[44px] text-center"
        >
          {t(heading)}
        </h4>
        <p className={`${subHeading === "" ? "hidden" : "block"} text-center`}>
          {subHeading}
        </p>
        <div className="max-w-[50.75rem] w-full flex flex-wrap items-center justify-center gap-6">
          <Link
            rel="canonical"
            to="https://calendly.com/deeporion_bde"
            target="_blank"
          >
            <button className="w-[14.5rem] lg:w-[11.5rem] h-[3.375rem] border border-white text-lg rounded-[18px]">
              {t("scheduleCall")}
            </button>
          </Link>
          <Link rel="canonical" to="/hire-us">
            <button className="w-[14.5rem] h-[3.375rem] bg-[#FF7914] lg:text-lg text-base rounded-[18px]">
              {t("hireDeveloPers")}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

CtaTemplate.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string,
  bgImg: PropTypes.string,
};
