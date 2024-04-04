import React, { useEffect, useRef, useState } from "react";
import SectionHeadings from "component/publicPage/home/SectionHeadings";
import { serviceScrollData } from "component/publicPage/Constants";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

function ServiceTabCard({ type }) {
  const [activetab, setActiveTab] = useState(1);
  const [width, setWidth] = useState(0);
  const [data, setData] = useState([]);
  const sections = useRef([]);
  const { t } = useTranslation();

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust this value to suit your needs
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(parseInt(entry.target.id));
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    sections.current.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [width]);

  useEffect(() => {
    if (serviceScrollData) {
      const matchedData = serviceScrollData.filter((obj) =>
        window.location.pathname.includes(obj.path)
      );
      setWidth(73.125 / matchedData[0]?.tabs[type].length);
      setData(matchedData);
    }
  }, [serviceScrollData]);

  return (
    <div
      className="scrollable w-[100vw] h-full flex flex-col justify-center
    items-center gap-8 py-[82px] bg-[#F9FAFB]"
    >
      <SectionHeadings
        headingPart1={`${t(data[0]?.headingPart1)}`}
        headingPart2={`${t(data[0]?.headingPart2)}`}
        subHeading={`${t(data[0]?.subHeading)}`}
      />
      <div
        className="w-full h-auto flex flex-col justify-center
      items-center gap-12 max-w-[1170px]"
      >
        <div className="flex w-full md:justify-between overflow-x-auto overflow-y-hidden no-scrollbar">
          {data[0]?.tabs[type]?.map((obj) => (
            <a
              href={obj.href}
              onClick={() => setActiveTab(obj.id)}
              className={`border-b-2 px-[1.625rem] py-2 w-full text-nowrap ${
                activetab === obj.id
                  ? "border-b-[#031B59] text-[#031B59] font-bold"
                  : "border-b-[#DCDCDC] text-[#646978] font-normal"
              } flex justify-center items-center`}
              key={obj.id}
            >
              {`${t(obj.name)}`}
            </a>
          ))}
        </div>
        <div className="h-[380px] sm:h-80 flex flex-col overflow-y-auto gap-8">
          {data[0]?.tabs[type]?.map((item) => (
            <div
              className="lg:w-[140rem] flex flex-row justify-center items-center px-6"
              ref={(el) => (sections.current[item.id - 1] = el)}
              id={item.id}
              key={item.id}
            >
              <div
                className="section max-w-[60rem] w-full bg-[#031B59] rounded-2xl px-2 lg:px-[40px]
              py-[60px] flex flex-col justify-center items-center gap-5"
              >
                {type === "iconType" && (
                  <div className="background-animate rounded-[2rem] p-[0.08rem]">
                    <img
                      className="bg-[#031B59] rounded-[2rem] p-3"
                      src={item.icon}
                    />
                  </div>
                )}
                <p
                  className={`${
                    type === "iconType" ? "text-white" : "text-[#ED6E0F]"
                  } font-bold`}
                >{`${t(item.name)}`}</p>
                <p className="text-white font-normal text-center">
                  {`${t(item.content)}`}
                </p>
                {type === "textType" && (
                  <div className="w-full flex  gap-4 items-center justify-center flex-wrap">
                    {item?.buttons?.map((btn, index) => (
                      <div
                        key={index}
                        className="text-white font-medium text-[0.875rem] w-[6.675rem]
                      border border-white flex flex-row items-center h-fit
                      justify-center py-[0.38rem] px-2 lg:px-[1.25rem] rounded-[1.125rem]"
                      >
                        {btn}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServiceTabCard;

ServiceTabCard.propTypes = {
  type: PropTypes.string,
};
