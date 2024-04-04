import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import IndustryContent from "utils/constant/IndustryContent";

const EdgeTechnology = () => {
  const { t } = useTranslation();

  return (
    <div
      className="w-full  h-fit flex flex-col lg:flex-row justify-center items-center gap-[24px] lg:py-[85px]
     lg:px-[35px] px-[35px] py-[50px]"
    >
      {/* Left Component */}
      <div className="w-fit flex order-2 lg:order-1">
        {IndustryContent.map(
          (obj, index) =>
            window.location.pathname.includes(obj.path) && (
              <div
                key={index}
                className="w-[624px] h-fit flex flex-col items-start gap-[24px] text-center lg:text-left
                 justify-center px-[150px] sm:p-[4px]"
              >
                <div className="bg-[#F3F6FD] rounded-[10px] h-fit p-[14px_24px]">
                  <span className="text-[#031B59] text-lg text-center">
                    {" "}
                    {`${t(obj.quote)}`}
                  </span>
                </div>
                <h1
                  className="lg:text-5xl font-bold text-3xl
                  leading-[44px] -tracking-[0.36px] text-[#031B59]"
                >
                  {`${t(obj.heading)}`}
                  <span className="text-[#ED6E0F]">
                    {" "}
                    {`${t(obj.heading2)}`}
                  </span>
                </h1>
                <p className="text-[#646978]"> {`${t(obj.subHeading)}`}</p>
                <div
                  className="w-full flex gap-[24px] items-center justify-center flex-col sm:flex-row
                 lg:justify-start"
                >
                  <div
                    className="w-[232px] border border-[#ED6E0F] p-[14px_29px] rounded-[10px] flex
                  justify-center cursor-pointer"
                  >
                    <Link
                      rel="canonical"
                      to="https://calendly.com/deeporion_bde"
                      target="_blank"
                    >
                      <span className="text-lg text-[#ED6E0F]">
                        {t("scheduleCall")}
                      </span>
                    </Link>
                  </div>
                  <div
                    className="bg-[#031B59] rounded-[10px] shadow-[0px_8px_16px_0px_rgba(3,27,89,0.20)_inset]
                    p-[14px_29px] cursor-pointer"
                  >
                    <Link to="/hire-us" rel="canonical">
                      <span className="text-lg text-[#FFF]">
                        {t("hireDevelopers")}
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
      {/* Rigth Image Component */}
      <div className="w-fit h-full flex order-1 lg:order-2">
        {IndustryContent.map((obj, index) => (
          <div
            key={index}
            className="flex rounded-[10px] gap-[10px] justify-center"
          >
            {obj.data.map(
              (item, itemIndex) =>
                window.location.pathname.includes(obj.path) && (
                  <div
                    key={itemIndex}
                    className="w-full max-w-[23.875rem] lg:max-w-[32.5rem] flex flex-col gap-[10px] justify-center"
                  >
                    <img
                      src={item.img}
                      className="w-full rounded-[13.349px]"
                      alt="Industry1"
                    />
                    <div className="w-full flex gap-2">
                      <img
                        src={item.img2}
                        className="w-full max-h-[9.375rem] lg:max-h-[11.375rem] rounded-[13.349px]"
                        alt="Industry2"
                      />
                      <img
                        src={item.img3}
                        className="w-full max-h-[9.375rem] lg:max-h-[11.375rem] rounded-[13.349px]"
                        alt="Industry3"
                      />
                    </div>
                  </div>
                )
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EdgeTechnology;
