import React from "react";
import PropTypes from "prop-types";

const AnimatedButton = ({ handleClick, children }) => {
  return (
    <div className="demo-list">
      <div className="demo">
        <p
          className=" button h-[55px] text-white rounded-[10px] flex
              items-center justify-center text-lg  animated_button"
          onClick={handleClick}
        >
          {children}
        </p>
      </div>
    </div>
  );
};

export default AnimatedButton;

AnimatedButton.propTypes = {
  handleClick: PropTypes.func,
  children: PropTypes.any,
};
