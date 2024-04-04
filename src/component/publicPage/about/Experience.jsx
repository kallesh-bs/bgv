import ComponentWrapper from "component/common/ComponentWrapper";
import React from "react";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();

  return (
    <ComponentWrapper>
      <div className="w-full flex justify-center items-center">
        <div
          className="w-fit grid grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-8 xl:gap-16"
        >
          <div className="w-fit flex items-center">
            <span className="text-[42px] font-medium">
              <span className="bg-[#F9DADA] px-1">4</span>7 +
            </span>
            <div>
              <h3 className="text-lg text-[#646978] ml-6">{t("projectCompleted")}</h3>
            </div>
          </div>
          <div className="w-fit flex items-center">
            <span className="w-full text-[42px] font-medium">
              <span className="bg-[#F9F7DA] px-1">3</span>9 +
            </span>
            <div className='w-full flex whitespace-nowrap' >
              <h3 className="w-full text-lg text-[#646978] ml-6">{t("satisfiedClients")}</h3>
            </div>
          </div>
          <div className="sm:col-span-2 lg:col-span-1 w-full flex items-center justify-center">
            <div className="w-fit flex items-center ">
              <span className="text-[42px] font-medium">
                <span className="bg-[#DAF9E8] px-1">0</span>2 +
              </span>
              <div>
                <h3 className="text-lg text-[#646978] ml-6">{t("yearsExperience")}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Experience;
