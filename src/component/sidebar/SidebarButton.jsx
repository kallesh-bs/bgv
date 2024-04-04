import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from "prop-types";

export default function SidebarButton({
  to,
  isActive,
  icon: Icon,
  text,
}) {
  return (
    <NavLink
      to={to}
      className={`flex ${
        isActive
          ? "bg-white/10 before:rounded-tr-md"
          : ""
      }`}
    >
      <button
        title={text}
        className={`w-full h-[3.2rem] hover:bg-white/10 hover:scale-105`}
      >
        <div className={`flex h-14 justify-center text-base items-center`}>
          <div
            className={`basis-3/12  h-full w-full flex justify-end scale-125" items-center`}
          >
            {Icon && <Icon className="h-5 w-5" />}
          </div>
          <p
            className={`flex basis-9/12 w-full h-full items-center pl-4 whitespace-nowrap`}
          >
            {text}
          </p>
        </div>
      </button>
    </NavLink>
  );
}

SidebarButton.propTypes = {
  to: PropTypes.string,
  isActive: PropTypes.bool,
  icon: PropTypes.object,
  text: PropTypes.string,
  isSidebarCollapsed: PropTypes.bool,
};
