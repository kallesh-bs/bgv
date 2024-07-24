import React from "react";
import PropTypes from "prop-types";
import { getColorFromFullName, profileName } from "utils/CommonFunctions";

const ProfileAvtar = ({
  src,
  name,
  height = "3rem",
  width = "3rem",
  bgImgColor = "",
  customClass = "",
  textColor = "white",
}) => {
  return (
    <>
      {src ? (
        <img
          className={` h-[${height}] w-[${width}] flex items-center   border border-[white] rounded-full`}
          src={src}
          alt="Profile Avatar"
        />
      ) : (
        <div
          className={`text-[${textColor}] flex h-[${height}] w-[${width}]
         items-center justify-center border border-[white] rounded-full
        ${customClass}`}
          style={{
            backgroundColor: bgImgColor
              ? bgImgColor
              : getColorFromFullName(name),
          }}
        >
          {profileName(name)}

        </div>
      )}
    </>
  );
};

export default ProfileAvtar;

ProfileAvtar.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
  bgImgColor: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  customClass: PropTypes.string,
  textColor: PropTypes.string,
  border: PropTypes.string,
};
