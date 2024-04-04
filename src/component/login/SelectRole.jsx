import React, { useState } from "react";
import { content } from "../../utils/constant/Content";
import { RiUserSettingsLine, RiUserStarLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setSelectRole } from "../../redux/actions/action";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { awsURL } from "utils/Constants";

export default function SelectRole({ setIsRoleSelected }) {
  const dispatch = useDispatch();

  const handleContinue = (clickedRoleId) => {
    if (clickedRoleId !== undefined) {
      dispatch(setSelectRole(clickedRoleId));
      setIsRoleSelected(true);
    } else {
      Swal.fire({
        icon: "warning",
        text: "Please select role",
        showCancelButton: true,
      });
    }
  };

  const [userRole, setUserRole] = useState([
    {
      icon: RiUserSettingsLine,
      classname: "",
      content: content.admin,
      id: "admin",
      bgColor: "",
      iconColor: "fill-[#64748B]",
      textColor: "text-[#191919]",
    },
    {
      icon: AiOutlineUser,
      classname: "stroke-white",
      content: content.employee,
      id: "employee",
      bgColor: "",
      iconColor: "fill-[#64748B]",
      textColor: "text-[#191919]",
    },
    {
      icon: RiUserStarLine,
      classname: "",
      content: content.client,
      id: "client",
      bgColor: "",
      iconColor: "fill-[#64748B]",
      textColor: "text-[#191919]",
    },
  ]);

  const handleSelectRole = (e) => {
    const clickedRoleId = e.currentTarget.id;
    setUserRole((prevUserRole) => {
      return prevUserRole.map((obj) => ({
        ...obj,
        bgColor: obj.id === clickedRoleId ? "bg-[#031B59]" : "",
        iconColor:
          obj.id === clickedRoleId ? "fill-[#FFF!important]" : "fill-[#031B59]",
        textColor:
          obj.id === clickedRoleId ? "text-[#FFF!important]" : "text-[#031B59]",
      }));
    });

    handleContinue(clickedRoleId);
  };
  const { t } = useTranslation();

  return (
    <div className="h-screen lg:w-full w-full items-center px-2 flex gap-4 xl:gap-8 justify-center bg-white">
      <div
        className="xl:basis-2/6 lg:basis-3/6 w-full h-full lg:py-32 px-4 py-12 space-y-12 flex flex-col
        lg:items-start items-center lg:justify-center justify-start"
      >
        <img
          className=" w-[12.688rem] h-[4.5rem]"
          src={`${awsURL}/images/deeporion_logo.jpg`}
          alt="Company_logo"
        />
        <div className="h-full w-full md:w-4/5 lg:w-full flex flex-col space-y-12">
          <div>
            <h2 className="text-4xl font-semibold text-[#23275E] tracking-wide">
              {t(`${content.selectRole}`)}
            </h2>
            <div className="flex flex-row justify-between w-full text-[#333]">
              <h4>{content.appropriateRoles}</h4>
            </div>
          </div>
          <div className="h-fit w-full sm:grid sm:grid-cols-3 grid grid-cols-2 gap-6">
            {userRole?.map((obj) => (
              <button
                className={`h-[9.625rem] w-full border ${obj.bgColor} class${obj.id} border-[#E2E8F0] flex flex-col
                  space-y-1 items-center justify-center rounded-[15px] hover:bg-[#031B59] hover:scale-105 group 
                  xl:last:grid-cols-1 last:grid-cols-2`}
                key={obj.id}
                id={obj.id}
                onClick={handleSelectRole}
              >
                <obj.icon
                  className={`h-[1.813rem] w-[1.813rem] fill-[#031B59] group-hover:text-white
                    group-hover:fill-white ${obj.iconColor} ${obj.classname}`}
                  id={obj.id}
                />
                <p
                  className={`${obj.textColor} text-[#031B59] group-hover:text-white text-lg text-center group`}
                  id={obj.id}
                >
                  {t(`${obj.content}`)}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="w-fit h-full py-24 hidden xl:flex items-center text-[#031B59]">
        <img
          className="h-[27.938rem] w-[35.813rem]"
          src={`${awsURL}/images/role-bg.jpg`}
          alt="Background_image"
        />
      </div>
    </div>
  );
}

SelectRole.propTypes = {
  setIsRoleSelected: PropTypes.func,
};
