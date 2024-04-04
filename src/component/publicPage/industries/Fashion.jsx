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

function Fashion() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>
          Fashion Industry Solutions | Deeporion: Elevating Fashion Technology
        </title>
        <meta
          name="description"
          content="Elevate fashion technology with our innovative solutions, driving efficiency and creativity in the industry."
        />
        <meta
          name="keywords"
          content="Fashion ecommerce mobile app development, Fashion Web Design For Ecommerce, Fashion Web Design For Ecommerce, Fashion Web Design For Ecommerce"
        />
        <meta name="author" content="Deeporion" />
        <meta
          property="og:title"
          content="Fashion Industry Solutions | Deeporion: Elevating Fashion Technology"
        />
        <meta
          property="og:description"
          content="Elevate fashion technology with our innovative solutions, driving efficiency and creativity in the industry."
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
          content="Fashion Industry Solutions | Deeporion: Elevating Fashion Technology"
        />
        <meta
          name="twitter:description"
          content="Elevate fashion technology with our innovative solutions, driving efficiency and creativity in the industry."
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

export default Fashion;
