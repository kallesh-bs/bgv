import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import apiUrl from "api/apiUrl";
import { setServiceAvailableData } from "../../../redux/actions/action";
import { useTranslation } from "react-i18next";
import swalService from "utils/SwalServices";
import SectionHeadings from "./SectionHeadings";
import ServiceCard from "component/common/ServiceCard";
import Helper from "api/Helper";
import ServiceFullStackSvg from "svgComponents/ServiceFullStackSvg";
import ServiceWebDsgnSvg from "svgComponents/ServiceWebDsgnSvg";
import ServiceFundSvg from "svgComponents/ServiceEcomSvg";
import ServiceFundRaisSvg from "svgComponents/ServiceFundRaisSvg";

const Services = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchServiceData = async () => {
      const path = apiUrl.serviceAvailable;
      try {
        const { response } = await Helper.get(path);
        dispatch(setServiceAvailableData(response));
      } catch (error) {
        swalService.showError({
          title: "Error",
        });
        swalService.showError({ title: "Error during fetch data!" });
      }
    };

    fetchServiceData();
  }, [dispatch]);

  return (
    <div
      className="w-full h-fit lg:py-[85px] lg:px-[135px] px-[35px] py-[100px] gap-[46px]
     flex flex-wrap flex-col justify-center items-center"
    >
      {/* Headings */}
      <SectionHeadings
        headingPart1={t("services")}
        headingPart2={t("weOffer")}
        subHeading={t("expertise")}
      />
      {/* Cards Component */}
      <div className="w-full flex items-center justify-center">
        <div className="w-full grid grid-cols-1 gap-4 md:grid md:grid-cols-2 xl:grid xl:grid-cols-4">
          <ServiceCard
            link="/services/fullstack-development"
            imageUrl={<ServiceFullStackSvg />}
            alt="fullstack"
            title={t("fullStackDevelopment")}
            description={t("our_full_stack_developers")}
          />
          <ServiceCard
            link="/services/web-design"
            imageUrl={<ServiceWebDsgnSvg />}
            alt="webdesign"
            title={t("WebDesign")}
            description={t("web_design_data")}
          />
          <ServiceCard
            link="/services/ecommerce-development"
            imageUrl={<ServiceFundSvg />}
            alt="ecommerce"
            title={t("eCommerce")}
            description={t("ecom_data")}
          />
          <ServiceCard
            link="/services/fundraising-software-development"
            imageUrl={<ServiceFundRaisSvg />}
            alt="fundraising"
            title={t("fundraisingPlatform")}
            description={t("fundraising_data")}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
