import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "component/publicPage/home/Footer";
import AddressImagesFooter from "component/publicPage/home/AddressImagesFooter";
import Header from "component/publicPage/home/Header";

export default function LayoutWeb() {
  const [showDropdown, setShowDropdown] = useState({
    services: false,
    industries: false,
    portfolio: false,
  });

  const handleDropdownOpen = (val, type) => {
    if (type === "services") {
      setShowDropdown({ industries: false, services: val, portfolio: false });
    } else if (type === "industries") {
      setShowDropdown({ services: false, industries: val, portfolio: false });
    } else {
      setShowDropdown({ services: false, industries: false, portfolio: val });
    }
  };

  return (
    <div className="w-[100%] h-[100%] flex flex-col overflow-x-hidden overflow-hidden font-Nunito">
      <Header showDropdown={showDropdown} handleDropdownOpen={handleDropdownOpen} />
      <div className="w-full h-full flex flex-col items-center justify-center bg-[#F9FAFB] overflow-hidden">
        <Outlet />
      </div>
      <div className="w-full flex flex-col gap-0">
        <AddressImagesFooter />
        <Footer handleDropdownOpen={handleDropdownOpen} />
      </div>
    </div>
  );
}
