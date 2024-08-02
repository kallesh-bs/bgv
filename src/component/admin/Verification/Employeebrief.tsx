import ProfileAvtar from "component/common/ProfileAvatar";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { MdChatBubble } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { IEmployeebriefProps } from "utils/types";

const Employeebrief: React.FC<IEmployeebriefProps> = ({
  names,
  email,
  userName,
  userEmail,
  id,
  empcode,
  imageUrl,
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [clientHover, setClientHover] = useState<boolean>(false);
  const data1 = window.location.pathname;
  const emailName = email?.split("@")[0] || "";

  return (
    <div
      className="relative w-full flex justify-start items-center space-x-[10px]"
      onMouseEnter={() => setClientHover(true)}
      onMouseLeave={() => setClientHover(false)}
    >
      {(userEmail && !names) || (email && userEmail && names) ? (
        <div className="w-12 h-12">
          {imageUrl ? (
            <img
              className="w-full h-full object-cover flex items-center border-2 border-white rounded-full"
              src={imageUrl}
              alt="Profile Avatar"
            />
          ) : (
            <ProfileAvtar
              height="3rem"
              width="3rem"
              name={names || emailName}
            />
          )}
        </div>
      ) : null}

      <div
        className="flex flex-col items-start space-y-[2px] cursor-pointer"
        onClick={() => {
          // if (id && data1.includes("status")) {
          //   navigate(`/timeSheet/view/${id}`);
          // }
        }}
      >
        <h6 className="font-semibold">{names || emailName}</h6>
        <p className="text-[#A1A1A1] text-sm">{empcode}</p>
        <p className="text-[#A1A1A1] text-sm">{email}</p>
      </div>

      {userEmail && userName && clientHover && (
        <div className="absolute left-[10rem] bottom-[.1rem] p-4 hidden w-[20rem] z-20 h-[8rem] items-center justify-center bg-white rounded-lg shadow-[0px_0px_20px_0px_rgba(3,27,89,0.10)]">
          <div className="w-full flex gap-2 p-[10px]">
            <div className="h-[54px] w-[54px] object-cover">
              {imageUrl ? (
                <img
                  className="w-full h-full object-cover flex items-center border-2 border-white rounded-full"
                  src={imageUrl}
                  alt="Profile Avatar"
                />
              ) : (
                <ProfileAvtar
                  height="3rem"
                  width="3rem"
                  name={names || emailName}
                />
              )}
            </div>
            <div className="flex flex-col items-start space-y-[2px]">
              <h6 className="text-[#191919] font-semibold">{userName}</h6>
              <p className="text-[#A1A1A1] text-sm">{userEmail}</p>
            </div>
          </div>
          <div className="w-full flex flex-col justify-between items-center">
            <hr className="w-[85%]" />
            <div className="w-full h-11 flex items-center justify-center">
              <button
                className="h-[26px] w-[71px] flex items-center justify-center border space-x-1 border-[#DFE1E3] rounded"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                data-testid="chat-button"
              >
                <MdChatBubble className="h-4 w-4 mt-[1px] fill-[#DFE1E3]" />
                <span className="text-xs">{t("chat")}</span>
              </button>
            </div>
            {isHovered && (
              <div className="p-2 text-sm bg-white rounded-lg shadow-[10px_10px_40px_10px_rgba(3,27,89,0.10)]">
                <p>Chat App is under Development</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Employeebrief;
