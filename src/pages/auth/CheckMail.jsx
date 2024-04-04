import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { awsURL } from "utils/Constants";

export default function CheckMail() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="h-screen lg:w-full w-full items-center px-2 flex xl:gap-8 justify-center font-Roboto">
        <div
          className="lg:basis-2/6 w-full h-full px-4 py-32 space-y-40 flex flex-col
          md:items-start items-center justify-center"
        >
          <div className="flex flex-col space-y-10 h-fit w-full md:w-4/5 lg:w-full">
            <div className="flex flex-col space-y-4">
              <h2 className="text-4xl font-semibold text-[#23275E] tracking-wide">
                {t("checkYourMail")}
              </h2>
              <div className="flex flex-row justify-between w-full text-[#333]">
                <h4>{t("sentPassword")}</h4>
              </div>
            </div>
            <div className="flex flex-col space-y-4 text-[#031B59]">
              <Link to="/forgot">{t("resendMail")}</Link>
              <Link to="/login">{t("backToLogin")}</Link>
            </div>
          </div>
        </div>
        <div className="w-fit h-full py-24 hidden lg:flex items-center text-[#031B59]">
          <img src={`${awsURL}/images/forget.png`} alt="background_image" />
        </div>
      </div>
    </div>
  );
}
