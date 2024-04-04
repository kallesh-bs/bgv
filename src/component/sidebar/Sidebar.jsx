import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SidebarButton from "./SidebarButton";
import { SidebarLink } from "./SidebarLinks";

const SideBar = () => {
  const location = useLocation();
  const [Location, setLocation] = useState("");
  const getCurrentlocation = () => {
    const pathname = location.pathname;
    setLocation(pathname);
  };
  useEffect(() => {
    getCurrentlocation();
  });
  const isActive = (match) => {
    return match === Location;
  };

  return (
    <div className="h-fit w-full z-20 flex">
      <div className="w-full h-full relative text-base text-white flex flex-col items-center">
        <nav className="h-full w-full overflow-hidden">
          {SidebarLink().map((obj) => (
            <SidebarButton
              key={obj.id}
              to={obj.to}
              icon={obj.icon}
              isActive={isActive(obj.to)}
              text={obj.text}
            />
          ))}
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
