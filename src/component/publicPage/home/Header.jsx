import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Svg01 from "../../../svgComponents/Svg01";
import Svg02 from "../../../svgComponents/Svg02";
import Svg03 from "../../../svgComponents/Svg03";
import Svg04 from "../../../svgComponents/Svg04";
import Svg06 from "../../../svgComponents/Svg06";
import Svg07 from "../../../svgComponents/Svg07";
import Svg08 from "../../../svgComponents/Svg08";
import Svg09 from "../../../svgComponents/Svg09";
import GoToTop from "./GoToTop";
import { AiOutlineMenu } from "react-icons/ai";
import Svg13 from "../../../svgComponents/Svg13";
import { RiCloseFill } from "react-icons/ri";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useTranslation } from "react-i18next";
import HamburgerMenu from "./HamburgerMenu";
import { awsURL } from "utils/Constants";
import ServiceHeader from "./ServiceHeader";
import EducationSvg from "svgComponents/EducationSvg";
import HospitalitySvg from "svgComponents/HospitalitySvg";
import FashionSvg from "svgComponents/FashionSvg";
import RealEstateSvg from "svgComponents/RealEstateSvg";
import HealthCareSvg from "svgComponents/HealthCareSvg";
import TravelSvg from "svgComponents/TravelSvg";
import AutoMobilesvg from "svgComponents/AutoMobilesvg";
import Penetration from "svgComponents/Penetration";
import EntertainmentSvg from "svgComponents/EntertainmentSvg";
import NgoSvg from "svgComponents/NgoSvg";
import IndustriesHeader from "./IndustriesHeader";
import PropTypes from "prop-types";
import {
  SvgAgriculture,
  SvgBanking,
  SvgEvents,
  SvgFinance,
  SvgNews,
  SvgQuickCommerce,
  SvgRestaurant,
  SvgSocialNet,
  SvgWelness
} from "svgComponents/industries";
import PortFolioHeader from "./PortFolioHeader";

export const servicePrimary = [
  {
    mainHeading: "service_design_main_heading",
    data: [
      {
        icon: Svg04,
        label: "ui/ux",
        subLabel: "ui/ux_sub_label",
        link: "/services/ui-ux-design",
      },
    ],
  },
  {
    mainHeading: "application_main_heading",
    data: [
      {
        icon: Svg01,
        label: "fullStackDevelopment",
        link: "/services/fullstack-development",
        subLabel: "fullStackDevelopmentSubHeading",
      },
      {
        icon: Svg04,
        label: "mobile_development_heading",
        link: "/services/mobile-app-development",
        subLabel: "mobile_development_sub_heading",
      },
      {
        icon: Svg02,
        label: "WebsiteDesignDevelopment",
        link: "/services/web-design-development",
        subLabel: "WebsiteDesignDevelopmentSubHeading",
      },
    ],
  },
];

export const serviceSecondary = [
  {
    mainHeading: "service_secondary_main_heading",
    data: [
      {
        icon: Svg03,
        label: "eCommerceHeading",
        subLabel: "eCommerceSubHeading",
        link: "/services/ecommerce-development",
      },
      {
        icon: Svg09,
        label: "hrPortalDev",
        subLabel: "hrPortalDevSubHeading",
        link: "/services/hr-portal-development",
      },
      {
        icon: Svg06,
        label: "pmDev",
        subLabel: "pmDevSubHeading",
        link: "/services/pm-tools-development",
      },
      {
        icon: Svg07,
        label: "mvpDev",
        subLabel: "mvpDevSubHeading",
        link: "/services/mvp-development",
      },
      {
        icon: Svg08,
        label: "fundraisingPlatform",
        subLabel: "fundraisingPlatformSubHeading",
        link: "/services/fundraising-software-development",
      },
    ],
  },
];

export const serviceLast = [
  {
    mainHeading: "service_others_main_heading",
    data: [
      {
        icon: Svg04,
        label: "seoHeading",
        subLabel: "seoSubHeading",
        link: "/services/seo-advertisement",
      },
      {
        icon: Penetration,
        label: "penetration",
        subLabel: "penetrationSubHeading",
        link: "/services/penetration-testing",
      },
    ],
  },
];

export const dropdownOptionsIndustiesPrimary = [
  {
    icon: <AutoMobilesvg />,
    label: "autoMobile",
    subLabel: "autoMobileSubLabel",
    link: "/industry/auto-mobile",
  },
  {
    icon: <HospitalitySvg />,
    label: "hospitality",
    subLabel: "hospitalitySubLabel",
    link: "/industry/hospitality",
  },
  {
    icon: <RealEstateSvg />,
    label: "realEstate",
    subLabel: "realEstateSubLabel",
    link: "/industry/real-estate",
  },
  {
    icon: <EntertainmentSvg />,
    label: "entertainment",
    subLabel: "entertainmentSubLabel",
    link: "/industry/entertainment",
  },
  {
    icon: <NgoSvg />,
    label: "ngo",
    subLabel: "ngoSubLabel",
    link: "/industry/ngo",
  },
  {
    icon: <SvgSocialNet />,
    label: "socialNet",
    subLabel: "socialNetSubLabel",
    link: "/industry/socialnetworking",
  },
];

export const dropdownOptionsIndustiesSecond = [
  {
    icon: <EducationSvg />,
    label: "education",
    subLabel: "educationSubLabel",
    link: "/industry/education",
  },
  {
    icon: <FashionSvg />,
    label: "fashion",
    subLabel: "fashionSubLabel",
    link: "/industry/fashion",
  },
  {
    icon: <HealthCareSvg />,
    label: "healthcare",
    subLabel: "healthcareSubLabel",
    link: "/industry/healtcare",
  },
  {
    icon: <TravelSvg />,
    label: "travel",
    subLabel: "travelSubLabel",
    link: "/industry/travel",
  },
  {
    icon: <SvgQuickCommerce />,
    label: "commerce",
    subLabel: "commerceSubLabel",
    link: "/industry/quickcommerce",
  },
  {
    icon: <SvgBanking />,
    label: "banking",
    subLabel: "bankingSubLabel",
    link: "/industry/banking",
  },
];

export const dropdownOptionsIndustiesLast = [
  {
    icon: <SvgEvents />,
    label: "events",
    subLabel: "eventsSubLabel",
    link: "/industry/events",
  },
  {
    icon: <SvgFinance />,
    label: "finance",
    subLabel: "financeSubLabel",
    link: "/industry/finance",
  },
  {
    icon: <SvgWelness />,
    label: "wellness",
    subLabel: "wellnessSubLabel",
    link: "/industry/wellness",
  },
  {
    icon: <SvgAgriculture />,
    label: "agriculture",
    subLabel: "agricultureSubLabel",
    link: "/industry/agriculture",
  },
  {
    icon: <SvgNews />,
    label: "news",
    subLabel: "newsSubLabel",
    link: "/industry/news",
  },
  {
    icon: <SvgRestaurant />,
    label: "restaurant",
    subLabel: "restaurantSubLabel",
    link: "/industry/restaurant",
  },
];

const Header = ({showDropdown, handleDropdownOpen}) => {
  const { t } = useTranslation();
  const [scrolling, setScrolling] = useState(false);
  const [isNavOpen] = useState(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  useEffect(() => {
    if (isHamburgerOpen) {
      window.removeEventListener("scroll", (e) => e.preventDefault);
    } else {
      window.addEventListener("scroll", () => {});
    }
  }, [isHamburgerOpen]);

  const location = useLocation();

  const handleHamburgerMenu = () => {
    setIsHamburgerOpen(true);
  };

  const handleClose = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  const portfolioColor = window.location.pathname.includes(
    "/portfolio/details/"
  )
    ? "text-[#4B4343]"
    : "";

  const textBlueColor =
    window.location.pathname.includes("/industry/") ||
    window.location.pathname.includes("/services/") ||
    window.location.pathname.includes("hire-us")
      ? "text-[#031b59]"
      : "";

  const iconColor = scrolling
    ? "#031B59"
    : portfolioColor
      ? "#4B4343"
      : textBlueColor
        ? "#031b59"
        : "#ffffff";

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <div
      className={`w-full container -container z-10 mx-auto ${
        scrolling
          ? `${
            isHamburgerOpen
              ? "bg-white text-[#031B59]"
              : "bg-white text-[#031B59]"
          }`
          : ""
      } transition-all`}
    >
      <nav
        className={`w-full flex items-center justify-between px-0 md:px-8 ${
          scrolling
            ? "header_bg fill-[#fff]"
            : `hb ${
              portfolioColor
                ? portfolioColor
                : textBlueColor
                  ? textBlueColor
                  : "text-[#fff]"
            }`
        } transition-all `}
      >
        <div className="w-full h-fit flex justify-between items-center lg:px-2 xl:px-4 pt-[2px]">
          {/* Company Logo and hamburger menu */}
          <div className="lg:basis-2/12 w-full lg:w-fit flex items-center justify-between">
            <a
              href="/"
              className="w-fit flex items-center gap-[3px] scale-90 lg:scale-100"
            >
              <img
                className="h-[2.536rem]"
                src={`${awsURL}/images/Frame+606.png`}
                alt="frame"
              />
              <span className="h-[2.536rem] text-2xl font-semibold whitespace-nowrap logo">
                <Svg13 />
              </span>
            </a>
            {/* Hamburger Button */}
            <button
              className="w-fit flex justify-end text-2xl lg:hidden rounded"
              onClick={handleHamburgerMenu}
            >
              {isNavOpen ? (
                <RiCloseFill />
              ) : (
                <AiOutlineMenu className="w-fit" />
              )}
            </button>
            {isHamburgerOpen ? (
              <HamburgerMenu handleClose={handleClose} />
            ) : null}
          </div>
          {/* Links Section */}
          <div
            className={`basis-8/12 w-full lg:flex hidden justify-center items-center gap-5 xl:gap-12`}
          >
            {/* Home Link */}
            <div className="w-fit flex items-center hustify-center">
              <Link
                rel="canonical"
                to="/"
                className={`text-lg leading-[26px]  ${
                  location.pathname === "/" ? "font-bold underline-small" : ""
                }`}
              >
                {t("home")}
              </Link>
            </div>
            {/* About Link */}
            <div className="w-fit">
              <Link
                rel="canonical"
                to="/about"
                className={`text-lg leading-[26px] ${
                  location.pathname === "/about"
                    ? "font-bold  underline-small"
                    : ""
                }`}
              >
                {t("about")}
              </Link>
            </div>
            {/* Services Link */}
            <div
              className="w-fit flex justify-between relative h-[40px]"
              onMouseEnter={() => handleDropdownOpen(true, "services")}
              onMouseLeave={() => handleDropdownOpen(false, "services")}
            >
              <div className="relative w-fit flex gap-2 items-center">
                <Link
                  rel="canonical"
                  // to="/services"
                  className={`text-lg leading-[26px] ${
                    location.pathname === "/services"
                      ? "font-bold  underline-small"
                      : ""
                  }`}
                >
                  {t("services")}
                </Link>
                <button
                  className=""
                  style={{
                    display: "block",
                  }}
                >
                  {showDropdown.services ? (
                    <IoIosArrowUp color={iconColor} className="iconss" />
                  ) : (
                    <IoIosArrowDown color={iconColor} className="iconss" />
                  )}
                </button>
                {showDropdown.services && (
                  <ServiceHeader handleDropdownOpen={handleDropdownOpen} />
                )}
              </div>
            </div>
            {/* Industries Link */}
            <div
              className="w-fit flex justify-between relative h-[40px]"
              onMouseEnter={() => handleDropdownOpen(true, "industries")}
              onMouseLeave={() => handleDropdownOpen(false, "industries")}
            >
              <div className="relative w-fit flex gap-2 items-center">
                <Link
                  rel="canonical"
                  // to="/services"
                  className={`text-lg leading-[26px] ${
                    location.pathname === "/services"
                      ? "font-bold  underline-small"
                      : ""
                  }`}
                >
                  {t("industries")}
                </Link>
                <button
                  className=""
                  style={{
                    display: "block",
                  }}
                >
                  {showDropdown.industries ? (
                    <IoIosArrowUp color={iconColor} className="iconss" />
                  ) : (
                    <IoIosArrowDown color={iconColor} className="iconss" />
                  )}
                </button>
                {showDropdown.industries && (
                  <div>
                    <IndustriesHeader handleDropdownOpen={handleDropdownOpen} />
                  </div>
                )}
              </div>
            </div>
            {/* Portfolio Link */}
            <div
              className="w-fit flex justify-between relative h-[40px]"
              onMouseEnter={() => handleDropdownOpen(true, "portfolio")}
              onMouseLeave={() => handleDropdownOpen(false, "portfolio")}
            >
              <div className="relative w-fit flex gap-2 items-center">
                <Link
                  rel="canonical"
                  to="/portfolio"
                  className={`text-lg leading-[26px] ${
                    location.pathname === "/portfolio"
                      ? "font-bold underline-small"
                      : ""
                  }`}
                >
                  {t("portfolio")}
                </Link>
                <button
                  className=""
                  style={{
                    display: "block",
                  }}
                >
                  {showDropdown.portfolio ? (
                    <IoIosArrowUp color={iconColor} className="iconss" />
                  ) : (
                    <IoIosArrowDown color={iconColor} className="iconss" />
                  )}
                </button>
                {showDropdown.portfolio && (
                  <div>
                    <PortFolioHeader handleDropdownOpen={handleDropdownOpen} />
                  </div>
                )}
              </div>
            </div>
            {/* Insight Link */}
            <div className="w-fit">
              <Link
                to="/insight"
                rel="canonical"
                className={`text-lg leading-[26px] ${
                  location.pathname === "/insight"
                    ? "font-bold underline-small"
                    : ""
                }`}
              >
                {t("insight")}
              </Link>
            </div>
          </div>
          {/* Login Button */}
          <div className="basis-2/12 hidden lg:flex item-center justify-center gap-[30px]">
            <div className="w-fit flex items-center jutify-center">
              <Link
                to="/hire-us"
                rel="canonical"
                className={`text-lg leading-[26px] font-bold ${
                  location.pathname === "/hire-us" ? "underline-small" : ""
                } whitespace-nowrap hover:underline `}
              >
                {t("hireDeveloPers")}
              </Link>
            </div>
            <Link rel="canonical" to="/login">
              <button
                className={`w-[6.063rem] h-[3.375rem] text-white items-center justify-center
               bg-[#031B59] rounded-[10px]`}
              >
                {t("login")}
              </button>
            </Link>
          </div>
        </div>
      </nav>
      <GoToTop />
    </div>
  );
};

export default Header;

Header.propTypes = {
  showDropdown: PropTypes.object,
  handleDropdownOpen: PropTypes.func,
};
