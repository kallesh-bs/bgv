/* eslint-disable max-len */
import React from "react";
import ServiceTemplate from "./ServiceTemplate";
import HireCard from "component/common/HireCards";
import ServiceCardGrid from "component/common/ServiceCardGrid";
import LatestInsight from "../home/LatestInsight";
import FrequentlyAskedQueston from "component/common/FrequentlyAskedQueston";
import CtaTemplate from "../home/CtaTemplate";
import WhatDoesItTake from "component/common/WhatDoesItTake";
import ServiceRecentWork from "component/common/ServiceRecentWork";
import IndustryWeServe from "component/common/IndustryWeServe";
import { awsURL } from "utils/Constants";
import { Helmet } from "react-helmet";

const UiUxDesign = () => {
  return (
    <>
      <Helmet>
        <title>UI/UX Design | Craft Engaging User Experiences with Deeporion</title>
        <meta name="description" content="Craft engaging user experiences with our UI/UX design services, ensuring intuitive and delightful interactions for your audience." />
        <meta name="keywords" content="Customer-centric Software Solutions" />
        <meta name="author" content="Deeporion" />
        <meta
          property="og:title"
          content="UI/UX Design | Craft Engaging User Experiences with Deeporion"
        />
        <meta property="og:description" content="Craft engaging user experiences with our UI/UX design services, ensuring intuitive and delightful interactions for your audience." />
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
          content="UI/UX Design | Craft Engaging User Experiences with Deeporion"
        />
        <meta name="twitter:description" content="Craft engaging user experiences with our UI/UX design services, ensuring intuitive and delightful interactions for your audience." />
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
      <ServiceTemplate />
      <WhatDoesItTake />
      <HireCard />
      <ServiceCardGrid />
      <IndustryWeServe />
      <CtaTemplate heading="ui/uxHeading" />
      <ServiceRecentWork />
      <LatestInsight />
      <FrequentlyAskedQueston />
    </>
  );
};

export default UiUxDesign;
