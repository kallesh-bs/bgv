import React from "react";
import { serviceLast, servicePrimary, serviceSecondary } from "./Header";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { awsURL } from "utils/Constants";
import PropTypes from "prop-types";

export default function ServiceHeader({ handleDropdownOpen }) {
  const { t } = useTranslation();

  return (
    <div
      className="absolute top-0 mt-[40px] left-[-25rem] max-w-[1170px] w-[1170px] h-fit max-h-[36.125rem] p-5 flex
                items-start justify-start bg-white rounded-[10px] gap-[30px]
                shadow-[0px_20px_21.4px_0px_rgba(3,27,89,0.10),8px_14px_20px_0px_rgba(3,27,89,0.10)]"
    >
      {/* Left Container */}
      <div
        className="w-[17.75rem] h-full flex flex-col justify-between items-start bg-[#F9FAFB] p-[0.625rem]
      rounded-[10px] gap-[6.08rem]"
      >
        <div className="w-full h-full flex flex-col gap-[10px]">
          <p className="text-[#031B59] text-[1.25rem] font-bold font-Raleway">
            {t("servicesOffer")}
          </p>
          <p className="text-[#031B59] text-sm">{t("servicesSubHeading")}</p>
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
            {servicePrimary.map((obj, index) => (
              <React.Fragment key={index}>
                <p className="text-[#031B59] font-Raleway text-[1rem] font-bold">
                  {t(obj.mainHeading)}
                </p>
                {obj?.data?.map((arr) => (
                  <Link
                    rel="canonical"
                    key={arr.label}
                    to={arr?.link}
                    className="w-[14.75rem] h-[2.5rem] flex justify-start items-start text-gray-800"
                  >
                    <div
                      className="flex items-center gap-4 dropdown_items"
                      onClick={() => handleDropdownOpen(false, "services")}
                    >
                      <div className="bg-[#F3F6FD] rounded-[4px] icon_bg w-[0.9375rem] h-[0.875rem]">
                        <arr.icon />
                      </div>
                      <div>
                        <h4 className="icon_label text-[#242529] font-semibold text-sm font-Nunito">
                          {`${t(arr.label)}`}
                        </h4>
                        <p className="text-[#646978] font-Nunito text-xs">
                          {`${t(arr.subLabel)}`}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="w-fit flex flex-col gap-[0.9375rem] pb-[1.25rem]">
          <div className="flex pb-[20px] flex-col gap-[15px] self-stretch h-fit">
            {serviceSecondary.map((obj, index) => (
              <React.Fragment key={index}>
                <p className="text-[#031B59] font-Raleway text-[1rem] font-bold">
                  {t(obj.mainHeading)}
                </p>
                {obj.data.map((arr, index) => {
                  return (
                    <Link
                      rel="canonical"
                      key={index}
                      to={arr.link}
                      className="w-[14.75rem] h-[2.5rem] flex justify-start items-start text-gray-800"
                    >
                      <div
                        className="flex items-center gap-4 dropdown_items"
                        onClick={() => {
                          handleDropdownOpen(false, "services");
                        }}
                      >
                        <div className="bg-[#F3F6FD] rounded-[4px] icon_bg w-[0.9375rem] h-[0.875rem]">
                          <arr.icon />
                        </div>
                        <div>
                          <h4 className="icon_label text-[#242529] font-semibold text-sm font-Nunito">
                            {`${t(arr.label)}`}
                          </h4>
                          <p className="text-[#646978] font-Nunito text-xs">
                            {`${t(arr.subLabel)}`}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="w-fit flex flex-col gap-[0.9375rem] pb-[1.25rem]">
          <div className="flex pb-[20px] flex-col gap-[15px] self-stretch h-fit">
            {serviceLast.map((obj, index) => (
              <React.Fragment key={index}>
                <p className="text-[#031B59] font-Raleway text-[1rem] font-bold">
                  {t(obj.mainHeading)}
                </p>
                {obj.data.map((arr, index) => {
                  return (
                    <Link
                      rel="canonical"
                      key={index}
                      to={arr.link}
                      className="w-[14.75rem] h-[2.5rem] flex justify-start items-start text-gray-800"
                    >
                      <div
                        className="flex items-center gap-4 dropdown_items"
                        onClick={() => {
                          handleDropdownOpen(false, "services");
                        }}
                      >
                        <div className="bg-[#F3F6FD] rounded-[4px] icon_bg w-[0.9375rem] h-[0.875rem]">
                          <arr.icon />
                        </div>
                        <div>
                          <h4 className="icon_label text-[#242529] font-semibold text-sm font-Nunito">
                            {`${t(arr.label)}`}
                          </h4>
                          <p className="text-[#646978] font-Nunito text-xs">
                            {`${t(arr.subLabel)}`}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

ServiceHeader.propTypes = {
  handleDropdownOpen: PropTypes.func,
};
