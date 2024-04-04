/* eslint-disable max-len */
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FiArrowRight } from "react-icons/fi";
import AboutUsInfoBox from "component/publicPage/home/AboutUsInfoBox";
import ChooseUs from "component/publicPage/home/ChooseUs";
import ChooseUsMobile from "component/publicPage/home/ChooseUsMobile";
import CtaTemplate from "component/publicPage/home/CtaTemplate";
import EffectiveSolution from "component/publicPage/home/EffectiveSolution";
import IndustryWeServe from "component/publicPage/home/IndustryWeServe";
import OurPortfolio from "component/publicPage/home/OurPortfolio";
import Technologies from "component/publicPage/home/Technologies";
import Services from "component/publicPage/home/Services";
import { awsURL } from "utils/Constants";
import LatestInsight from "component/publicPage/home/LatestInsight";
import Feedback from "component/publicPage/home/Feedback";
import ChallengesAndSolutions from "component/publicPage/home/ChallengesAndSolutions";
import OurPortfolioMobileView from "component/publicPage/home/OurPortfolioMobileView";
import FrequentlyAskedQueston from "component/common/FrequentlyAskedQueston";
import VettingProcess from "component/publicPage/home/VettingProcess";
import IndustryWeServeMobileView from "component/publicPage/home/IndustryWeServerMobileView";
import LatestInsightMobileView from "component/publicPage/home/LatestInsightMobileView";
import Companies from "component/publicPage/home/Companies";
import { Mobilepixel } from "component/publicPage/Constants";

const Home = () => {
  const { t } = useTranslation();
  const [viewportSize, setViewportSize] = useState('');

  useEffect(() => {
    const checkViewportSize = () => {
      const width = window.innerWidth;

      if (width <= Mobilepixel) {
        setViewportSize('mobile');
      } else {
        setViewportSize('desktop');
      }
    };

    checkViewportSize();

    window.addEventListener('resize', checkViewportSize);

    return () => {
      window.removeEventListener('resize', checkViewportSize);
    };
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      <Helmet>
        <title>{t("oneStopSolution")}</title>
        <meta
          name="description"
          content="Transforming Businesses with Innovative Solutions for web and mobile development, e-commerce, fullstack dev, MVP, project management, web design, and more."
        />
        <meta
          name="keywords"
          content="Industry-specific Software Solutions, Customer-centric Software Solutions"
        />
        <meta name="author" content="Deeporion" />
        <meta
          property="og:title"
          content="One-Stop Solution for Web and Software Development | Deeporion"
        />
        <meta
          property="og:description"
          content="Transforming Businesses with Innovative Solutions for web and mobile development, e-commerce, fullstack dev, MVP, project management, web design, and more."
        />
        <meta property="og:image" content="https://example.com/image.jpg" />
        <meta property="og:url" content="https://example.com/my-page" />
        <meta
          name="twitter:title"
          content="One-Stop Solution for Web and Software Development | Deeporion"
        />
        <meta
          name="twitter:description"
          content="Transforming Businesses with Innovative Solutions for web and mobile development, e-commerce, fullstack dev, MVP, project management, web design, and more."
        />
        <meta name="twitter:image" content="https://example.com/image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://deeporion.com" />
      </Helmet>
      {/* Hero Image Section */}
      <div className="w-full flex items-center jusify-center">
        <video
          className="w-screen video-bg h-[42.625rem] object-cover"
          width="100%"
          height="43.625rem"
          loop
          muted
          autoPlay
          poster={`${awsURL}/images/HomeThumbNail.webp`}
        >
          <source src={`${awsURL}/images/HomePageVideo.mp4`} type="video/mp4" />
        </video>
        {/* Heading and button */}
        <div className="absolute top-0 left-0 w-full h-full max-h-[42.625rem] flex flex-col gap-6 justify-center items-center video-bg">
          <div className="w-[80%] max-w-[43.813rem] flex flex-col gap-7 text-center">
            <h1 className="font-Raleway text-[#F3F6FD] text-[32px] lg:text-[48px] lg:leading-[56px] font-bold">
              {t("deliverTechSolution")}
            </h1>
            <p className="leading-[22px] text-white">{t("heroImgHeading")}</p>
          </div>
          <div>
            <Link
              rel="canonical"
              to="https://calendly.com/deeporion_bde"
              target="_blank"
            >
              <button className="w-[13.688rem] h-[3.375rem] bg-[#031B59] text-lg text-white rounded-2xl flex items-center justify-center">
                {t("scheduleCall")}
                <span className="ml-2 text-2xl">
                  <FiArrowRight />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* Components Section */}
      <AboutUsInfoBox />
      {viewportSize === "mobile" ? <ChooseUsMobile /> : <ChooseUs />}
      <div className="home-service-mob-container">
        <Services />
      </div>
      <CtaTemplate heading={t("ctaHeading")} />
      <Companies />
      {viewportSize === "mobile" ? <OurPortfolioMobileView /> : <OurPortfolio />}
      <CtaTemplate
        heading={t("hireSoftwareDevelopersHeading")}
        subHeading={t("hireSoftwareDevelopersSubHeading")}
        bgImg="background-people"
      />
      {viewportSize === "mobile" ? <IndustryWeServeMobileView /> : <IndustryWeServe />}

      <ChallengesAndSolutions />
      <Technologies />
      <div className="effective_solution_container">
        <EffectiveSolution />
      </div>
      <VettingProcess />
      {viewportSize === "mobile" ? <LatestInsightMobileView /> : <LatestInsight />}

      <Feedback />
      <FrequentlyAskedQueston />
      {/* Need to be completed */}
    </div>
  );
};

export default Home;
