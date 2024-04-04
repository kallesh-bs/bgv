/* eslint-disable max-len */
import React from "react";
import { Helmet } from "react-helmet";
import ServiceTemplate from "./ServiceTemplate";
import { awsURL } from "utils/Constants";
import ServiceCardGrid from "component/common/ServiceCardGrid";
import HireCard from "../../common/HireCards";
import LatestInsight from "../home/LatestInsight";
import FrequentlyAskedQueston from "component/common/FrequentlyAskedQueston";
import ServiceRecentWork from "component/common/ServiceRecentWork";
import IndustryWeServe from "component/common/IndustryWeServe";
import ProgressCard from "./ProgreesCard";
import CtaTemplate from "../home/CtaTemplate";

const FullStack = () => {
  return (
    <>
      <Helmet>
        <title>Professional Full-stack Development Services | Deeporion</title>
        <meta
          name="description"
          content="DeepOrion offers professional full-stack development services to build robust and scalable web applications. Trust our expertise for end-to-end development solutions."
        />
        <meta
          name="keywords"
          content="Full Stack Developer, Scalable Full-stack Development Services, Fullstack Development Company"
        />
        <meta name="author" content="Deeporion" />
        <meta
          property="og:title"
          content="Professional Full-stack Development Services | Deeporion"
        />
        <meta
          property="og:description"
          content="DeepOrion offers professional full-stack development services to build robust and scalable web applications. Trust our expertise for end-to-end development solutions."
        />
        <meta
          property="og:image"
          content={`${awsURL}/images/deeporion_logo.jpg`}
        />
        <meta
          property="og:url"
          content="https://deeporion.com/services/fullstack-development"
        />
        <meta
          name="twitter:title"
          content="Professional Full-stack Development Services | Deeporion"
        />
        <meta
          name="twitter:description"
          content="DeepOrion offers professional full-stack development services to build robust and scalable web applications. Trust our expertise for end-to-end development solutions."
        />
        <meta
          name="twitter:image"
          content={`${awsURL}/images/deeporion_logo.jpg`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="canonical"
          href="https://deeporion.com/services/fullstack-development"
        />
      </Helmet>
      <ServiceTemplate />
      <ProgressCard />
      <HireCard />
      <ServiceCardGrid />
      <IndustryWeServe />
      <CtaTemplate heading="fullStackHead" />
      <ServiceRecentWork />
      <LatestInsight />
      <FrequentlyAskedQueston />
    </>
  );
};

export default FullStack;
