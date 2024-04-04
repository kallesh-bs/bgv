import React from "react";
import PropTypes from "prop-types";

const Switch = ({
  name,
  labelLeft,
  labelRight,
  checkedValue,
  handleToggle,
  labelContainerClass,
  switchContainerClass,
}) => {
  return (
    <label
      className={`relative inline-flex cursor-pointer items-center ${labelContainerClass}`}
    >
      <input
        type="checkbox"
        name={name}
        checked={checkedValue}
        className="peer sr-only"
        onClick={handleToggle}
      />
      <div
        className={`${switchContainerClass} peer flex h-10 items-center gap-4 rounded-full w-[145px]
        px-3 after:absolute after: after:-left-1 after:h-10 after:w-[75px] after:rounded-full
      after:bg-[#FF7914] ${ checkedValue ? "after:content-[attr(data-content-right)] "
      : "after:content-[attr(data-content-left)]"} after:text-[#fff] after:transition-all 
        after:flex after:items-center after:justify-center pl
        peer-checked:after:translate-x-full peer-focus:outline-none
        text-sm text-[#686868] bg-[#F2F8FF]
        
        `}
        data-content-left={labelLeft} // Added data attributes for dynamic content
        data-content-right={labelRight}
      >
        <span>{labelLeft}</span>
        <span>{labelRight}</span>
      </div>
    </label>
  );
};

Switch.propTypes = {
  name: PropTypes.string,
  labelLeft: PropTypes.string,
  labelRight: PropTypes.string,
  checkedValue: PropTypes.bool,
  handleToggle: PropTypes.func,
  labelContainerClass: PropTypes.string,
  switchContainerClass: PropTypes.string,
};

export default Switch;
