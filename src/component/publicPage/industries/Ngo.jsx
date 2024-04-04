/* eslint-disable max-len */
import EdgeTechnology from "component/common/EdgeTechnology";
import React from "react";
import CtaTemplate from "../home/CtaTemplate";
import { useTranslation } from "react-i18next";
import ContactInfo from "../contactUs/ContactInfo";
import Industry4Cards from "component/common/Industry4Cards";
import IndustryITSevices from "component/common/IndustryITSevices";
import Feedback from "../home/Feedback";
import { awsURL } from "utils/Constants";
import { Helmet } from "react-helmet";

function Ngo() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>
          NGO Software Solutions | Deeporion: Empowering Nonprofits for Change
        </title>
        <meta
          name="description"
          content="Empower nonprofits for change with our tailored software solutions, driving impact and efficiency."
        />
        <meta
          name="keywords"
          content="Website Development for NGOs, Non Profit Website Development Services, Non Profit Organization App Development Company, NGO Website Design Service"
        />
        <meta name="author" content="Deeporion" />
        <meta
          property="og:title"
          content="NGO Software Solutions | Deeporion: Empowering Nonprofits for Change"
        />
        <meta
          property="og:description"
          content="Empower nonprofits for change with our tailored software solutions, driving impact and efficiency."
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
          content="NGO Software Solutions | Deeporion: Empowering Nonprofits for Change"
        />
        <meta
          name="twitter:description"
          content="Empower nonprofits for change with our tailored software solutions, driving impact and efficiency."
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

export default Ngo;
