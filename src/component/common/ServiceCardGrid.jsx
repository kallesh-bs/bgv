import SectionHeadings from "component/publicPage/home/SectionHeadings";
import React from "react";
import "../../styles/App.css";
import { ServiceCardData } from "component/publicPage/Constants";
import { useTranslation } from "react-i18next";

const ServiceCardGrid = () => {
  const { t } = useTranslation();

  return (
    <>
      {ServiceCardData.map(
        (obj, index) =>
          window.location.pathname.includes(obj.path) && (
            <div
              className="flex flex-col w-full h-fit bg-[#F3F6FD] sm:px-[4.4375rem] py-[5.125rem] px-[1rem]
    gap-[2.875rem] justify-center items-center"
              key={index}
            >
              <div className="flex justify-center items-center ">
                <SectionHeadings
                  headingPart1={`${t(obj.heading1)}`}
                  headingPart2={`${t(obj.headingPart2)}`}
                  subHeading={`${t(obj.subHeading)}`}
                />
              </div>
              <div className="w-full max-w-[73.125rem] flex items-center justify-center gap-[2.875rem]">
                <div
                  className="w-fit grid grid-cols-1 gap-4 md:grid items-center md:grid-cols-1 xl:grid
            xl:grid-cols-2 justify-center cursor-pointer"
                >
                  {obj.data.map((item, index) => {
                    return (
                      <div
                        className="w-fit h-fit min-h-[13rem] max-w-[40rem] gap-[1.125rem] flex
                     flex-col items-start lg:flex-row  lg:justify-center lg:items-center p-[1.875rem]
        rounded-[1.125rem] hoverEffect border shadow-md bg-white "
                        key={index}
                      >
                        <div className=" justify-center flex">
                          <item.logo />
                        </div>
                        <div>
                          <h2 className="font-Raleway font-bold text-[#031B59]">
                            {`${t(item.heading)}`}
                          </h2>
                          <h2 className="text-base font-normal">
                            {`${t(item.solution)}`}
                          </h2>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )
      )}
    </>
  );
};

export default ServiceCardGrid;
