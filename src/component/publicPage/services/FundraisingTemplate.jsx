import React from "react";
import { useTranslation } from "react-i18next";
import Fundraising from "utils/constant/Fundraising";

const FundraisingTemplate = () => {
  const { t } = useTranslation();

  return (
    <>
      {Fundraising.map(
        (obj, index) =>
          window.location.pathname.includes(obj.path) && (
            <div
              key={index}
              className="bg-[#F3F6FD] w-full h-fit px-[35px] lg:px-[80px] py-[135px]
         gap-[63px] flex items-center flex-col flex-wrap"
            >
              <div className="w-full flex flex-col items-center text-center gap-[18px]">
                <h4
                  className="font-Raleway text-2xl lg:text-[36px] font-bold leading-[44px] -tracking-[0.36px]
             text-[#031B59]"
                >
                  {`${t(obj.heading)}`}
                  <span className="text-[#ED6E0F]">{t("withUs")}</span>
                </h4>
                <p className="text-[#646978] max-w-[72.75rem] leading-[22px]">
                  {t("fundraisingBrief")}
                </p>
              </div>
              <div className="flex flex-wrap gap-[65px_45px] justify-around">
                {obj.data.map((item) => (
                  <div
                    key={item.id}
                    className="w-full max-w-[358px] min-h-[288px] bg-[#FFF]
               shadow-[4px_10px_30px_0px_rgba(0,0,0,0.03)] p-[60px_20px_20px_20px] flex flex-col gap-[20px]
                items-start relative"
                  >
                    <div
                      className="bg-[#031B59] w-[70px] h-[70px] absolute top-[-31px] flex justify-center items-center
                 rounded-[5px]"
                    >
                      {item.img}
                    </div>
                    <p className="text-[#ED6E0F] text-xl font-semibold">
                      {t(item.title)}
                    </p>
                    <p className="text-[#646978] text-base">{t(item.brief)}</p>
                  </div>
                ))}
              </div>
            </div>
          )
      )}
    </>
  );
};

export default FundraisingTemplate;
