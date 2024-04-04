/* eslint-disable max-len */
import React from "react";
import { Helmet } from "react-helmet";
import ServiceTemplate from "./ServiceTemplate";
import { awsURL } from "utils/Constants";
import ServiceCardGrid from "component/common/ServiceCardGrid";
import ServiceTabCard from "component/common/ServiceTabCard";
import HireCard from "../../common/HireCards";
import LatestInsight from "../home/LatestInsight";
import FrequentlyAskedQueston from "component/common/FrequentlyAskedQueston";
import ServiceRecentWork from "component/common/ServiceRecentWork";
import IndustryWeServe from "component/common/IndustryWeServe";
import ProgressCard from "./ProgreesCard";
import CtaTemplate from "../home/CtaTemplate";

const MobileApp = () => {
  return (
    <>
      <Helmet>
        <title>
          Crafting Exceptional Mobile Apps for Business Growth | Deeporion
        </title>
        <meta
          name="description"
          content="DeepOrion specializes in custom mobile app development to help businesses engage their audience on the go. Discover our service for innovative mobile solutions."
        />
        <meta
          name="keywords"
          content="Mobile App Development, Mobile App Development Company, Mobile Application Development, Mobile App Development  Company Services, Expert Mobile App  Development Advice, Enterprise Mobile Solutions Provider"
        />
        <meta name="author" content="Deeporion" />
        <meta
          property="og:title"
          content="Crafting Exceptional Mobile Apps for Business Growth | Deeporion"
        />
        <meta
          property="og:description"
          content="DeepOrion specializes in custom mobile app development to help businesses engage their audience on the go. Discover our service for innovative mobile solutions."
        />
        <meta
          property="og:image"
          content={`${awsURL}/images/deeporion_logo.jpg`}
        />
        <meta
          property="og:url"
          content="https://deeporion.com/services/mobile-app-development"
        />
        <meta
          name="twitter:title"
          content="Crafting Exceptional Mobile Apps for Business Growth | Deeporion"
        />
        <meta
          name="twitter:description"
          content="DeepOrion specializes in custom mobile app development to help businesses engage their audience on the go. Discover our service for innovative mobile solutions."
        />
        <meta
          name="twitter:image"
          content={`${awsURL}/images/deeporion_logo.jpg`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="canonical"
          href="https://deeporion.com/services/mobile-app-development"
        />
      </Helmet>
      <ServiceTemplate />
      <ProgressCard />
      <HireCard />
      <ServiceTabCard type="iconType" />
      <ServiceCardGrid />
      <IndustryWeServe />
      <CtaTemplate heading="mobileHeading" />
      <ServiceRecentWork />
      <LatestInsight />
      <FrequentlyAskedQueston />
    </>
  );
};

export default MobileApp;
