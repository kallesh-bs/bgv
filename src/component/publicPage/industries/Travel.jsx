/* eslint-disable max-len */
import EdgeTechnology from "component/common/EdgeTechnology";
import IndustryITSevices from "component/common/IndustryITSevices";
import React from "react";
import { useTranslation } from "react-i18next";
import CtaTemplate from "../home/CtaTemplate";
import ContactInfo from "../contactUs/ContactInfo";
import Industry4Cards from "component/common/Industry4Cards";
import Feedback from "../home/Feedback";
import { awsURL } from "utils/Constants";
import { Helmet } from "react-helmet";

function Travel() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>
          Travel Technology Solutions | Deeporion: Redefining Travel Experiences
        </title>
        <meta
          name="description"
          content="Redefine travel experiences with our innovative technology solutions, enhancing convenience and satisfaction for travelers."
        />
        <meta name="keywords" content="Customer-centric Software Solutions" />
        <meta name="author" content="Deeporion" />
        <meta
          property="og:title"
          content="Travel Technology Solutions | Deeporion: Redefining Travel Experiences"
        />
        <meta
          property="og:description"
          content="Redefine travel experiences with our innovative technology solutions, enhancing convenience and satisfaction for travelers."
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
          content="Travel Technology Solutions | Deeporion: Redefining Travel Experiences"
        />
        <meta
          name="twitter:description"
          content="Redefine travel experiences with our innovative technology solutions, enhancing convenience and satisfaction for travelers."
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

export default Travel;
