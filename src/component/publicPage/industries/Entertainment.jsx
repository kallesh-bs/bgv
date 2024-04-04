/* eslint-disable max-len */
import EdgeTechnology from "component/common/EdgeTechnology";
import React from "react";
import CtaTemplate from "../home/CtaTemplate";
import { useTranslation } from "react-i18next";
import ContactInfo from "../contactUs/ContactInfo";
import Industry4Cards from "component/common/Industry4Cards";
import IndustryITSevices from "component/common/IndustryITSevices";
import Feedback from "../home/Feedback";
import { Helmet } from "react-helmet";
import { awsURL } from "utils/Constants";

function Entertainment() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>
          Entertainment Industry Solutions | Deeporion: Innovating Digital Experiences
        </title>
        <meta
          name="description"
          content="Explore our digital solutions revolutionizing entertainment, enhancing engagement and immersion."
        />
        <meta
          name="keywords"
          content="Media and Entertainment Website Design, Entertainment Website Design Services, Entertainment Website Design Services, Custom web design for Entertainment Industry"
        />
        <meta name="author" content="Deeporion" />
        <meta
          property="og:title"
          content="Entertainment Industry Solutions | Deeporion: Innovating Digital Experiences"
        />
        <meta
          property="og:description"
          content="Explore our digital solutions revolutionizing entertainment, enhancing engagement and immersion."
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
          content="Entertainment Industry Solutions | Deeporion: Innovating Digital Experiences"
        />
        <meta
          name="twitter:description"
          content="Explore our digital solutions revolutionizing entertainment, enhancing engagement and immersion."
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
      </div>
      <IndustryITSevices />
      <CtaTemplate
        heading={"hireSoftwareDevelopersHeading"}
        subHeading={t("hireSoftwareDevelopersSubHeading")}
        bgImg="background-people"
      />
      <Industry4Cards />
      <CtaTemplate heading={"ctaHeading"} />
      <Feedback />
      <div className="w-full flex flex-col pt-[5rem]">
        <ContactInfo />
      </div>
    </>
  );
}

export default Entertainment;
