import React from "react";
import PropTypes from "prop-types";

export default function SectionHeadings({
  headingPart1,
  headingPart2,
  subHeading = "",
  textAlign = "",
}) {
  return (
    <div
      className={`w-full max-w-[50.75rem] flex flex-col ${
        textAlign === "" ? "text-center" : "text-left"
      } gap-[18px]`}
    >
      <h4
        className="font-Raleway text-2xl lg:text-[36px] font-bold
      leading-[44px] -tracking-[0.36px] text-[#031B59]"
      >
        {headingPart1}
        <span className="text-[#ED6E0F]"> {headingPart2}</span>
      </h4>
      <p className={`${subHeading === "" ? "hidden" : "block"} text-[#646978] leading-[22px]`}> {subHeading}</p>
    </div>
  );
}

SectionHeadings.propTypes = {
  headingPart1: PropTypes.string,
  headingPart2: PropTypes.string,
  subHeading: PropTypes.string,
  textAlign: PropTypes.string,
};
