/* eslint-disable max-len */
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useDispatch } from "react-redux";
import apiUrl from "api/apiUrl";
import { setSubscribeApi } from "../../../redux/actions/action";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Svg16 from "svgComponents/Svg16";
import Svg17 from "svgComponents/Svg17";
import Helper from "api/Helper";
import { homeContent } from "utils/constant/HomeContent";
import { forgotSchema } from "redux/validator/login";
import { awsURL } from "utils/Constants";
import PropTypes from "prop-types";
import TwitterSvg from "svgComponents/TwitterSvg";
import FaceBookSvg from "svgComponents/FaceBookSvg";
import LinkdeInSvg from "svgComponents/LinkdeInSvg";
import InstagramSvg from "svgComponents/InstagramSvg";
import IllustrationSvg from "svgComponents/IllustrationSvg";

const Footer = ({ handleDropdownOpen }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [subscribeToastOpen, setSubscribeToastOpen] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setError(null);
      const subscribeData = new FormData(e.target);
      const value = Object.fromEntries(subscribeData.entries());
      await forgotSchema.validate(value, { abortEarly: false });
      const jsonObj = {
        subscribe: {
          email: value.email,
        },
      };

      const path = apiUrl.subscribeApi;
      const { response, status } = await Helper.post(jsonObj, path);
      if (status === 201) {
        setSubscribeToastOpen(true);
        dispatch(setSubscribeApi(response));
        e.target.reset();
      }
    } catch (error) {
      setError(error.errors);
      // console.log("error", error);
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-[#242424] text-white">
      <div className="w-full max-w-[1170px] px-[35px] lg:px-0 py-[5.12rem] flex flex-col justify-center gap-[3.75rem]">
        <div>
          <img
            className={`w-[8.386rem] h-[2.875rem] mb-[1rem] hidden sm:block md:block lg:block`}
            src={`${awsURL}/images/logo_white.png`}
            alt="Company Logo"
          />
          <p className="font-bold font-Raleway mb-[1rem] block sm:hidden md:hidden lg:hidden">
            {t("aboutDeep")}
          </p>
          {t("WeAreCommited")}
        </div>
        <div
          className="h-fit w-full flex items-center bg-[#242424] text-white"
        >
          <div className="h-full w-full grid grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 gap-[4.38rem]">
            {/* Quick Links */}
            <div className="w-full h-full max-h-[20rem]">
              <div className="w-full h-full flex flex-col gap-[0.69rem] items-start">
                <h5 className="w-fit font-bold font-Raleway leading-6">
                  {homeContent.quickLinks}
                </h5>
                <nav className="w-fit h-fit flex">
                  <ul className="w-full h-fit grid grid-cols-2 lg:grid lg:grid-cols-1 gap-5 lg:gap-3">
                    <li className="leading-[22px]">
                      <Link rel="canonical" to={"/"}>
                        {" "}
                        {t("home")}
                      </Link>
                    </li>
                    <li className="leading-[22px]">
                      <Link rel="canonical" to={"/about"}>
                        {t("about")}
                      </Link>
                    </li>
                    <li className="leading-[22px]">
                      {" "}
                      <Link rel="canonical" to={"/portfolio"}>
                        {t("portfolio")}
                      </Link>
                    </li>
                    <li className="leading-[22px]">
                      <Link rel="canonical" to={"/career"}>
                        {t("career")}
                      </Link>
                    </li>
                    <li className="leading-[22px]">
                      <Link rel="canonical" to={"/contact-us"}>
                        {t("contactUs")}
                      </Link>
                    </li>
                    <li className="leading-[22px]">
                      <Link rel="canonical" to={"/insight"}>
                        {t("insightsTitle1")}
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            {/* Services */}
            <div className="w-full h-full flex flex-col gap-4 items-start">
              <h5 className="w-fit font-bold font-Raleway leading-6">
                {homeContent.services}
              </h5>
              <nav className="w-fit h-fit flex items-center justify-start">
                <ul className="w-fit h-fit grid grid-cols-2 lg:grid lg:grid-cols-1 gap-5 lg:gap-3">
                  <li className="leading-[22px]">
                    <Link rel="canonical" to={"services/fullstack-development"}>
                      {" "}
                      {t("fullStackDevelopment")}
                    </Link>
                  </li>
                  <li className="leading-[22px]">
                    <Link
                      rel="canonical"
                      to={"services/mobile-app-development"}
                    >
                      {t("mobile_development_heading")}
                    </Link>
                  </li>
                  <li className="leading-[22px]">
                    <Link
                      rel="canonical"
                      to={"services/web-design-development"}
                    >
                      {t("WebsiteDesignDevelopment")}
                    </Link>
                  </li>
                  <li className="leading-[22px]">
                    {" "}
                    <Link rel="canonical" to={"services/pm-tools-development"}>
                      {t("pmDev")}
                    </Link>
                  </li>
                  <li className="leading-[22px]">
                    <Link rel="canonical" to={"services/mvp-development"}>
                      {t("mvpDev")}
                    </Link>
                  </li>
                  <li className="leading-[22px]">
                    <Link rel="canonical" to={"services/seo-advertisement"}>
                      {t("seoHeading")}
                    </Link>
                  </li>
                  <li className="leading-[22px]">
                    <Link rel="canonical" to={"services/penetration-testing"}>
                      {t("penetration")}
                    </Link>
                  </li>
                  <li
                    className="leading-[22px] cursor-pointer"
                    onClick={() => handleDropdownOpen(true, "services")}
                  >
                    {t("more+")}
                  </li>
                </ul>
              </nav>
            </div>
            {/* Industries */}
            <div className="w-full h-full flex flex-col gap-4 items-start">
              <h5 className="w-fit font-bold font-Raleway leading-6">
                {homeContent.industry}
              </h5>
              <nav className="w-full h-fit flex lg:gap-0 lg:grid lg:grid-cols-1">
                <ul className="w-full h-fit grid grid-cols-2 lg:grid lg:grid-cols-1 gap-5 lg:gap-3">
                  <li className="w-full leading-[22px]">
                    <Link rel="canonical" to={"industry/auto-mobile"}>
                      {" "}
                      {t("autoMobile")}
                    </Link>
                  </li>
                  <li className="leading-[22px]">
                    <Link rel="canonical" to={"industry/hospitality"}>
                      {t("hospitality")}
                    </Link>
                  </li>
                  <li className="leading-[22px]">
                    <Link rel="canonical" to={"industry/real-estate"}>
                      {t("realEstate")}
                    </Link>
                  </li>
                  <li className="leading-[22px]">
                    {" "}
                    <Link rel="canonical" to={"industry/entertainment"}>
                      {t("entertainment")}
                    </Link>
                  </li>
                  <li className="leading-[22px]">
                    <Link rel="canonical" to={"industry/ngo"}>
                      {t("ngo")}
                    </Link>
                  </li>
                  <li className="leading-[22px]">
                    <Link rel="canonical" to={"industry/socialnetworking"}>
                      {t("socialNet")}
                    </Link>
                  </li>
                  <li className="leading-[22px]">
                    <Link rel="canonical" to={"industry/education"}>
                      {t("education")}
                    </Link>
                  </li>
                  <li
                    className="leading-[22px] cursor-pointer"
                    onClick={() => handleDropdownOpen(true, "industries")}
                  >
                    {t("more+")}
                  </li>
                </ul>
              </nav>
            </div>
            {/* Hire Links */}
            <div className="w-full flex flex-col gap-4 col-span-1">
              <h4 className="font-bold font-Raleway leading-6">{t("hire")}</h4>
              <ul className="w-full grid grid-cols-2 lg:grid lg:grid-cols-1 gap-5 lg:gap-3">
                <li className="leading-[22px]">
                  {" "}
                  <Link to={"/portfolio"}>{t("mobileAppDeveloper")}</Link>
                </li>
                <li className="leading-[22px]">
                  <Link to={"/contactUs"}>{t("webappDevelopers")}</Link>
                </li>
                <li className="leading-[22px]">
                  <Link to={"/career"}>{t("uIUxDesigners")}</Link>
                </li>
                <li className="leading-[22px]">
                  <Link to={"/career"}>{t("penetration")}</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Contact Info */}
        <div className="w-full flex gap-[2.56rem] justify-between flex-col md:flex-row lg:flex-row">
          <div className="flex flex-col gap-[0.69rem]">
            <h4 className="font-bold font-Raleway leading-6 pb-2">
              {t("contactUs")}
            </h4>
            <div className="flex items-start gap-[10px]">
              <div className="gap-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
                <p className="leading-6">
                  <span>Jaipur: </span>
                  {homeContent.phoneNoJaipur}
                </p>
                <p className="leading-6">
                  <span>Banglore: </span>
                  {homeContent.phoneNoBanglore}
                </p>
                <p className="leading-6">
                  <span>Pune: </span>
                  {homeContent.phoneNoPune}
                </p>
                <p className="leading-6">
                  <span>Indore: </span>
                  {homeContent.phoneNoIndore}
                </p>
              </div>
            </div>
          </div>
          {/* Social Media Links */}
          <div className="flex flex-col justify-between gap-[0.69rem]">
            <h6 className="leading-[22px] font-Raleway font-medium">
              {t("followUs")}
            </h6>
            <nav className="flex items-center gap-5">
              <Link to="https://twitter.com/deeporion_tech">
                <TwitterSvg />
              </Link>
              <Link to="https://www.facebook.com/profile.php?id=61556701718650">
                <FaceBookSvg />
              </Link>
              <Link to="https://in.linkedin.com/company/deeporion">
                <LinkdeInSvg />
              </Link>
              <Link to="https://www.instagram.com/deeporion_tech/">
                <InstagramSvg />
              </Link>
              <Link to="https://www.behance.net/deeporitechnol">
                <IllustrationSvg />
              </Link>
              {/* <Link to="https://dribbble.com/Deeporion_technology">
                <FaDribbble className="h-7 w-7 fill-[#fff]" />
              </Link> */}
            </nav>
          </div>
          {/* Subscribe to newsletter */}
          <div className="w-fit flex flex-col gap-4">
            <h5 className="w-full font-bold leading-[22px] font-Raleway">
              {t("subscribeToOurNewsletter")}
            </h5>
            {subscribeToastOpen ? (
              <div
                id="toast-success"
                className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500
                      bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
                role="alert"
              >
                <div
                  className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8
                      text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200"
                >
                  <Svg16 />
                </div>
                <div className="ms-3 text-sm font-normal">
                  {t("SuccessfullySubscribed")}
                </div>
                <button
                  type="button"
                  className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg
                        focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center
                        h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                  data-dismiss-target="#toast-success"
                  aria-label="Close"
                  onClick={() => setSubscribeToastOpen(false)}
                >
                  <span className="sr-only">{t("close")}</span>
                  <Svg17 />
                </button>
              </div>
            ) : (
              <form
                className="relative w-3/4 max-w-[17.938rem] lg:w-full h-fit"
                onSubmit={handleSubmit}
              >
                <input
                  className="p-2 pr-16 rounded-xl h-12 w-full text-[#A1A1A1] bg-[#242424] border border-[#A1A1A1]"
                  type="email"
                  onChange={(e) => {
                    e.preventDefault();
                    setError(null);
                  }}
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                />
                <p className="text-red-800">{error}</p>
                <button
                  type="submit"
                  className="w-12 h-10 absolute top-[4px] right-[4px] flex items-center justify-center
                        text-white text-center bg-[#FE872E] rounded-xl"
                >
                  <FaArrowRight />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="h-[3.125rem] w-full flex justify-center items-center text-center bg-black text-white">
        <p className="font-Raleway leading-[22px]">{t("copyright")}</p>
      </div>
    </div>
  );
};

export default Footer;

Footer.propTypes = {
  handleDropdownOpen: PropTypes.func,
};
