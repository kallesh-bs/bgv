/* eslint-disable max-len */
import { ServicesPageData } from "component/publicPage/Constants";
import SectionHeadings from "component/publicPage/home/SectionHeadings";
import React from "react";
import { useTranslation } from "react-i18next";
import "styles/App.css";

const WhatDoesItTake = () => {
  const { t } = useTranslation();

  return (
    <>
      {ServicesPageData?.map(
        (obj, index) =>
          window.location.pathname.includes(obj.path) && (
            <div key={index} className="bg-[#F3F6FD] py-[82px] w-full">
              <div className="flex items-center justify-center pb-[46px]">
                <SectionHeadings
                  headingPart1={`${t(obj.progressCardHeading1)}`}
                  headingPart2={`${t(obj.progressCardHeading2)}`}
                  subHeading={`${t(obj.progressSubHeading)}`}
                />
              </div>
              <div className="w-full">
                {/* first slide box */}
                <div>
                  {/* slide image */}
                  <div className="flex flex-col gap-20">
                    <div className=" pl-[20%]">
                      <div className="rounded-l-[200px] marquee-left bg-[#F9FAFB] shadow-md p-[30px] overflow-hidden">
                        <div className="flex translate">
                          <div className="flex">
                            {obj.data.map((item) => (
                              <div
                                key={item.id}
                                className=" flex items-center justify-center"
                              >
                                <div
                                  className="circle flex h-[150px] w-[150px] rounded-[50%]
                          justify-center items-center px-[20px] py-[30px] hover:shadow-2xl"
                                >
                                  <div className="flex flex-col items-center justify-center gap-[10px]">
                                    <div>
                                      <item.icon />
                                    </div>
                                    <h1
                                      className="text-center items-stretch text-[#031B59]
                                font-[Nunito] font-semibold text-[14px] "
                                    >{`${t(item.name)}`}</h1>
                                  </div>
                                </div>
                                {<obj.line />}
                              </div>
                            ))}
                          </div>
                          <div className="flex">
                            {obj.data.map((item) => (
                              <div
                                key={item.id}
                                className=" flex items-center justify-center"
                              >
                                <div
                                  className="circle flex h-[150px] w-[150px] rounded-[50%]
                          justify-center items-center px-[20px] py-[30px] hover:shadow-2xl"
                                >
                                  <div
                                    className="flex flex-col items-center justify-center gap-[10px]
                                    "
                                  >
                                    <div>
                                      <item.icon />
                                    </div>
                                    <h1
                                      className="text-center items-stretch text-[#031B59]
                                font-[Nunito] font-semibold text-[14px] "
                                    >{`${t(item.name)}`}</h1>
                                  </div>
                                </div>
                                {<obj.line />}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* slide image */}
                    <div className="pr-[20%]">
                      <div className="rounded-r-[200px] marquee-right bg-[#F9FAFB] shadow-md p-[30px] overflow-hidden">
                        <div className="flex translate">
                          <div className="flex">
                            {obj.data2.map((item) => (
                              <div
                                key={item.id}
                                className=" flex items-center justify-center"
                              >
                                <div
                                  className="circle flex h-[150px] w-[150px] rounded-[50%]
                          justify-center items-center px-[20px] py-[30px] hover:shadow-2xl"
                                >
                                  <div className="flex flex-col items-center justify-center gap-[10px]">
                                    <div>
                                      <item.icon />
                                    </div>
                                    <h1
                                      className="text-center items-stretch text-[#031B59]
                                font-[Nunito] font-semibold text-[14px] "
                                    >{`${t(item.name)}`}</h1>
                                  </div>
                                </div>
                                {<obj.line />}
                              </div>
                            ))}
                            <div className="flex">
                              {obj.data2.map((item) => (
                                <div
                                  key={item.id}
                                  className=" flex items-center justify-center"
                                >
                                  <div
                                    className="circle flex h-[150px] w-[150px] rounded-[50%]
                          justify-center items-center px-[20px] py-[30px] hover:shadow-2xl"
                                  >
                                    <div className="flex flex-col items-center justify-center gap-[10px]">
                                      <div>
                                        <item.icon />
                                      </div>
                                      <h1
                                        className="text-center items-stretch text-[#031B59]
                                font-[Nunito] font-semibold text-[14px] "
                                      >{`${t(item.name)}`}</h1>
                                    </div>
                                  </div>
                                  {<obj.line />}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
      )}
    </>
  );
};

export default WhatDoesItTake;
