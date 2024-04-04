import React from "react";
import PropTypes from "prop-types";

const UserAvatar = ({
  name,
  imageUrl,
  containerClass,
}) => {
  return (
    <div
      className={`${containerClass} flex text-bold justify-center items-center
        rounded-full w-[50px] h-[50px] text-[#fff] bg-[#031b59]`}
    >
      {imageUrl ? (
        <img src={imageUrl} className="rounded-full w-[50px] h-[50px]" alt="avatar" />
      ) : (
        name.charAt(0).toUpperCase()
      )}
    </div>
  );
};

export default UserAvatar;

UserAvatar.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  containerClass: PropTypes.string,
};
