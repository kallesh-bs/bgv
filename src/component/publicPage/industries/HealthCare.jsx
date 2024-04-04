/* eslint-disable max-len */
import EdgeTechnology from "component/common/EdgeTechnology";
import IndustryITSevices from "component/common/IndustryITSevices";
import React from "react";
import { useTranslation } from "react-i18next";
import CtaTemplate from "../home/CtaTemplate";
import ContactInfo from "../contactUs/ContactInfo";
import Industry4Cards from "component/common/Industry4Cards";
import Feedback from "../home/Feedback";
import { Helmet } from "react-helmet";
import { awsURL } from "utils/Constants";

function HealthCare() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>
          Healthcare IT Solutions | Deeporion: Enhancing Patient Care
        </title>
        <meta
          name="description"
          content="Enhance patient care with our IT solutions, improving efficiency and outcomes in healthcare."
        />
        <meta
          name="keywords"
          content="Healthcare Website Development Services Company, healthcare website development company, Medical Website Development service, Healthcare Web Development Company"
        />
        <meta name="author" content="Deeporion" />
        <meta
          property="og:title"
          content="Healthcare IT Solutions | Deeporion: Enhancing Patient Care"
        />
        <meta
          property="og:description"
          content="Enhance patient care with our IT solutions, improving efficiency and outcomes in healthcare."
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
          content="Healthcare IT Solutions | Deeporion: Enhancing Patient Care"
        />
        <meta
          name="twitter:description"
          content="Enhance patient care with our IT solutions, improving efficiency and outcomes in healthcare."
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
}

export default HealthCare;
