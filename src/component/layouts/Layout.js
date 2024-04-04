import React from "react";
import Sidebar from "../sidebar/index";
import MainSidebar from "../sidebar/MainSidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Layout = () => {
  const isOpenDialogBoxToggle = useSelector(
    (state) => state.popUpDialogBox.isShowDialogBox
  );
  const isShowDisableDialogBox = useSelector(
    (state) => state.popUpDialogBox.isShowDisableDialogBox
  );

  return (
    <div >
      {(isOpenDialogBoxToggle || isShowDisableDialogBox) && (<div className="h-full w-full overflow-y-hidden
      top-0 left-0 tail-roboto  bg-[rgba(3,26,89,0.23)] fixed z-40" />)}
      <div className="fixed flex">
        <MainSidebar />
        <Sidebar />
      </div>
      <div
        className={`h-full basis-3/4 font-Roboto ml-[17.38rem] flex flex-col flex-grow space-y-2 items-center`}
      >
        <Header />
        <div className="flex flex-col items-center justify-center w-full pb-[0.5rem] overflow-x-hidden">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
