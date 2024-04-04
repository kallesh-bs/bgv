import React, { useEffect, useRef, useState } from "react";
import ProfileButon from "./ProfileButon";
import SideBar from "./Sidebar";
import ChatBar from "./ChatBar";
import { NavLink, useLocation } from "react-router-dom";
import MailBar from "./MailBar";
import { awsURL } from "utils/Constants";

export default function Index() {
  const divRef = useRef(null);
  const [isProfileMenuHidden, setIsProfileMenuHidden] = useState(false);
  const location = useLocation();
  const [isHidden, setHidden] = useState("hidden");
  const path = location.pathname.split("/")[1];
  const toggleProfileMenu = () => {
    setIsProfileMenuHidden(!isProfileMenuHidden);
    if (isHidden === "") {
      setHidden("hidden");
    } else {
      setHidden("");
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (divRef.current && !divRef.current.contains(event.target)) {
        setHidden("hidden");
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => document.addEventListener("click", handleClickOutside);
  }, []);

  return (
    <aside className="w-[13.813rem] h-screen pt-[23px] pb-5 flex flex-col space-y-6 bg-[#031B59]">
      <div className="basis-[2%] w-full flex justify-center items-center cursor-pointer">
        <NavLink to="/dashboard">
          <button className="flex items-center" type="submit">
            <img
              className={`w-[8.386rem] h-[2.875rem]`}
              src={`${awsURL}/images/logo_white.png`}
              alt="Company Logo"
            />
          </button>
        </NavLink>
      </div>
      <div className="basis-[93%] border-none w-full h-full overflow-y-scroll scrollbar-white">
        {path === "chat" ? (
          <ChatBar />
        ) : path === "Email" ? (
          <MailBar />
        ) : (
          <SideBar />
        )}
      </div>
      <div
        ref={divRef}
        className="basis-[5%] w-full h-[3.5rem] flex space-x-2 justify-center text-white"
      >
        <ProfileButon
          onClick={toggleProfileMenu}
          isProfileMenuHidden={isProfileMenuHidden}
          isHidden={isHidden}
        />
      </div>
    </aside>
  );
}
