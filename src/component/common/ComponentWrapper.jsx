/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from "prop-types";

export default function ComponentWrapper({children, bgColor}) {

  return (
    <div className={`flex h-fit lg:py-[85px] lg:px-[135px] px-[35px] py-[100px] gap-[46px] 
     ${bgColor === "color" ? "bg-[#F3F6FD]" : "bg-transparent"}`}>
      {children}
    </div>
  );
}

ComponentWrapper.prototype = {
  children: PropTypes.element,
  bgColor: PropTypes.string,
};
