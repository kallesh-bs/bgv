import React from "react";
import { useNavigate } from "react-router-dom";
import { content } from "../../utils/constant/Content";
import { FiUser, FiSettings } from "react-icons/fi";
import { MdPowerSettingsNew } from "react-icons/md";
import swalService from "../../utils/SwalServices";
import PropTypes from "prop-types";
import { GoVersions } from "react-icons/go";
import { useDispatch } from "react-redux";
import { handleUpdateStatus } from "redux/appThunk/Employee/chat";

export default function ProfileMenu({ isHidden }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("userLoginToken"));

  const handlelogOut = async () => {
    dispatch(handleUpdateStatus(false));
    localStorage.clear();
    swalService.showSuccess({
      icon: "success",
      title: "Logout Successfully!",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/");
  };

  return (
    <nav
      className={`${isHidden} w-[88%] h-fit absolute right-[0.7rem] bottom-[3.2rem]
        text-white shadow-[3px_2px_8px_5px_rgb(3,27,89,0.1)] bg-[#3D5492]
        transition-colors delay-120 ease-linear rounded-md `}
    >
      <ul className="w-full p-2 flex flex-col items-center ">
        <li className="w-full h-[2.438rem] flex justify-start hover:bg-white/10 items-center bg-[#3D5492]">
          <button
            className={`w-full h-full p-3 space-x-4 flex justify-start items-center rounded`}
            onClick={() => {
              userData.role === "admin"
                ? navigate("/companyProfile")
                : navigate("/profileBasics");
            }}
          >
            <FiUser
              className={`h-[1.25rem] w-[1.25rem] ${
                isHidden ? "scale-125" : ""
              }`}
            />
            <p
              className={`${
                isHidden ? "hidden justify-center" : "flex justify-start"
              } items-center hover-blue-800 w-full h-full`}
            >
              {userData?.role === "admin"
                ? content.Companyprofile
                : content.profile}
            </p>
          </button>
        </li>
        {userData?.role === "admin" && (
          <li
            className={`w-full h-[2.438rem] hover:bg-white/10 items-center bg-[#3D5492]`}
          >
            <button
              className={`w-full h-full p-3 space-x-4 flex ${
                isHidden ? "justify-center" : "justify-start"
              } items-center rounded`}
              onClick={() => {
                navigate("/settings");
              }}
            >
              <FiSettings
                className={`h-[1.25rem] w-[1.25rem] ${
                  isHidden ? "scale-125" : ""
                }`}
              />
              <p
                className={`${
                  isHidden ? "hidden justify-center" : "flex justify-start"
                } items-center hover-blue-800 w-full h-full`}
              >
                {content.settings}
              </p>
            </button>
          </li>
        )}
        {userData?.role === "admin" && (
          <li
            className={`w-full h-[2.438rem] hover:bg-white/10 items-center bg-[#3D5492]`}
          >
            <button
              className={`w-full h-full p-3 space-x-4 flex ${
                isHidden ? "justify-center" : "justify-start"
              } items-center rounded`}
              onClick={() => {
                navigate("/version");
              }}
            >
              <GoVersions
                className={`h-[1.25rem] w-[1.25rem] ${
                  isHidden ? "scale-125" : ""
                }`}
              />
              <p
                className={`${
                  isHidden ? "hidden justify-center" : "flex justify-start"
                } items-center hover-blue-800 w-full h-full`}
              >
                {/* {content.version} */}
                Version
              </p>
            </button>
          </li>
        )}
        <li className="w-full h-[2.438rem] flex justify-start hover:bg-white/10 items-center bg-[#3D5492]">
          <button
            title="Logout"
            className={`w-full h-full p-3 space-x-4 flex justify-start items-center bg-[#031B59] rounded`}
            onClick={handlelogOut}
          >
            <MdPowerSettingsNew className={`h-[1.25rem] w-[1.25rem]`} />
            <p
              className={`flex justify-start items-center hover-blue-800 w-full h-full`}
            >
              {content.logout}
            </p>
          </button>
        </li>
      </ul>
    </nav>
  );
}

ProfileMenu.propTypes = {
  isHidden: PropTypes.string,
};
