import React, { useRef } from "react";
import ProfileMenu from "./ProfileMenu";
import { AiOutlineRight } from "react-icons/ai";
import PropTypes from 'prop-types';
import { awsURL } from "utils/Constants";

export default function ProfileButon({ onClick, isHidden }) {
  const profileMenuRef = useRef(null);
  const userData = JSON.parse(localStorage.getItem("userLoginToken"));

  return (
    <button
      className="relative w-full h-full px-1 space-x-4 flex items-center justify-center"
      onClick={onClick}
      ref={profileMenuRef}
    >
      <div
        className={`basis-1/2 w-full h-full flex justify-center items-center space-x-4`}
      >
        <img
          className="h-[2.75rem] w-[2.75rem] flex items-center border-2 border-white rounded-full "
          src={userData?.profile_picture ? userData?.profile_picture : `${awsURL}/images/profile_logo.png`}
          alt="Profile Avatar"
        />
      </div>
      <ProfileMenu isHidden={isHidden} />
      <div className={`w-full h-full flex items-center space-x-4`}>
        <p
          className={`w-full flex whitespace-nowrap delay-100 transition-colors ease-in-out `}
        >
          {userData?.full_name}
        </p>
        <div className="basis-1/5 w-fit ityems-center justify-end">
          <AiOutlineRight
            className={`${
              isHidden
                ? " rotate-0 delay-150 duration-300 ease-linear"
                : "-rotate-90 delay-150 duration-300 ease-linear"
            }`}
          />
        </div>
      </div>
    </button>
  );
}

ProfileButon.propTypes = {
  onClick: PropTypes.func,
  isHidden: PropTypes.string,
};
