/* eslint-disable max-len */
import React from "react";
import ServiceTemplate from "./ServiceTemplate";
import HireCard from "component/common/HireCards";
import ServiceCardGrid from "component/common/ServiceCardGrid";
import IndustryWeServe from "component/common/IndustryWeServe";
import LatestInsight from "../home/LatestInsight";
import FrequentlyAskedQueston from "component/common/FrequentlyAskedQueston";
import ServiceRecentWork from "component/common/ServiceRecentWork";
import CtaTemplate from "../home/CtaTemplate";
import WhatDoesItTake from "component/common/WhatDoesItTake";
import { awsURL } from "utils/Constants";
import { Helmet } from "react-helmet";
import ServiceTabCard from 'component/common/ServiceTabCard';

const SeoAdvertisement = () => {
  return (
    <>
      <Helmet>
        <title>
          SEO Advertisement | Amplify Your Online Presence with Deeporion
        </title>
        <meta
          name="description"
          content="Amplify your online presence with our SEO advertisement services, driving visibility and engagement for your business."
        />
        <meta
          name="keywords"
          content="search engine optimization company, Internet marketing company"
        />
        <meta name="author" content="Deeporion" />
        <meta
          property="og:title"
          content="SEO Advertisement | Amplify Your Online Presence with Deeporion"
        />
        <meta
          property="og:description"
          content="Amplify your online presence with our SEO advertisement services, driving visibility and engagement for your business."
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
          content="SEO Advertisement | Amplify Your Online Presence with Deeporion"
        />
        <meta
          name="twitter:description"
          content="Amplify your online presence with our SEO advertisement services, driving visibility and engagement for your business."
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
      <ServiceTemplate />
      <WhatDoesItTake />
      <HireCard />
      <ServiceTabCard type="iconType" />
      <ServiceCardGrid />
      <IndustryWeServe />
      <CtaTemplate heading="ctaHeading" />
      <ServiceRecentWork />
      <LatestInsight />
      <FrequentlyAskedQueston />
    </>
  );
};

export default SeoAdvertisement;
