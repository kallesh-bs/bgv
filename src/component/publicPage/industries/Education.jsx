/* eslint-disable max-len */
import EdgeTechnology from "component/common/EdgeTechnology";
import IndustryITSevices from "component/common/IndustryITSevices";
import React from "react";
import CtaTemplate from "../home/CtaTemplate";
import { useTranslation } from "react-i18next";
import ContactInfo from "../contactUs/ContactInfo";
import Industry4Cards from "component/common/Industry4Cards";
import Feedback from "../home/Feedback";
import { Helmet } from "react-helmet";
import { awsURL } from "utils/Constants";

function Education() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>
          Education Technology Solutions | Deeporion: Transforming Learning
          Experiences
        </title>
        <meta
          name="description"
          content="Transform learning experiences with our tech solutions, driving engagement and effectiveness in education."
        />
        <meta
          name="keywords"
          content="education app development company, education mobile app development, Education App Development Service, Education Mobile App Development Company"
        />
        <meta name="author" content="Deeporion" />
        <meta
          property="og:title"
          content="Education Technology Solutions | Deeporion: Transforming Learning Experiences"
        />
        <meta
          property="og:description"
          content="Transform learning experiences with our tech solutions, driving engagement and effectiveness in education."
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
          content="Education Technology Solutions | Deeporion: Transforming Learning Experiences"
        />
        <meta
          name="twitter:description"
          content="Transform learning experiences with our tech solutions, driving engagement and effectiveness in education."
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

export default Education;
