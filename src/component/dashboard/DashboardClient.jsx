import React from "react";
// import ClientGraph from '../dashboard copy/ClientGraph';
import ClientGraph from "./ClientGraph";
import HeroCard from "./HeroCard";

const DashboardClient = () => {
  return (
    <div className="flex flex-wrap justify-center w-[96%] bg-none h-fit">
      <div
        className="h-full w-full grid grid-cols-2
        grid-flow-dense xl:grid xl:grid-cols-3 gap-8 text-white rounded-[20px]"
      >
        <HeroCard heroClass={"xl:col-span-3 rounded-[20px] bg-[#9FB6F9]"} />
        <div className="w-full h-full col-span-3  flex">
          <ClientGraph />
        </div>
      </div>
    </div>
  );
};

export default DashboardClient;
