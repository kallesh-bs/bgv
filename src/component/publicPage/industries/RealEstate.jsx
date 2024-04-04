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

function RealEstate() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>
          Real Estate Software | Deeporion: Innovating Property Management
        </title>
        <meta
          name="description"
          content="Revolutionize property management with our innovative real estate software, optimizing processes and maximizing returns for stakeholders."
        />
        <meta
          name="keywords"
          content="Real Estate Website Development Services, Real Estate Web Design Company, Real Estate Mobile App development, real estate web development company"
        />
        <meta name="author" content="Deeporion" />
        <meta
          property="og:title"
          content="Real Estate Software | Deeporion: Innovating Property Management"
        />
        <meta
          property="og:description"
          content="Revolutionize property management with our innovative real estate software, optimizing processes and maximizing returns for stakeholders."
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
          content="Real Estate Software | Deeporion: Innovating Property Management"
        />
        <meta
          name="twitter:description"
          content="Revolutionize property management with our innovative real estate software, optimizing processes and maximizing returns for stakeholders."
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

export default RealEstate;
