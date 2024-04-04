import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { SvgMobileDev, SvgWebApp, SvgWebDesign } from "svgComponents/portfolio";
import { useNavigate } from "react-router";

const PortFolioHeader = ({ handleDropdownOpen }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const portfolioData = [
    {
      key: "mobileApp",
      name: "Mobile Application",
      label: "mobileApp",
      icon: <SvgMobileDev />,
    },
    {
      key: "webApp",
      name: "Web Application",
      label: "webApp",
      icon: <SvgWebApp />,
    },
    {
      key: "websiteDesign",
      name: "Website Design & Development",
      label: "webDsgn",
      icon: <SvgWebDesign />,
    },
  ];

  const hadlePorfolioClick = (obj) => {
    handleDropdownOpen(false, "portfolio");
    navigate("/portfolio", {
      state: {
        key: obj.key,
        label: obj.label,
        name: obj.name,
      },
    });
  };

  return (
    <div
      className="absolute top-0 mt-[40px] left-[-43rem] max-w-[1170px] h-fit max-h-[34.125rem] p-5 flex
            items-start justify-start bg-white rounded-[10px] gap-[30px]
            shadow-[0px_20px_21.4px_0px_rgba(3,27,89,0.10),8px_14px_20px_0px_rgba(3,27,89,0.10)]"
    >
      {/* Left Container */}
      <div className="w-[17.75rem] h-full flex flex-col gap-[10px] bg-[#F9FAFB] p-[0.625rem] rounded-[10px] ">
        <p className="text-[#031B59] text-[1.25rem] font-bold font-Raleway">
          {t("workWeDid")}
        </p>
        <p className="text-[#031B59] text-sm">{t("servicesSubHeading")}</p>
      </div>
      {/* Right Conatiner */}
      <div className="flex justify-between gap-[30px] w-fit">
        <div className="flex flex-col gap-[0.9375rem] pb-[1.25rem]">
          <div className="flex pb-[20px] gap-[15px] self-stretch h-fit">
            {portfolioData.map((obj) => (
              <div
                rel="canonical"
                key={obj.label}
                to={obj.link}
                className="w-[14.75rem] h-[2.5rem] flex justify-start items-start text-gray-800"
              >
                <div
                  className="flex items-center gap-4 dropdown_items"
                  onClick={() => hadlePorfolioClick(obj)}
                >
                  <div className="bg-[#F3F6FD] rounded-[4px] icon_bg w-[0.9375rem] h-[0.875rem]">
                    {obj.icon}
                  </div>
                  <div>
                    <h4 className="icon_label text-[#242529] font-semibold text-[14px] font-Nunito">
                      {`${t(obj.label)}`}
                    </h4>
                    <p className="text-[#646978] font-Nunito text-xs">
                      {t("learnAbtUsers")}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortFolioHeader;

PortFolioHeader.propTypes = {
  handleDropdownOpen: PropTypes.func,
};
