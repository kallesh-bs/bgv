import React from "react";
import PropTypes from "prop-types";

const LoadingButton = ({ disable, isSubmitting, title, loadingBtnClass }) => {
  return (
    <button
      className={`h-[3.063rem] rounded-full w-full lg:w-full hover:scale-105 text-white text-lg bg-[#23275E]
      ${loadingBtnClass}`}
      type="submit"
      disabled={disable}
    >
      {isSubmitting ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-white"></div>
        </div>
      ) : (
        title
      )}
    </button>
  );
};

LoadingButton.propTypes = {
  isSubmitting: PropTypes.bool,
  title: PropTypes.string,
  loadingBtnClass: PropTypes.string,
  disable: PropTypes.bool,
};

export default LoadingButton;
