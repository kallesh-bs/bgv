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

const Wellness = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Wellness Software Solutions | Deeporion: Promoting Health and Well-being</title>
        <meta name="description" content="Promote health and well-being with our wellness software solutions, empowering individuals and organizations to prioritize wellness." />
        <meta name="keywords" content="Customer-centric Software Solutions" />
        <meta name="author" content="Deeporion" />
        <meta
          property="og:title"
          content="Wellness Software Solutions | Deeporion: Promoting Health and Well-being"
        />
        <meta property="og:description" content="Promote health and well-being with our wellness software solutions, empowering individuals and organizations to prioritize wellness." />
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
          content="Wellness Software Solutions | Deeporion: Promoting Health and Well-being"
        />
        <meta name="twitter:description" content="Promote health and well-being with our wellness software solutions, empowering individuals and organizations to prioritize wellness." />
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

export default Wellness;
