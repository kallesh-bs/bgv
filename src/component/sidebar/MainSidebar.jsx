import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { content } from "../../utils/constant/Content";
import { AiFillMail } from "react-icons/ai";
import {
  MdSupervisedUserCircle,
  MdChatBubble,
  MdAdminPanelSettings
} from "react-icons/md";
import { SidebarLink } from "./SidebarLinks";
import PropTypes from "prop-types";

const MainSidebarButton = ({ to, isActive, icon: Icon, text }) => (
  <NavLink
    to={to}
    className={`flex w-full ${
      isActive ? "bg-[#031B59] rounded-l-[4px] border-l-2 border-[#FF7914]" : ""
    }`}
  >
    <button
      className={`relative w-full h-[3.5rem] pr-[6px] group hover:bg-white/10 hover:scale-105 group`}
    >
      <div
        className={`relative h-full w-full group flex justify-center items-center group`}
      >
        <div className={`h-full w-full flex items-center justify-center group`}>
          {Icon && <Icon className="h-6 w-6 fill-white" />}
        </div>
        <div
          role="tooltip"
          className="tooltip_shadow hidden group-hover:flex z-50 absolute top-[1.5rem]
            left-[3rem] h-[2.188rem] w-fit py-2 px-4 rounded-md text-white bg-[#04133A]"
        >
          <p
            className={`basis-9/12 w-full h-full flex items-center text-base whitespace-nowrap`}
          >
            {text}
          </p>
        </div>
      </div>
    </button>
  </NavLink>
);

export default function MainSidebar() {
  const userData = localStorage.getItem("userLoginToken")
    ? JSON.parse(localStorage.getItem("userLoginToken")) : '';
  const role = userData?.role;
  const location = useLocation();
  const [Location, setLocation] = useState("");

  const getCurrentlocation = () => {
    const pathname = location.pathname.split("/")[1];
    setLocation(pathname);
  };

  useEffect(() => {
    getCurrentlocation();
  }, [location.pathname]);

  const isActive = (match) => {
    if (match === "dashboard") {
      let data = SidebarLink();
      data = data.map((value) => value.to);

      return data.includes(`/${Location}`);
    }

    return match === Location;
  };
  let sidebarlink = [];
  if (role === "admin") {
    sidebarlink = [
      {
        to: "/dashboard",
        isActive: isActive("dashboard"),
        icon: MdAdminPanelSettings,
        text: content.admin,
      },
      {
        to: "/email",
        isActive: isActive("email"),
        icon: AiFillMail,
        text: content.email,
      },
      {
        to: "/chat",
        isActive: isActive("chat"),
        icon: MdChatBubble,
        text: content.chat,
      },
    ];
  } else if (role === "employee") {
    sidebarlink = [
      {
        to: "/dashboard",
        isActive: isActive("dashboard"),
        icon: MdSupervisedUserCircle,
        text: content.employee,
      },
      {
        to: "/email",
        isActive: isActive("email"),
        icon: AiFillMail,
        text: content.email,
      },
      {
        to: "/chat",
        isActive: isActive("chat"),
        icon: MdChatBubble,
        text: content.chat,
      },
    ];
  } else if (role === "client") {
    sidebarlink = [
      {
        to: "/dashboard",
        isActive: isActive("dashboard"),
        icon: MdSupervisedUserCircle,
        text: content.employee,
      },
      {
        to: "/email",
        isActive: isActive("email"),
        icon: AiFillMail,
        text: content.email,
      },
      {
        to: "/chat",
        isActive: isActive("chat"),
        icon: MdChatBubble,
        text: content.chat,
      },
    ];
  }

  return (
    <div className="z-20 w-[3.438rem] h-screen flex justify-center items-center bg-[rgb(4,19,58)] pt-[12rem]">
      <nav className="h-full w-full flex flex-col items-center">
        {sidebarlink.map((obj, index) => (
          <MainSidebarButton
            key={index}
            to={obj.to}
            icon={obj.icon}
            isActive={obj.isActive}
            text={obj.text}
          />
        ))}
      </nav>
    </div>
  );
}

MainSidebarButton.propTypes = {
  to: PropTypes.string,
  isActive: PropTypes.bool,
  icon: PropTypes.func,
  text: PropTypes.string,
  isSidebarCollapsed: PropTypes.bool,
};
