/* eslint-disable max-len */
import React from "react";
import { Helmet } from "react-helmet";
import ServiceTemplate from "./ServiceTemplate";
import { awsURL } from "utils/Constants";
import ServiceCardGrid from "component/common/ServiceCardGrid";
import Visitors from "./Visitors";
import HireCard from "../../common/HireCards";
import LatestInsight from "../home/LatestInsight";
import FrequentlyAskedQueston from "component/common/FrequentlyAskedQueston";
import ServiceRecentWork from "component/common/ServiceRecentWork";
import IndustryWeServe from "component/common/IndustryWeServe";
import ProgressCard from "./ProgreesCard";
import CtaTemplate from "../home/CtaTemplate";

const Ecommerce = () => {
  return (
    <>
      <Helmet>
        <title>E-Commerce App Development Services | Deeporion</title>
        <meta
          name="description"
          content="DeepOrion provides comprehensive e-commerce solutions to drive your online business growth. From design to implementation, we tailor strategies to maximize your success."
        />
        <meta
          name="keywords"
          content="E Commerce Development, E-commerce Platform Development, E Commerce App Development Services"
        />
        <meta name="author" content="Deeporion" />
        <meta
          property="og:title"
          content="E-Commerce App Development Services | Deeporion"
        />
        <meta
          property="og:description"
          content="DeepOrion provides comprehensive e-commerce solutions to drive your online business growth. From design to implementation, we tailor strategies to maximize your success."
        />
        <meta
          property="og:image"
          content={`${awsURL}/images/deeporion_logo.jpg`}
        />
        <meta
          property="og:url"
          content="https://deeporion.com/services/ecommerce-development"
        />
        <meta
          name="twitter:title"
          content="E-Commerce App Development Services | Deeporion"
        />
        <meta
          name="twitter:description"
          content="DeepOrion provides comprehensive e-commerce solutions to drive your online business growth. From design to implementation, we tailor strategies to maximize your success."
        />
        <meta
          name="twitter:image"
          content={`${awsURL}/images/deeporion_logo.jpg`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="canonical"
          href="https://deeporion.com/services/ecommerce-development"
        />
      </Helmet>
      <ServiceTemplate />
      <ProgressCard />
      <HireCard />
      <Visitors />
      <ServiceCardGrid />
      <IndustryWeServe />
      <CtaTemplate heading="eHeading" />
      <ServiceRecentWork />
      <LatestInsight />
      <FrequentlyAskedQueston />
    </>
  );
};

export default Ecommerce;
