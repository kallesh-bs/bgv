/* eslint-disable max-len */
import React from "react";
import AboutUsInfo from "component/publicPage/about/AboutUsInfo";
import Experience from "component/publicPage/about/Experience";
import Mission from "component/publicPage/about/Mission";
import Philosophy from "component/publicPage/about/Philosophy";
import WhatWeDo from "component/publicPage/about/WhatWeDo";
import CtaTemplate from "component/publicPage/home/CtaTemplate";
import LatestInsight from "component/publicPage/home/LatestInsight";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full overflow-x-hidden">
      <div className="w-full aboutUs_bg_img flex items-center justify-center">
        <div className="w-[80%] max-w-[43.813rem] flex flex-col gap-7 text-center">
          <h1 className="font-Raleway text-[#F3F6FD] text-[24px] md:text-[32px] lg:text-[48px] lg:leading-[56px] font-bold">
            {t("aboutheading")}{" "}
            <span className="font-extrabold">{t("sells")}!</span>
          </h1>
        </div>
      </div>
      <AboutUsInfo />
      <Experience />
      <Philosophy />
      <Mission />
      <WhatWeDo />
      <CtaTemplate heading={t("ctaHeading")} />
      <LatestInsight />
    </div>
  );
};

export default About;
