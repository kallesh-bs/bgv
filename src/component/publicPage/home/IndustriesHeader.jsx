import React from "react";
import { Link } from "react-router-dom";
import {
  dropdownOptionsIndustiesLast,
  dropdownOptionsIndustiesPrimary,
  dropdownOptionsIndustiesSecond
} from "./Header";
import { awsURL } from "utils/Constants";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

const IndustriesHeader = ({ handleDropdownOpen }) => {
  const { t } = useTranslation();

  return (
    <div
      className="absolute top-0 mt-[40px] left-[-33.6rem] max-w-[1170px] w-[1170px] h-fit max-h-[36.125rem] p-5 flex
            items-start justify-start bg-white rounded-[10px] gap-[30px]
            shadow-[0px_20px_21.4px_0px_rgba(3,27,89,0.10),8px_14px_20px_0px_rgba(3,27,89,0.10)]"
    >
      {/* Left Container */}
      <div
        className="w-[17.75rem] h-full flex flex-col justify-between items-start bg-[#F9FAFB] p-[0.625rem]
          rounded-[10px] gap-[4.08rem]"
      >
        <div className="w-full h-full flex flex-col gap-[10px]">
          <p className="text-[#031B59] text-[1.25rem] font-bold font-Raleway">
            {t("industriesOffer")}
          </p>
          <p className="text-[#031B59] text-sm">{t("industriesSubHeading")}</p>
        </div>
        {/* Image Container */}
        <div className="w-full h-full flex justify-center relative">
          <img
            className="w-full"
            src={`${awsURL}/images/whatwedoimg.png`}
            alt="effective-soluction"
          />
          <div className="absolute left-3 bottom-2 text-[#FFF] ">
            {t("maximizeYour")}
          </div>
        </div>
      </div>
      {/* Right Conatiner */}
      <div className="flex justify-between gap-[30px] w-fit">
        <div className="flex flex-col gap-[0.9375rem] pb-[1.25rem]">
          <div className="flex pb-[20px] flex-col gap-[15px] self-stretch h-fit">
            {dropdownOptionsIndustiesPrimary.map((obj) => (
              <Link
                rel="canonical"
                key={obj.label}
                to={obj.link}
                className="w-[14.75rem] h-[2.5rem] flex justify-strat items-start text-gray-800"
              >
                <div
                  className="flex items-center gap-4 dropdown_items"
                  onClick={() => handleDropdownOpen(false, "industries")}
                >
                  <div className="bg-[#F3F6FD] rounded-[4px] icon_bg w-[0.9375rem] h-[0.875rem]">
                    {obj.icon}
                  </div>
                  <div>
                    <h4 className="icon_label text-[#242529] font-semibold text-sm font-Nunito">
                      {`${t(obj.label)}`}
                    </h4>
                    <p className="text-[#646978] font-Nunito text-[10px]">
                      {`${t(obj.subLabel)}`}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="w-fit flex flex-col gap-[0.9375rem] pb-[1.25rem]">
          <div className="flex pb-[20px] flex-col gap-[15px] self-stretch h-fit">
            {dropdownOptionsIndustiesSecond.map((obj) => (
              <Link
                rel="canonical"
                key={obj.label}
                to={obj.link}
                className="w-[14.75rem] h-[2.5rem] flex justify-start items-start text-gray-800"
              >
                <div
                  className="flex items-center gap-4 dropdown_items"
                  onClick={() => handleDropdownOpen(false, "industries")}
                >
                  <div className="bg-[#F3F6FD] rounded-[4px] icon_bg w-[0.9375rem] h-[0.875rem]">
                    {obj.icon}
                  </div>
                  <div>
                    <h4 className="icon_label text-[#242529] font-semibold text-sm font-Nunito">
                      {`${t(obj.label)}`}
                    </h4>
                    <p className="text-[#646978] font-Nunito text-[10px]">
                      {`${t(obj.subLabel)}`}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="w-fit flex flex-col gap-[0.9375rem] pb-[1.25rem]">
          <div className="flex pb-[20px] flex-col gap-[15px] self-stretch h-fit">
            {dropdownOptionsIndustiesLast.map((obj) => (
              <Link
                rel="canonical"
                key={obj.label}
                to={obj.link}
                className="w-[14.75rem] h-[2.5rem] flex justify-strat items-start text-gray-800"
              >
                <div
                  className="flex items-center gap-4 dropdown_items"
                  onClick={() => handleDropdownOpen(false, "industries")}
                >
                  <div className="bg-[#F3F6FD] rounded-[4px] icon_bg w-[0.9375rem] h-[0.875rem] flex justify-center ">
                    {obj.icon}
                  </div>
                  <div>
                    <h4 className="icon_label text-[#242529] font-semibold text-sm font-Nunito">
                      {`${t(obj.label)}`}
                    </h4>
                    <p className="text-[#646978] font-Nunito text-[10px]">
                      {`${t(obj.subLabel)}`}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustriesHeader;

IndustriesHeader.propTypes = {
  handleDropdownOpen: PropTypes.func,
};
