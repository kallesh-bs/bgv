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

const Fundraising = () => {
  return (
    <>
      <Helmet>
        <title>
          Fundraising Software Development | Elevate Your Nonprofit Initiatives
          with Deeporion
        </title>
        <meta
          name="description"
          content="Elevate your nonprofit initiatives with our custom fundraising software, enabling greater impact and efficiency in fundraising efforts."
        />
        <meta
          name="keywords"
          content="Customized fundraising software solutions, fundraising software development, Automated fundraising software solutions, Scalable fundraising software development"
        />
        <meta name="author" content="Deeporion" />
        <meta
          property="og:title"
          content="Fundraising Software Development | Elevate Your Nonprofit Initiatives with Deeporion"
        />
        <meta
          property="og:description"
          content="Elevate your nonprofit initiatives with our custom fundraising software, enabling greater impact and efficiency in fundraising efforts."
        />
        <meta
          property="og:image"
          content={`${awsURL}/images/deeporion_logo.jpg`}
        />
        <meta
          property="og:url"
          content="https://deeporion.com/services/fundraising-software-development"
        />
        <meta
          name="twitter:title"
          content="Fundraising Software Development | Elevate Your Nonprofit Initiatives with Deeporion"
        />
        <meta
          name="twitter:description"
          content="Elevate your nonprofit initiatives with our custom fundraising software, enabling greater impact and efficiency in fundraising efforts."
        />
        <meta
          name="twitter:image"
          content={`${awsURL}/images/deeporion_logo.jpg`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="canonical"
          href="https://deeporion.com/services/fundraising-software-development"
        />
      </Helmet>
      <ServiceTemplate />
      <ProgressCard />
      <HireCard />
      <FundraisingTemplate />
      <ServiceCardGrid />
      <IndustryWeServe />
      <CtaTemplate heading="fundraisingHead" />
      <ServiceRecentWork />
      <LatestInsight />
      <FrequentlyAskedQueston />
    </>
  );
};

export default Fundraising;
