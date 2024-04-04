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

const ProjectManagement = () => {
  return (
    <>
      <Helmet>
        <title>
          Streamlining Project Management With Powerful Tools | Deeporion
        </title>
        <meta
          name="description"
          content="DeepOrion provides efficient project management tools to streamline your development process. Enhance collaboration and productivity with our tailored solutions."
        />
        <meta
          name="keywords"
          content="Project Development Software, Project Management System Development, Project Management Software Solutions, Project Management Software Development, Development Project Management Software"
        />
        <meta name="author" content="Deeporion" />
        <meta
          property="og:title"
          content="Streamlining Project Management With Powerful Tools | Deeporion"
        />
        <meta
          property="og:description"
          content="DeepOrion provides efficient project management tools to streamline your development process. Enhance collaboration and productivity with our tailored solutions."
        />
        <meta
          property="og:image"
          content={`${awsURL}/images/deeporion_logo.jpg`}
        />
        <meta
          property="og:url"
          content="https://deeporion.com/services/pm-tools-development"
        />
        <meta
          name="twitter:title"
          content="Streamlining Project Management With Powerful Tools | Deeporion"
        />
        <meta
          name="twitter:description"
          content="DeepOrion provides efficient project management tools to streamline your development process. Enhance collaboration and productivity with our tailored solutions."
        />
        <meta
          name="twitter:image"
          content={`${awsURL}/images/deeporion_logo.jpg`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="canonical"
          href="https://deeporion.com/services/pm-tools-development"
        />
      </Helmet>
      <ServiceTemplate />
      <ProgressCard />
      <HireCard />
      <ServiceCardGrid />
      <IndustryWeServe />
      <CtaTemplate heading="projectHeading" />
      <ServiceRecentWork />
      <LatestInsight />
      <FrequentlyAskedQueston />
    </>
  );
};

export default ProjectManagement;
