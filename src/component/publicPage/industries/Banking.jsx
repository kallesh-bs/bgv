/* eslint-disable max-len */
import EdgeTechnology from "component/common/EdgeTechnology";
import React from "react";
import CtaTemplate from "../home/CtaTemplate";
import IndustryITSevices from "component/common/IndustryITSevices";
import ContactInfo from "../contactUs/ContactInfo";
import { useTranslation } from "react-i18next";
import Industry4Cards from "component/common/Industry4Cards";
import Feedback from "../home/Feedback";
import { awsURL } from "utils/Constants";
import { Helmet } from "react-helmet";

const Banking = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>
          Banking Software Solutions | Deeporion: Empowering Financial
          Institutions
        </title>
        <meta
          name="description"
          content="Empower financial institutions with our cutting-edge software solutions, driving efficiency and growth in the digital era."
        />
        <meta name="keywords" content="Customer-centric Software Solutions" />
        <meta name="author" content="Deeporion" />
        <meta
          property="og:title"
          content="Banking Software Solutions | Deeporion: Empowering Financial Institutions"
        />
        <meta
          property="og:description"
          content="Empower financial institutions with our cutting-edge software solutions, driving efficiency and growth in the digital era."
        />
        <meta
          property="og:image"
          content={`${awsURL}/images/deeporion_logo.jpg`}
        />
        <meta
          property="og:url"
          content="https://deeporion.com/services/hr-portal-development"
        />
        <meta
          name="twitter:title"
          content="Banking Software Solutions | Deeporion: Empowering Financial Institutions"
        />
        <meta
          name="twitter:description"
          content="Empower financial institutions with our cutting-edge software solutions, driving efficiency and growth in the digital era."
        />
        <meta
          name="twitter:image"
          content={`${awsURL}/images/deeporion_logo.jpg`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="canonical"
          href="https://deeporion.com/services/hr-portal-development"
        />
      </Helmet>
      <div className="w-full flex flex-col pt-[5rem]">
        <EdgeTechnology />
        <IndustryITSevices />
        <CtaTemplate
          heading={t("hireSoftwareDevelopersHeading")}
          subHeading={t("hireSoftwareDevelopersSubHeading")}
          bgImg="background-people"
        />
        <Industry4Cards />
        <CtaTemplate heading={t("ctaHeading")} />
        <Feedback />
        <ContactInfo />
      </div>
    </>
  );
};

export default Banking;
