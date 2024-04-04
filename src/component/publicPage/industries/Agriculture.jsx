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

const Agriculture = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Agriculture Solutions | Deeporion: Tailored Software for Efficiency & Growth</title>
        <meta name="description" content="Boost agriculture efficiency and growth with our custom software solutions, designed to meet industry needs effectively." />
        <meta name="keywords" content="Customer-centric Software Solutions" />
        <meta name="author" content="Deeporion" />
        <meta
          property="og:title"
          content="Agriculture Solutions | Deeporion: Tailored Software for Efficiency & Growth"
        />
        <meta property="og:description" content="Boost agriculture efficiency and growth with our custom software solutions, designed to meet industry needs effectively." />
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
          content="Agriculture Solutions | Deeporion: Tailored Software for Efficiency & Growth"
        />
        <meta name="twitter:description" content="Boost agriculture efficiency and growth with our custom software solutions, designed to meet industry needs effectively." />
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
          heading={"hireSoftwareDevelopersHeading"}
          subHeading={t("hireSoftwareDevelopersSubHeading")}
          bgImg="background-people"
        />
        <Industry4Cards />
        <CtaTemplate heading={"ctaHeading"} />
        <Feedback />
        <ContactInfo />
      </div>
    </>
  );
};

export default Agriculture;
