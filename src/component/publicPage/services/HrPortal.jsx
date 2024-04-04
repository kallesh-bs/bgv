/* eslint-disable max-len */
import React from "react";
import { Helmet } from "react-helmet";
import ServiceTemplate from "./ServiceTemplate";
import { awsURL } from "utils/Constants";
import FundraisingTemplate from "./FundraisingTemplate";
import HireCard from "../../common/HireCards";
import LatestInsight from "../home/LatestInsight";
import FrequentlyAskedQueston from "component/common/FrequentlyAskedQueston";
import ServiceRecentWork from "component/common/ServiceRecentWork";
import IndustryWeServe from "component/common/IndustryWeServe";
import ServiceCardGrid from "component/common/ServiceCardGrid";
import ProgressCard from "./ProgreesCard";
import CtaTemplate from "../home/CtaTemplate";

const HrPortal = () => {
  return (
    <>
      <Helmet>
        <title>HR Portal Development | Streamline Your Human Resources Management with Deeporion</title>
        <meta name="description" content="Streamline HR management with our customized portal development, optimizing processes and enhancing employee experiences." />
        <meta name="keywords" content="Customer-centric Software Solutions" />
        <meta name="author" content="Deeporion" />
        <meta
          property="og:title"
          content="HR Portal Development | Streamline Your Human Resources Management with Deeporion"
        />
        <meta property="og:description" content="Streamline HR management with our customized portal development, optimizing processes and enhancing employee experiences." />
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
          content="HR Portal Development | Streamline Your Human Resources Management with Deeporion"
        />
        <meta name="twitter:description" content="Streamline HR management with our customized portal development, optimizing processes and enhancing employee experiences." />
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
      <FundraisingTemplate />
      <ProgressCard />
      <HireCard />
      <ServiceCardGrid />
      <IndustryWeServe />
      <CtaTemplate heading="eHeading" />
      <ServiceRecentWork />
      <LatestInsight />
      <FrequentlyAskedQueston />
    </>
  );
};

export default HrPortal;
