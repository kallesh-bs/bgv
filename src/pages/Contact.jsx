import React from "react";
import { useTranslation } from "react-i18next";
import ContactInfo from "component/publicPage/contactUs/ContactInfo";
import CtaTemplate from "component/publicPage/home/CtaTemplate";
import WhatWeDo from "component/publicPage/about/WhatWeDo";
import Feedback from "component/publicPage/home/Feedback";
import FrequentlyAskedQueston from "component/common/FrequentlyAskedQueston";
import Experience from "component/publicPage/about/Experience";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full overflow-x-hidden">
      <div className="contact_bg_image">
        <div className="h-[650px] w-full flex flex-col justify-center items-center">
          <h1
            className="font-semibold text-[#F9FAFB] w-[90%] max-w-[56rem]
          text-[40px] text-center  contact-mob-bg-text"
          >
            {t("contactUsHeroText")}
          </h1>
        </div>
      </div>
      <div>
        <Experience />
        <WhatWeDo />
        <ContactInfo />
        <Feedback />
        <CtaTemplate
          heading={t("hireSoftwareDevelopersHeading")}
          // eslint-disable-next-line max-len
          subHeading={t("hireSoftwareDevelopersSubHeading")}
          bgImg="background-people"
        />
        <FrequentlyAskedQueston />
      </div>
    </div>
  );
};

export default Contact;
