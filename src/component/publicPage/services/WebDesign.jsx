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

const WebDesign = () => {
  return (
    <>
      <Helmet>
        <title>Web Design And Development Service | Deeporion</title>
        <meta
          name="description"
          content="DeepOrion offers professional web design services to create visually appealing and user-friendly websites. Stand out from the competition with our custom designs."
        />
        <meta
          name="keywords"
          content="Professional Website DesignerWebsite Designers For Small Business, Website Development Company, Web Design And Development Service, Custom Website Development Methodology, Custom Website Design Company"
        />
        <meta name="author" content="Deeporion" />
        <meta
          property="og:title"
          content="Web Design And Development Service | Deeporion"
        />
        <meta
          property="og:description"
          content="DeepOrion offers professional web design services to create visually appealing and user-friendly websites. Stand out from the competition with our custom designs."
        />
        <meta
          property="og:image"
          content={`${awsURL}/images/deeporion_logo.jpg`}
        />
        <meta
          property="og:url"
          content="https://deeporion.com/services/web-design-development"
        />
        <meta
          name="twitter:title"
          content="Web Design And Development Service | Deeporion"
        />
        <meta
          name="twitter:description"
          content="DeepOrion offers professional web design services to create visually appealing and user-friendly websites. Stand out from the competition with our custom designs."
        />
        <meta
          name="twitter:image"
          content={`${awsURL}/images/deeporion_logo.jpg`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="canonical"
          href="https://deeporion.com/services/web-design-development"
        />
      </Helmet>
      <ServiceTemplate />
      <ProgressCard />
      <ServiceTabCard type="iconType" />
      <HireCard />
      <ServiceCardGrid />
      <IndustryWeServe />
      <CtaTemplate heading="webDesignCta" />
      <ServiceRecentWork />
      <LatestInsight />
      <FrequentlyAskedQueston />
    </>
  );
};

export default WebDesign;
