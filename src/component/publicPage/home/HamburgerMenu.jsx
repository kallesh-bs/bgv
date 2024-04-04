import React, { useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { t } from "i18next";
import { IoIosArrowDown } from "react-icons/io";
import PropTypes from "prop-types";
import { awsURL } from "utils/Constants";
import {
  dropdownOptionsIndustiesPrimary,
  dropdownOptionsIndustiesSecond,
  dropdownOptionsIndustiesLast,
  servicePrimary,
  serviceSecondary,
  serviceLast
} from "./Header";

export default function HamburgerMenu({ handleClose }) {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [showIndustry, setShowIndustry] = useState(false);
  const industryDropDown = [].concat(
    dropdownOptionsIndustiesPrimary,
    dropdownOptionsIndustiesSecond,
    dropdownOptionsIndustiesLast
  );
  const serviceDropDown = [].concat(
    servicePrimary,
    serviceSecondary,
    serviceLast
  );

  return (
    <div
      className="fixed top-0 right-0 w-full h-[100vh] overflow-y-scroll bg-black/50
      flex items-center justify-end"
    >
      <div
        className="w-full max-w-[336px] h-full bg-[#031b59] p-[10px] flex flex-col gap-8 py-6
      text-white justify-start overflow-y-scroll"
      >
        {/* Logo and closing button */}
        <div className="w-full flex justify-between items-center">
          <div>
            <a href="" className="w-fit flex items-center">
              <img
                className="h-[2.75rem] w-[8.313rem]"
                src={`${awsURL}/images/logo_white.png`}
                alt="Logo"
              />
            </a>
          </div>
          <button onClick={handleClose}>
            <RiCloseFill className="fill-[#fff] h-6 w-6" />
          </button>
        </div>
        <div className=" w-full flex flex-col items-start gap-2">
          {/* Login Button Section */}
          <div
            className="w-full h-[4rem] flex items-center justify-center rounded-lg bg-white/10
            space-x-4"
          >
            <p className="text-base font-normal text-white">
              Hey, Let’s Get Started
            </p>
            <button
              className={`flex text-white text-lg items-center justify-center
         bg-[#031B59] px-1 p-2 rounded-lg w-24 `}
              onClick={() => navigate("/login")}
            >
              {t("login")}
            </button>
          </div>
          {/* Links */}
          <ul className={`w-full lg:flex px-2 gap-4`}>
            <li className="w-fullflex justify-start items-center">
              <button
                className="w-full h-[3.25rem] px-3 flex items-center justify-start text-left text-base"
                onClick={() => {
                  navigate("/");
                  handleClose();
                }}
              >
                {t("home")}
              </button>
            </li>
            <li className="w-full flex justify-start items-center">
              <button
                className="w-full h-[3.25rem] px-3 flex items-center justify-start text-left text-base"
                onClick={() => {
                  navigate("/about");
                  handleClose();
                }}
              >
                {t("about")}
              </button>
            </li>
            <li className="relative group w-full  flex flex-col justify-start items-start">
              <div
                className={`mr-4 w-full flex items-center ${
                  showIndustry && "bg-white/10 rounded-t-lg"
                }`}
              >
                <button
                  className="w-full h-[3.25rem] px-3 flex items-center justify-start text-left text-base"
                  onClick={() => {
                    // navigate("/industries");
                    handleClose();
                  }}
                >
                  {t("industry")}
                </button>
                <button
                  onClick={() => {
                    setShowIndustry(!showIndustry);
                    show && setShow(false);
                  }}
                  className="w-1/2 h-full px-3 flex justify-end items-center"
                >
                  {" "}
                  <IoIosArrowDown />
                </button>
              </div>
              {/* Service section sub-menu */}
              <div
                className={`w-full h-fit bg-white/10 ${
                  showIndustry ? "rounded-b-lg" : "hidden"
                }`}
              >
                <ul className="w-full h-full">
                  {industryDropDown?.map((obj, index) => (
                    <li
                      key={index}
                      className="w-full h-[3.25rem] px-3 flex items-center justify-center space-x-4"
                    >
                      <div
                        className="flex items-center justify-center bg-[white] p-2
                      rounded-full w-8 h-8 service_sub_icon"
                      >
                        <span className="w-[20px] h-[20px]">{obj.icon}</span>
                      </div>
                      <div className="w-full h-full flex items-center">
                        <Link
                          rel="canonical"
                          to={obj.link}
                          className={`w-full h-[52px] text-left text-sm 
                      flex items-center justify-start`}
                        >
                          {t(obj.label)}
                        </Link>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li className="relative group w-full  flex flex-col justify-start items-start">
              <div
                className={`mr-4 w-full flex items-center ${
                  show && "bg-white/10 rounded-t-lg"
                }`}
              >
                <button
                  className="w-full h-[3.25rem] px-3 flex items-center justify-start text-left text-base"
                  onClick={() => {
                    handleClose();
                  }}
                >
                  {t("services")}
                </button>
                <button
                  onClick={() => {
                    setShow(!show);
                    showIndustry && setShowIndustry(false);
                  }}
                  className="w-1/2 h-full px-3 flex justify-end items-center"
                >
                  {" "}
                  <IoIosArrowDown />
                </button>
              </div>
              {/* Service section sub-menu */}
              <div
                className={`w-full h-fit bg-white/10 ${
                  show ? "rounded-b-lg" : "hidden"
                }`}
              >
                <ul className="w-full h-full">
                  {serviceDropDown.map((obj, index) => (
                    <li
                      key={index}
                      className="w-full h-fit px-3 flex flex-col items-start space-x-4"
                    >
                      <p className="font-bold">{`${t(obj.mainHeading)}`}</p>
                      <div>
                        {obj.data.map((arr, index) => (
                          <div
                            className="flex justify-center items-center gap-2"
                            key={index}
                          >
                            <div
                              className="flex items-center  bg-[white] p-2 rounded-full w-8 h-8
                            service_sub_icon mb-[4px]"
                            >
                              <arr.icon />
                            </div>
                            <div className="w-full h-full flex items-center">
                              <Link
                                rel="canonical"
                                to={arr.link}
                                className={`w-full h-[52px] text-left text-sm 
                          flex items-center justify-start`}
                              >
                                {`${t(arr.label)}`}
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li className="w-full flex justify-start items-center">
              <button
                className="w-full h-[3.25rem] px-3 flex items-center justify-start text-left text-base"
                onClick={() => {
                  navigate("/portfolio");
                  handleClose();
                }}
              >
                {t("portfolio")}
              </button>
            </li>
            <li className="w-full flex justify-start items-center">
              <button
                className="w-full h-[3.25rem] px-3 flex items-center justify-start text-left text-base"
                onClick={() => {
                  navigate("/career");
                  handleClose();
                }}
              >
                {t("career")}
              </button>
            </li>
            <li className="w-full flex justify-start items-center">
              <button
                className="w-full h-[3.25rem] px-3 flex items-center justify-start text-left text-base"
                onClick={() => {
                  navigate("/contact-us");
                  handleClose();
                }}
              >
                {t("contactUs")}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

HamburgerMenu.propTypes = {
  handleClose: PropTypes.func,
};
