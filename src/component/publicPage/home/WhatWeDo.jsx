import React, { useState } from "react";
import { dropdownOptionsIndusties, dropdownOptionsServices } from "./Header";
import { Link } from "react-router-dom";
import { SlArrowRight } from "react-icons/sl";
import { useTranslation } from "react-i18next";
import { awsURL } from "utils/Constants";
import PropTypes from "prop-types";

export default function WhatWeDo({ handleDropdownOpen }) {
  const [isServices, setIsServices] = useState(false);
  const { t } = useTranslation();

  return (
    <div
      className="absolute top-0 mt-[40px] left-[-23rem] w-[56.75rem] h-fit max-h-[26.125rem] p-5 flex
                items-center justify-center gap-10 bg-white rounded-[10px]
                shadow-[0px_20px_21.4px_0px_rgba(3,27,89,0.10),8px_14px_20px_0px_rgba(3,27,89,0.10)]"
    >
      {/* Left Container having buttons */}
      <div
        className="w-[17.75rem] h-fit p-[10px] flex flex-col justify-start items-center gap-4 bg-[#F9FAFB]
      rounded-[10px]"
      >
        <div className="w-full flex flex-col gap-[10px]">
          <button
            name="Industries"
            className={`w-full p-[15px] flex justify-between items-center m-[2px] border border-[#fff] 
            rounded-lg cursor-pointer ${isServices ? "text-black" : "text-white"} 
            ${isServices ? "bg-white" : "bg-[#031B59]"}`}
            onClick={() => setIsServices(!isServices)}
          >
            {t("industry")}
            <SlArrowRight />
          </button>
          <button
            className={`w-full p-[15px] flex justify-between items-center m-[2px] rounded-lg 
            cursor-pointer ${isServices ? "text-white" : "text-black"} ${
      isServices ? "bg-[#031B59]" : "bg-white"
    }`}
            name="Service"
            onClick={() => setIsServices(!isServices)}
          >
            {t("services")}
            <SlArrowRight />
          </button>
        </div>
        {/* Image Container */}
        <div className="w-full h-fit flex justify-center relative">
          <img
            className="w-full h-[]"
            src={`${awsURL}/images/whatwedoimg.png`}
            alt="effective-soluction"
          />
          <div className="absolute left-3 bottom-2 ">{t("maximizeYour")}</div>
        </div>
      </div>
      {/* Right Conatiner */}
      <div className="w-fit h-fit flex flex-col justify-start gap-4">
        <h6 className="text-[#646978] font-raleway">
          {isServices ? t("service_provide") : t("industry_serve")}
        </h6>
        <div className="w-fit grid grid-cols-2 gap-[1.25rem] self-stretch  ">
          {(isServices
            ? dropdownOptionsServices
            : dropdownOptionsIndusties
          ).map((option) => (
            <Link
              rel="canonical"
              key={option.label}
              to={option.link}
              className="w-[14.75rem] h-[2.5rem] flex justify-strat items-start text-gray-800"
            >
              <div
                className="flex items-center gap-4 dropdown_items"
                onClick={() => handleDropdownOpen(false)}
              >
                <div className="bg-[#F3F6FD] p-2 rounded-[4px] icon_bg">
                  <span>{option.icon}</span>
                </div>
                <div>
                  <h4 className="icon_label text-[#242529] font-semibold text-sm font-Nunito">
                    {t(option.label)}
                  </h4>
                  <p className="text-[#646978] font-Nunito text-xs">
                    {t("learnAbtUsers")}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

WhatWeDo.propTypes = {
  handleDropdownOpen: PropTypes.func,
};
