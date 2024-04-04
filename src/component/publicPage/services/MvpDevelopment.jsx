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

const MvpDevelopment = () => {
  return (
    <>
      <Helmet>
        <title>
          Mvp Development Services for Rapid Prototyping | Deeporion
        </title>
        <meta
          name="description"
          content="DeepOrion offers MVP development services to quickly prototype your ideas and validate your concept. Leverage our expertise to bring your minimum viable product to life."
        />
        <meta
          name="keywords"
          content="Cost-effective Mvp Development Services, Mvp Software Development Services"
        />
        <meta name="author" content="Deeporion" />
        <meta
          property="og:title"
          content="Mvp Development Services for Rapid Prototyping | Deeporion"
        />
        <meta
          property="og:description"
          content="DeepOrion offers MVP development services to quickly prototype your ideas and validate your concept. Leverage our expertise to bring your minimum viable product to life."
        />
        <meta
          property="og:image"
          content={`${awsURL}/images/deeporion_logo.jpg`}
        />
        <meta
          property="og:url"
          content="https://deeporion.com/services/mvp-development"
        />
        <meta
          name="twitter:title"
          content="Mvp Development Services for Rapid Prototyping | Deeporion"
        />
        <meta
          name="twitter:description"
          content="DeepOrion offers MVP development services to quickly prototype your ideas and validate your concept. Leverage our expertise to bring your minimum viable product to life."
        />
        <meta
          name="twitter:image"
          content={`${awsURL}/images/deeporion_logo.jpg`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="canonical"
          href="https://deeporion.com/services/mvp-development"
        />
      </Helmet>
      <ServiceTemplate />
      <ProgressCard />
      <HireCard />
      <ServiceTabCard type="textType" />
      <ServiceCardGrid />
      <IndustryWeServe />
      <CtaTemplate heading="mvpHeading" />
      <ServiceRecentWork />
      <LatestInsight />
      <FrequentlyAskedQueston />
    </>
  );
};

export default MvpDevelopment;
