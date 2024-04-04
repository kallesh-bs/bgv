/* eslint-disable max-len */
import EdgeTechnology from "component/common/EdgeTechnology";
import IndustryITSevices from "component/common/IndustryITSevices";
import React from "react";
import CtaTemplate from "../home/CtaTemplate";
import { useTranslation } from "react-i18next";
import ContactInfo from "../contactUs/ContactInfo";
import Industry4Cards from "component/common/Industry4Cards";
import Feedback from "../home/Feedback";
import { awsURL } from "utils/Constants";
import { Helmet } from "react-helmet";

function AutoMobile() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>
          Automotive Software Solutions | Deeporion: Driving Innovation in Auto
          Industry
        </title>
        <meta
          name="description"
          content="Discover innovative software solutions reshaping the automotive landscape, driving efficiency and innovation."
        />
        <meta
          name="keywords"
          content="web application development for automobile, Automotive Mobile App Development Company, Custom App Development for Automobile Industry, Automotive Software Development Company"
        />
        <meta name="author" content="Deeporion" />
        <meta
          property="og:title"
          content="Automotive Software Solutions | Deeporion: Driving Innovation in Auto Industry"
        />
        <meta
          property="og:description"
          content="Discover innovative software solutions reshaping the automotive landscape, driving efficiency and innovation."
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
          content="Automotive Software Solutions | Deeporion: Driving Innovation in Auto Industry"
        />
        <meta
          name="twitter:description"
          content="Discover innovative software solutions reshaping the automotive landscape, driving efficiency and innovation."
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
}

export default AutoMobile;
