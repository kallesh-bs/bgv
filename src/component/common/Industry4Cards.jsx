import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { IndustryPagedata } from "utils/constant/industrydata";

function Industry4Cards() {
  const path = window.location.pathname.split("/");
  const [data, setData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useTranslation();
  const pathss = ["education", "real-estate"];
  const [total, setTotal] = useState([]);
  const [showData, setShowData] = useState([]);

  useEffect(() => {
    const filteredData = IndustryPagedata.filter((obj) =>
      path.includes(obj.path)
    );
    setData(filteredData[0]);
    filteredData[0]?.benefitData?.map(
      (obj, index) =>
        index % 4 === 0 && setTotal((prevState) => [...prevState, index])
    );
  }, []);

  useEffect(() => {
    setShowData(
      data?.benefitData?.filter(
        (obj, index) =>
          index < (activeIndex + 1) * 4 && index >= activeIndex * 4
      )
    );
  }, [activeIndex, data]);

  return (
    <div className="w-full h-fit flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div
          className={`w-full h-[50rem] relative ${data.benefit_Classname} 
          p-[5.94rem] gap-[0.75rem] flex flex-col items-center md:items-start justify-center text-center`}
        >
          <h2
            className={`text-[3rem] z-[2] font-bold leading-[3.5rem] flex 
            flex-col items-center md:items-start justify-start ${
    pathss.includes(data.path) ? "text-[#031B59]" : "text-[#fff]"
    } font-raleway`}
          >
            <span>{t("customBenefit")}</span>
            <span
              className={`${
                pathss.includes(data.path) ? "text-[#ED6E0F]" : "text-[#031B59]"
              }`}
            >
              {data.benefit_heading}{" "}
              <span
                className={`${
                  pathss.includes(data.path) ? "text-[#ED6E0F]" : "text-[#fff]"
                }`}
              >
                {t("software")}
              </span>
            </span>
          </h2>
          <p
            className={` z-[20] text-[1rem] leading-[1.375rem] text-center md:text-start
            ${
    pathss.includes(data.path) ? "text-[#242529]" : "text-[#fff]"
    } font-nunito`}
          >
            {data.benefit_desc}
          </p>
          <div
            className="z[1] opacity-50 mix-blend-screen bg-[#031B59]
           w-full h-[50rem] absolute left-[0rem]"
          ></div>
        </div>
        <div
          className="w-full h-[50rem] p-[6rem]
        gap-[2.55rem] flex flex-col items-center justify-between cards-tab-gap"
        >
          <div className="flex flex-col items-center justify-center gap-[3.5rem] cards-gap">
            {showData?.map(
              (obj, index) =>
                index < 4 && (
                  <div
                    key={index}
                    className="w-full h-fit flex items-start justify-center gap-[1.5rem]"
                  >
                    {obj.icon}
                    <div className="flex flex-col items-start gap-[0.75rem]">
                      <h2
                        className="text-[1.5rem] text-[#031B59] leading-[2rem]
              font-raleway font-bold"
                      >
                        {obj.title}
                      </h2>
                      <p className="text-[#646978] font-nunito leading-[1.375rem]">
                        {obj.desc}
                      </p>
                    </div>
                  </div>
                )
            )}
          </div>
          <div className="w-full max-w-[11rem] h-[0.25rem] bg-[#DCDCDC] flex">
            {total.map((obj, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                style={{ width: `${Number(11 / total.length)}rem` }}
                className={`${
                  activeIndex === index && "bg-[#ED6E0F]"
                } h-[0.25rem] cursor-pointer`}
              ></div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div
          className="w-full h-full p-[5.25rem]
        gap-[2.75rem] flex flex-col items-center justify-center why_choose_us order-2 md:order-1"
        >
          {data?.whyChooseUsData?.map((obj, index) => (
            <div key={index} className="w-full max-w-[35.65rem] flex">
              <div className="w-[1.5rem] h-[0.15rem] bg-[#ED6E0F] mt-[0.7rem] mr-[1rem]"></div>
              <div>
                <h2
                  className="font-bold text-[1.5rem] font-raleway
                leading-[2rem] text-[#031B59]"
                >
                  {obj.title}
                </h2>
                <p className="text-[1rem] leading-[1.375rem] text-[#646978] pt-[0.75rem]">
                  {obj.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full h-[50rem] why_choose_us_bg order-1 md:order-2"></div>
      </div>
    </div>
  );
}

export default Industry4Cards;
