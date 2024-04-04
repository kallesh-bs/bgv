/* eslint-disable max-len */
import React from "react";
import AnalyticsSvg from "svgComponents/Fashion/AnalyticsSvg";
import CrmSvg from "svgComponents/Fashion/CrmSvg";
import InventorySvg from "svgComponents/Fashion/InventorySvg";
import OrderSvg from "svgComponents/Fashion/OrderSvg";
import CompetiveSvg from "svgComponents/Travel/CompetiveSvg";
import IntegratingTravelSvg from "svgComponents/Travel/IntegratingTravelSvg";
import ScalableTravelSvg from "svgComponents/Travel/ScalableTravelSvg";
import TrailoredSvg from "svgComponents/Travel/TrailoredSvg";
import IntegrationMobileSvg from "svgComponents/autoMobile/IntegrationMobileSvg";
import ScalableMobileSvg from "svgComponents/autoMobile/ScalableMobileSvg";
import TrailoredMobileSvg from "svgComponents/autoMobile/TrailoredMobileSvg";
import UserMobileSvg from "svgComponents/autoMobile/UserMobileSvg";
import DataAnalystSvg from "svgComponents/education/DataAnalystSvg";
import IntegrationSvg from "svgComponents/education/IntegrationSvg";
import LearningSvg from "svgComponents/education/LearningSvg";
import ScalableSvg from "svgComponents/education/ScalableSvg";
import CompilanceSvg from "svgComponents/healthCare/CompilanceSvg";
import IntegrationSysytemSvg from "svgComponents/healthCare/IntegrationSysytemSvg";
import ScalableSecureSvg from "svgComponents/healthCare/ScalableSecureSvg";
import UserFriendlySvg from "svgComponents/healthCare/UserFriendlySvg";
import Guestsvg from "svgComponents/hospitality/Guestsvg";
import IntegrationHospitalSvg from "svgComponents/hospitality/IntegrationHospitalSvg";
import OperationSvg from "svgComponents/hospitality/OperationSvg";
import ScalableHospitalSvg from "svgComponents/hospitality/ScalableHospitalSvg";
import EnhanceEstateSvg from "svgComponents/realEstate/EnhanceEstateSvg";
import ImproveEstateSvg from "svgComponents/realEstate/ImproveEstateSvg";
import ScalableEstateSvg from "svgComponents/realEstate/ScalableEstateSvg";
import TrailoresEstateSvg from "svgComponents/realEstate/TrailoresEstateSvg";
import { awsURL } from "utils/Constants";

export const IndustryPagedata = [
  {
    path: "healtcare",
    IndustryHeading1: "OurHealthcare",
    IndustryHeading2: "ItSevices",
    IndustrySubheading: "IndustrySubheading",
    data: [
      {
        id: 1,
        icon: `${awsURL}/images/WebMobileApp.png`,
        name: "webMobile",
        subHeading: "loremIndustrysub",
      },
      {
        id: 2,
        icon: `${awsURL}/images/WebDesign.png`,
        name: "HealthInstitution",
        subHeading: "loremIndustrysub",
      },
      {
        id: 3,
        icon: `${awsURL}/images/DataAnalytics.png`,
        name: "DataAnalysis",
        subHeading: "loremIndustrysub",
      },
      {
        id: 4,
        icon: `${awsURL}/images/Telemedicine.png`,
        name: "Telemedicine",
        subHeading: "loremIndustrysub",
      },
      {
        id: 5,
        icon: `${awsURL}/images/ElectronicHealth.png`,
        name: "ElectoHealth",
        subHeading: "loremIndustrysub",
      },
      {
        id: 6,
        icon: `${awsURL}/images/HealthcareCRM.png`,
        name: "CrmDevelop",
        subHeading: "loremIndustrysub",
      },
      {
        id: 7,
        icon: `${awsURL}/images/Hipaa.png`,
        name: "HipaaService",
        subHeading: "loremIndustrysub",
      },
      {
        id: 8,
        icon: `${awsURL}/images/CustomIt.png`,
        name: "CustomItmed",
        subHeading: "loremIndustrysub",
      },
    ],
    benefit_Classname: "industry_healthcare",
    benefit_heading: "Healthcare",
    benefit_desc:
      "Unlocking Efficiency, Precision, and Patient-Centric Care: Exploring the Advantages of Tailored Healthcare Software Solutions for Modern Medical Practices",
    benefitData: [
      {
        icon: <CompilanceSvg />,
        title: "Compliance with Healthcare Regulations",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <IntegrationSysytemSvg />,
        title: "Integration with Existing Systems",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <ScalableSecureSvg />,
        title: "Scalable and Secure Solutions",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <UserFriendlySvg />,
        title: "User-friendly Interfaces / Better Patient Interaction",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
    ],
    whyChooseUsData: [
      {
        title: "Extensive Experience in Healthcare IT",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
      {
        title: "Team of Expert Developers and Designers",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
      {
        title: "Tailored Solutions for Specific Healthcare Needs",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
      {
        title: "Proven Track Record of Delivering Quality Projects",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
    ],
  },
  {
    path: "fashion",
    IndustryHeading1: "OurFashion",
    IndustryHeading2: "ItSevices",
    IndustrySubheading: "IndustrySubheading",
    data: [
      {
        id: 1,
        icon: `${awsURL}/images/FashionSoftware.png`,
        name: "FashionSoftware",
        subHeading: "loremIndustrysub",
      },
      {
        id: 2,
        icon: `${awsURL}/images/DigitalTransfor.png`,
        name: "DigitalTransformation",
        subHeading: "loremIndustrysub",
      },
      {
        id: 3,
        icon: `${awsURL}/images/EcommerSolution.png`,
        name: "ECommerceSolutions",
        subHeading: "loremIndustrysub",
      },
      {
        id: 4,
        icon: `${awsURL}/images/DataManagement.png`,
        name: "DataManagement",
        subHeading: "loremIndustrysub",
      },
      {
        id: 5,
        icon: `${awsURL}/images/Cloudsevices.png`,
        name: "CloudServices",
        subHeading: "loremIndustrysub",
      },
      {
        id: 6,
        icon: `${awsURL}/images/Infrastructure.png`,
        name: "ItInfrastructure",
        subHeading: "loremIndustrysub",
      },
      {
        id: 7,
        icon: `${awsURL}/images/CyberSecurities.png`,
        name: "CybersecuritySolutions",
        subHeading: "loremIndustrysub",
      },
    ],
    benefit_Classname: "industry_fashion",
    benefit_heading: "Fashion",
    benefit_desc:
      "Unlocking Efficiency, Precision, and Patient-Centric Care: Exploring the Advantages of Tailored Healthcare Software Solutions for Modern Medical Practices",
    benefitData: [
      {
        icon: <AnalyticsSvg />,
        title: "Analytics and Reporting",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <CrmSvg />,
        title: "Customer Relationship Management (CRM):",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <InventorySvg />,
        title: "Inventory Management",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <OrderSvg />,
        title: "Order Processing",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
    ],
    whyChooseUsData: [
      {
        title: "Specialization",
        desc: "We specialize in creating software solutions specifically designed for the fashion industry, understanding its unique challenges and requirements.",
      },
      {
        title: "Technology Expertise",
        desc: "We leverage advanced technologies such as artificial intelligence, machine learning, and data analytics to deliver intelligent and scalable solutions.",
      },
      {
        title: "Customization",
        desc: "We offer customized solutions tailored to each client's needs, ensuring alignment with their business goals and objectives.",
      },
      {
        title: "Experienced Team",
        desc: "Our team comprises experienced professionals with deep industry knowledge, ensuring high-quality and reliable software solutions.",
      },
    ],
  },
  {
    path: "travel",
    IndustryHeading1: "OurTravel",
    IndustryHeading2: "ItSevices",
    IndustrySubheading: "IndustrySubheading",
    data: [
      {
        id: 1,
        icon: `${awsURL}/images/SoftwareCustomize.png`,
        name: "SoftwareCustomization",
        subHeading: "loremIndustrysub",
      },
      {
        id: 2,
        icon: `${awsURL}/images/Implementation.png`,
        name: "ImplementationServices",
        subHeading: "loremIndustrysub",
      },
      {
        id: 3,
        icon: `${awsURL}/images/Traning.png`,
        name: "TrainingPrograms",
        subHeading: "loremIndustrysub",
      },
      {
        id: 4,
        icon: `${awsURL}/images/OngoingSupport.png`,
        name: "OngoingSupport",
        subHeading: "loremIndustrysub",
      },
      {
        id: 5,
        icon: `${awsURL}/images/Consulting.png`,
        name: "Consulting",
        subHeading: "loremIndustrysub",
      },
    ],
    benefit_Classname: "industry_travel",
    benefit_heading: "Travel",
    benefit_desc:
      "Unlocking Efficiency, Precision, and Patient-Centric Care: Exploring the Advantages of Tailored Healthcare Software Solutions for Modern Medical Practices",
    benefitData: [
      {
        icon: <CompetiveSvg />,
        title: "Competitive Advantage",
        desc: "By having a custom software solution, travel businesses can differentiate themselves from competitors.",
      },
      {
        icon: <IntegratingTravelSvg />,
        title: "Integration Capabilities",
        desc: "Custom travel software can integrate with other systems and platforms used by the business, This integration streamlines data flow, reduces manual work, and improves overall productivity.",
      },
      {
        icon: <ScalableTravelSvg />,
        title: "Scalability",
        desc: "Custom software solutions can be easily scaled up to accommodate increasing volumes of transactions, users, and data without compromising performance or reliability.",
      },
      {
        icon: <TrailoredSvg />,
        title: "Tailored Functionality",
        desc: "Custom travel software can be designed to meet the exact requirements of a travel business, This tailored functionality ensures efficient operations and a seamless customer experience.",
      },
    ],
    whyChooseUsData: [
      {
        title: "Customized Solutions",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
      {
        title: "Experienced Team",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
      {
        title: "Cutting-edge Technology",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
      {
        title: "Scalable Infrastructure.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
    ],
  },
  {
    path: "auto-mobile",
    IndustryHeading1: "OurAutomobile",
    IndustryHeading2: "ItSevices",
    IndustrySubheading: "IndustrySubheading",
    data: [
      {
        id: 1,
        icon: `${awsURL}/images/DataBusiness.png`,
        name: "DataAnalytics",
        subHeading: "loremIndustrysub",
      },
      {
        id: 2,
        icon: `${awsURL}/images/Augmented.png`,
        name: "AugmentedReality",
        subHeading: "loremIndustrysub",
      },
      {
        id: 3,
        icon: `${awsURL}/images/ArtificialIntelegence.png`,
        name: "ArtificialIntelligence",
        subHeading: "loremIndustrysub",
      },
      {
        id: 4,
        icon: `${awsURL}/images/VehicleTech.png`,
        name: "AutonomousVehicle",
        subHeading: "loremIndustrysub",
      },
      {
        id: 5,
        icon: `${awsURL}/images/BlockChain.png`,
        name: "BlockchainSolutions",
        subHeading: "loremIndustrysub",
      },
      {
        id: 6,
        icon: `${awsURL}/images/Environmental.png`,
        name: "EnvironmentalSustainability",
        subHeading: "loremIndustrysub",
      },
      {
        id: 7,
        icon: `${awsURL}/images/Regulatory.png`,
        name: "RegulatoryCompliance",
        subHeading: "loremIndustrysub",
      },
      {
        id: 8,
        icon: `${awsURL}/images/CustomSoftware.png`,
        name: "CustomSoftware",
        subHeading: "loremIndustrysub",
      },
    ],
    benefit_Classname: "industry_auto_mobile",
    benefit_heading: "Auto Mobile",
    benefit_desc:
      "Unlocking Efficiency, Precision, and Patient-Centric Care: Exploring the Advantages of Tailored Healthcare Software Solutions for Modern Medical Practices",
    benefitData: [
      {
        icon: <IntegrationMobileSvg />,
        title: "Personalized Learning",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <ScalableMobileSvg />,
        title: "Scalability",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <TrailoredMobileSvg />,
        title: "Integration",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <UserMobileSvg />,
        title: "Data Analytics",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <UserMobileSvg />,
        title: "Data Analytics",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
    ],
    whyChooseUsData: [
      {
        title: "Customized Solutions",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
      {
        title: "Experienced Team",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
      {
        title: "Cutting-edge Technology",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
      {
        title: "Scalable Infrastructure.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
    ],
  },
  {
    path: "education",
    IndustryHeading1: "OurEducation",
    IndustryHeading2: "ItSevices",
    IndustrySubheading: "IndustrySubheading",
    data: [
      {
        id: 1,
        icon: `${awsURL}/images/LearnManagemenr.png`,
        name: "LearningManagement",
        subHeading: "loremIndustrysub",
      },
      {
        id: 2,
        icon: `${awsURL}/images/VirtualClass.png`,
        name: "VirtualClassrooms",
        subHeading: "loremIndustrysub",
      },
      {
        id: 3,
        icon: `${awsURL}/images/EducationApp.png`,
        name: "EducationalApps",
        subHeading: "loremIndustrysub",
      },
      {
        id: 4,
        icon: `${awsURL}/images/DigitalContent.png`,
        name: "DigitalContent",
        subHeading: "loremIndustrysub",
      },
    ],
    benefit_Classname: "industry_education",
    benefit_heading: "Education",
    benefit_desc:
      "Unlocking Efficiency, Precision, and Patient-Centric Care: Exploring the Advantages of Tailored Healthcare Software Solutions for Modern Medical Practices",
    benefitData: [
      {
        icon: <LearningSvg />,
        title: "Personalized Learning",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <ScalableSvg />,
        title: "Scalability",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <IntegrationSvg />,
        title: "Integration",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <DataAnalystSvg />,
        title: "Data Analytics",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
    ],
    whyChooseUsData: [
      {
        title: "Customized Solutions",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
      {
        title: "Experienced Team",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
      {
        title: "Cutting-edge Technology",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
      {
        title: "Scalable Infrastructure.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
    ],
  },
  {
    path: "hospitality",
    IndustryHeading1: "OurHospitality",
    IndustryHeading2: "ItSevices",
    IndustrySubheading: "IndustrySubheading",
    data: [
      {
        id: 1,
        icon: `${awsURL}/images/CustomSoftware.png`,
        name: "CustomSoftware",
        subHeading: "loremIndustrysub",
      },
      {
        id: 2,
        icon: `${awsURL}/images/Integration.png`,
        name: "IntegrationServices",
        subHeading: "loremIndustrysub",
      },
      {
        id: 3,
        icon: `${awsURL}/images/Cloudsevices.png`,
        name: "CloudSolutions",
        subHeading: "loremIndustrysub",
      },
      {
        id: 4,
        icon: `${awsURL}/images/MobileApplication.png`,
        name: "MobileApplications",
        subHeading: "loremIndustrysub",
      },
      {
        id: 5,
        icon: `${awsURL}/images/DataBusiness.jpg`,
        name: "DataAnalytics",
        subHeading: "loremIndustrysub",
      },
      {
        id: 6,
        icon: `${awsURL}/images/SupportMantinence.png`,
        name: "SupportMaintenance",
        subHeading: "loremIndustrysub",
      },
      {
        id: 7,
        icon: `${awsURL}/images/AdvisaryServices.png`,
        name: "ConsultingAdvisory",
        subHeading: "loremIndustrysub",
      },
    ],
    benefit_Classname: "industry_hospitality",
    benefit_heading: "Hospitality",
    benefit_desc:
      "Unlocking Efficiency, Precision, and Patient-Centric Care: Exploring the Advantages of Tailored Healthcare Software Solutions for Modern Medical Practices",
    benefitData: [
      {
        icon: <Guestsvg />,
        title: "Personalized Learning",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <IntegrationHospitalSvg />,
        title: "Scalability",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <OperationSvg />,
        title: "Integration",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <ScalableHospitalSvg />,
        title: "Data Analytics",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <ScalableHospitalSvg />,
        title: "Data Analytics",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
    ],
    whyChooseUsData: [
      {
        title: "Customized Solutions",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
      {
        title: "Experienced Team",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
      {
        title: "Cutting-edge Technology",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
      {
        title: "Scalable Infrastructure.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
    ],
  },
  {
    path: "real-estate",
    IndustryHeading1: "OurRealEstate",
    IndustryHeading2: "ItSevices",
    IndustrySubheading: "IndustrySubheading",
    data: [
      {
        id: 1,
        icon: `${awsURL}/images/DataBusiness.png`,
        name: "CustomSoftware",
        subHeading: "loremIndustrysub",
      },
      {
        id: 2,
        icon: `${awsURL}/images/Integration.png`,
        name: "IntegrationServices",
        subHeading: "loremIndustrysub",
      },
      {
        id: 3,
        icon: `${awsURL}/images/DigitalContent.png`,
        name: "DataManagement",
        subHeading: "loremIndustrysub",
      },
      {
        id: 4,
        icon: `${awsURL}/images/MobileApp.png`,
        name: "MobileDevelopment",
        subHeading: "loremIndustrysub",
      },
    ],
    benefit_Classname: "industry_real_estate",
    benefit_heading: "Real Estate",
    benefit_desc:
      "Unlocking Efficiency, Precision, and Patient-Centric Care: Exploring the Advantages of Tailored Healthcare Software Solutions for Modern Medical Practices",
    benefitData: [
      {
        icon: <EnhanceEstateSvg />,
        title: "Personalized Learning",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <ImproveEstateSvg />,
        title: "Scalability",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <ScalableEstateSvg />,
        title: "Integration",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <TrailoresEstateSvg />,
        title: "Data Analytics",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
    ],
    whyChooseUsData: [
      {
        title: "Customized Solutions",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
      {
        title: "Experienced Team",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
      {
        title: "Cutting-edge Technology",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
      {
        title: "Scalable Infrastructure.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
    ],
  },
  {
    path: "ngo",
    IndustryHeading1: "OurRealEstate",
    IndustryHeading2: "ItSevices",
    IndustrySubheading: "IndustrySubheading",
    data: [
      {
        id: 1,
        icon: `${awsURL}/images/DataBusiness.png`,
        name: "CustomSoftware",
        subHeading: "loremIndustrysub",
      },
      {
        id: 2,
        icon: `${awsURL}/images/Integration.png`,
        name: "IntegrationServices",
        subHeading: "loremIndustrysub",
      },
      {
        id: 3,
        icon: `${awsURL}/images/DigitalContent.png`,
        name: "DataManagement",
        subHeading: "loremIndustrysub",
      },
      {
        id: 4,
        icon: `${awsURL}/images/MobileApp.png`,
        name: "MobileDevelopment",
        subHeading: "loremIndustrysub",
      },
    ],
    benefit_Classname: "industry_real_estate",
    benefit_heading: "Real Estate",
    benefit_desc:
      "Unlocking Efficiency, Precision, and Patient-Centric Care: Exploring the Advantages of Tailored Healthcare Software Solutions for Modern Medical Practices",
    benefitData: [
      {
        icon: <EnhanceEstateSvg />,
        title: "Personalized Learning",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <ImproveEstateSvg />,
        title: "Scalability",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <ScalableEstateSvg />,
        title: "Integration",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <TrailoresEstateSvg />,
        title: "Data Analytics",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
    ],
    whyChooseUsData: [
      {
        title: "Customized Solutions",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
      {
        title: "Experienced Team",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
      {
        title: "Cutting-edge Technology",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
      {
        title: "Scalable Infrastructure.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
    ],
  },
  {
    path: "entertainment",
    IndustryHeading1: "OurRealEstate",
    IndustryHeading2: "ItSevices",
    IndustrySubheading: "IndustrySubheading",
    data: [
      {
        id: 1,
        icon: `${awsURL}/images/DataBusiness.png`,
        name: "CustomSoftware",
        subHeading: "loremIndustrysub",
      },
      {
        id: 2,
        icon: `${awsURL}/images/Integration.png`,
        name: "IntegrationServices",
        subHeading: "loremIndustrysub",
      },
      {
        id: 3,
        icon: `${awsURL}/images/DigitalContent.png`,
        name: "DataManagement",
        subHeading: "loremIndustrysub",
      },
      {
        id: 4,
        icon: `${awsURL}/images/MobileApp.png`,
        name: "MobileDevelopment",
        subHeading: "loremIndustrysub",
      },
    ],
    benefit_Classname: "industry_real_estate",
    benefit_heading: "Real Estate",
    benefit_desc:
      "Unlocking Efficiency, Precision, and Patient-Centric Care: Exploring the Advantages of Tailored Healthcare Software Solutions for Modern Medical Practices",
    benefitData: [
      {
        icon: <EnhanceEstateSvg />,
        title: "Personalized Learning",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <ImproveEstateSvg />,
        title: "Scalability",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <ScalableEstateSvg />,
        title: "Integration",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <TrailoresEstateSvg />,
        title: "Data Analytics",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
    ],
    whyChooseUsData: [
      {
        title: "Customized Solutions",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
      {
        title: "Experienced Team",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
      {
        title: "Cutting-edge Technology",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
      {
        title: "Scalable Infrastructure.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
    ],
  },
  {
    path: "agriculture",
    IndustryHeading1: "OurRealEstate",
    IndustryHeading2: "ItSevices",
    IndustrySubheading: "IndustrySubheading",
    data: [
      {
        id: 1,
        icon: `${awsURL}/images/DataBusiness.png`,
        name: "CustomSoftware",
        subHeading: "loremIndustrysub",
      },
      {
        id: 2,
        icon: `${awsURL}/images/Integration.png`,
        name: "IntegrationServices",
        subHeading: "loremIndustrysub",
      },
      {
        id: 3,
        icon: `${awsURL}/images/DigitalContent.png`,
        name: "DataManagement",
        subHeading: "loremIndustrysub",
      },
      {
        id: 4,
        icon: `${awsURL}/images/MobileApp.png`,
        name: "MobileDevelopment",
        subHeading: "loremIndustrysub",
      },
    ],
    benefit_Classname: "industry_real_estate",
    benefit_heading: "Real Estate",
    benefit_desc:
      "Unlocking Efficiency, Precision, and Patient-Centric Care: Exploring the Advantages of Tailored Healthcare Software Solutions for Modern Medical Practices",
    benefitData: [
      {
        icon: <EnhanceEstateSvg />,
        title: "Personalized Learning",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <ImproveEstateSvg />,
        title: "Scalability",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <ScalableEstateSvg />,
        title: "Integration",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <TrailoresEstateSvg />,
        title: "Data Analytics",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <TrailoresEstateSvg />,
        title: "Data Analytics",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <TrailoresEstateSvg />,
        title: "Data Analytics",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
    ],
    whyChooseUsData: [
      {
        title: "Customized Solutions",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
      {
        title: "Experienced Team",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
      {
        title: "Cutting-edge Technology",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
      {
        title: "Scalable Infrastructure.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
      {
        title: "Scalable Infrastructure.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
      {
        title: "Scalable Infrastructure.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
    ],
  },
  {
    path: "quickcommerce",
    IndustryHeading1: "OurRealEstate",
    IndustryHeading2: "ItSevices",
    IndustrySubheading: "IndustrySubheading",
    data: [
      {
        id: 1,
        icon: `${awsURL}/images/DataBusiness.png`,
        name: "CustomSoftware",
        subHeading: "loremIndustrysub",
      },
      {
        id: 2,
        icon: `${awsURL}/images/Integration.png`,
        name: "IntegrationServices",
        subHeading: "loremIndustrysub",
      },
      {
        id: 3,
        icon: `${awsURL}/images/DigitalContent.png`,
        name: "DataManagement",
        subHeading: "loremIndustrysub",
      },
      {
        id: 4,
        icon: `${awsURL}/images/MobileApp.png`,
        name: "MobileDevelopment",
        subHeading: "loremIndustrysub",
      },
    ],
    benefit_Classname: "industry_real_estate",
    benefit_heading: "Real Estate",
    benefit_desc:
      "Unlocking Efficiency, Precision, and Patient-Centric Care: Exploring the Advantages of Tailored Healthcare Software Solutions for Modern Medical Practices",
    benefitData: [
      {
        icon: <EnhanceEstateSvg />,
        title: "Personalized Learning",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <ImproveEstateSvg />,
        title: "Scalability",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <ScalableEstateSvg />,
        title: "Integration",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <TrailoresEstateSvg />,
        title: "Data Analytics",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <TrailoresEstateSvg />,
        title: "Data Analytics",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <TrailoresEstateSvg />,
        title: "Data Analytics",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
    ],
    whyChooseUsData: [
      {
        title: "Customized Solutions",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
      {
        title: "Experienced Team",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
      {
        title: "Cutting-edge Technology",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
      {
        title: "Scalable Infrastructure.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
      {
        title: "Scalable Infrastructure.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
      {
        title: "Scalable Infrastructure.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
    ],
  },
  {
    path: "banking",
    IndustryHeading1: "OurRealEstate",
    IndustryHeading2: "ItSevices",
    IndustrySubheading: "IndustrySubheading",
    data: [
      {
        id: 1,
        icon: `${awsURL}/images/DataBusiness.png`,
        name: "CustomSoftware",
        subHeading: "loremIndustrysub",
      },
      {
        id: 2,
        icon: `${awsURL}/images/Integration.png`,
        name: "IntegrationServices",
        subHeading: "loremIndustrysub",
      },
      {
        id: 3,
        icon: `${awsURL}/images/DigitalContent.png`,
        name: "DataManagement",
        subHeading: "loremIndustrysub",
      },
      {
        id: 4,
        icon: `${awsURL}/images/MobileApp.png`,
        name: "MobileDevelopment",
        subHeading: "loremIndustrysub",
      },
    ],
    benefit_Classname: "industry_real_estate",
    benefit_heading: "Real Estate",
    benefit_desc:
      "Unlocking Efficiency, Precision, and Patient-Centric Care: Exploring the Advantages of Tailored Healthcare Software Solutions for Modern Medical Practices",
    benefitData: [
      {
        icon: <EnhanceEstateSvg />,
        title: "Personalized Learning",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <ImproveEstateSvg />,
        title: "Scalability",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <ScalableEstateSvg />,
        title: "Integration",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <TrailoresEstateSvg />,
        title: "Data Analytics",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <TrailoresEstateSvg />,
        title: "Data Analytics",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <TrailoresEstateSvg />,
        title: "Data Analytics",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
    ],
    whyChooseUsData: [
      {
        title: "Customized Solutions",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
      {
        title: "Experienced Team",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
      {
        title: "Cutting-edge Technology",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
      {
        title: "Scalable Infrastructure.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
      {
        title: "Scalable Infrastructure.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
      {
        title: "Scalable Infrastructure.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
    ],
  },
  {
    path: "events",
    IndustryHeading1: "OurRealEstate",
    IndustryHeading2: "ItSevices",
    IndustrySubheading: "IndustrySubheading",
    data: [
      {
        id: 1,
        icon: `${awsURL}/images/DataBusiness.png`,
        name: "CustomSoftware",
        subHeading: "loremIndustrysub",
      },
      {
        id: 2,
        icon: `${awsURL}/images/Integration.png`,
        name: "IntegrationServices",
        subHeading: "loremIndustrysub",
      },
      {
        id: 3,
        icon: `${awsURL}/images/DigitalContent.png`,
        name: "DataManagement",
        subHeading: "loremIndustrysub",
      },
      {
        id: 4,
        icon: `${awsURL}/images/MobileApp.png`,
        name: "MobileDevelopment",
        subHeading: "loremIndustrysub",
      },
    ],
    benefit_Classname: "industry_real_estate",
    benefit_heading: "Real Estate",
    benefit_desc:
      "Unlocking Efficiency, Precision, and Patient-Centric Care: Exploring the Advantages of Tailored Healthcare Software Solutions for Modern Medical Practices",
    benefitData: [
      {
        icon: <EnhanceEstateSvg />,
        title: "Personalized Learning",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <ImproveEstateSvg />,
        title: "Scalability",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <ScalableEstateSvg />,
        title: "Integration",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <TrailoresEstateSvg />,
        title: "Data Analytics",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <TrailoresEstateSvg />,
        title: "Data Analytics",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <TrailoresEstateSvg />,
        title: "Data Analytics",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
    ],
    whyChooseUsData: [
      {
        title: "Customized Solutions",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
      {
        title: "Experienced Team",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
      {
        title: "Cutting-edge Technology",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
      {
        title: "Scalable Infrastructure.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
      {
        title: "Scalable Infrastructure.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
      {
        title: "Scalable Infrastructure.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
    ],
  },
  {
    path: "finance",
    IndustryHeading1: "OurRealEstate",
    IndustryHeading2: "ItSevices",
    IndustrySubheading: "IndustrySubheading",
    data: [
      {
        id: 1,
        icon: `${awsURL}/images/DataBusiness.png`,
        name: "CustomSoftware",
        subHeading: "loremIndustrysub",
      },
      {
        id: 2,
        icon: `${awsURL}/images/Integration.png`,
        name: "IntegrationServices",
        subHeading: "loremIndustrysub",
      },
      {
        id: 3,
        icon: `${awsURL}/images/DigitalContent.png`,
        name: "DataManagement",
        subHeading: "loremIndustrysub",
      },
      {
        id: 4,
        icon: `${awsURL}/images/MobileApp.png`,
        name: "MobileDevelopment",
        subHeading: "loremIndustrysub",
      },
    ],
    benefit_Classname: "industry_real_estate",
    benefit_heading: "Real Estate",
    benefit_desc:
      "Unlocking Efficiency, Precision, and Patient-Centric Care: Exploring the Advantages of Tailored Healthcare Software Solutions for Modern Medical Practices",
    benefitData: [
      {
        icon: <EnhanceEstateSvg />,
        title: "Personalized Learning",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <ImproveEstateSvg />,
        title: "Scalability",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <ScalableEstateSvg />,
        title: "Integration",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <TrailoresEstateSvg />,
        title: "Data Analytics",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <TrailoresEstateSvg />,
        title: "Data Analytics",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <TrailoresEstateSvg />,
        title: "Data Analytics",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
    ],
    whyChooseUsData: [
      {
        title: "Customized Solutions",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
      {
        title: "Experienced Team",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
      {
        title: "Cutting-edge Technology",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
      {
        title: "Scalable Infrastructure.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
      {
        title: "Scalable Infrastructure.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
      {
        title: "Scalable Infrastructure.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
    ],
  },
  {
    path: "wellness",
    IndustryHeading1: "OurRealEstate",
    IndustryHeading2: "ItSevices",
    IndustrySubheading: "IndustrySubheading",
    data: [
      {
        id: 1,
        icon: `${awsURL}/images/DataBusiness.png`,
        name: "CustomSoftware",
        subHeading: "loremIndustrysub",
      },
      {
        id: 2,
        icon: `${awsURL}/images/Integration.png`,
        name: "IntegrationServices",
        subHeading: "loremIndustrysub",
      },
      {
        id: 3,
        icon: `${awsURL}/images/DigitalContent.png`,
        name: "DataManagement",
        subHeading: "loremIndustrysub",
      },
      {
        id: 4,
        icon: `${awsURL}/images/MobileApp.png`,
        name: "MobileDevelopment",
        subHeading: "loremIndustrysub",
      },
    ],
    benefit_Classname: "industry_real_estate",
    benefit_heading: "Real Estate",
    benefit_desc:
      "Unlocking Efficiency, Precision, and Patient-Centric Care: Exploring the Advantages of Tailored Healthcare Software Solutions for Modern Medical Practices",
    benefitData: [
      {
        icon: <EnhanceEstateSvg />,
        title: "Personalized Learning",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <ImproveEstateSvg />,
        title: "Scalability",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <ScalableEstateSvg />,
        title: "Integration",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <TrailoresEstateSvg />,
        title: "Data Analytics",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <TrailoresEstateSvg />,
        title: "Data Analytics",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <TrailoresEstateSvg />,
        title: "Data Analytics",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
    ],
    whyChooseUsData: [
      {
        title: "Customized Solutions",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
      {
        title: "Experienced Team",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
      {
        title: "Cutting-edge Technology",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
      {
        title: "Scalable Infrastructure.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
      {
        title: "Scalable Infrastructure.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
      {
        title: "Scalable Infrastructure.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
    ],
  },
  {
    path: "news",
    IndustryHeading1: "OurRealEstate",
    IndustryHeading2: "ItSevices",
    IndustrySubheading: "IndustrySubheading",
    data: [
      {
        id: 1,
        icon: `${awsURL}/images/DataBusiness.png`,
        name: "CustomSoftware",
        subHeading: "loremIndustrysub",
      },
      {
        id: 2,
        icon: `${awsURL}/images/Integration.png`,
        name: "IntegrationServices",
        subHeading: "loremIndustrysub",
      },
      {
        id: 3,
        icon: `${awsURL}/images/DigitalContent.png`,
        name: "DataManagement",
        subHeading: "loremIndustrysub",
      },
      {
        id: 4,
        icon: `${awsURL}/images/MobileApp.png`,
        name: "MobileDevelopment",
        subHeading: "loremIndustrysub",
      },
    ],
    benefit_Classname: "industry_real_estate",
    benefit_heading: "Real Estate",
    benefit_desc:
      "Unlocking Efficiency, Precision, and Patient-Centric Care: Exploring the Advantages of Tailored Healthcare Software Solutions for Modern Medical Practices",
    benefitData: [
      {
        icon: <EnhanceEstateSvg />,
        title: "Personalized Learning",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <ImproveEstateSvg />,
        title: "Scalability",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <ScalableEstateSvg />,
        title: "Integration",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <TrailoresEstateSvg />,
        title: "Data Analytics",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <TrailoresEstateSvg />,
        title: "Data Analytics",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <TrailoresEstateSvg />,
        title: "Data Analytics",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
    ],
    whyChooseUsData: [
      {
        title: "Customized Solutions",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
      {
        title: "Experienced Team",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
      {
        title: "Cutting-edge Technology",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
      {
        title: "Scalable Infrastructure.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
      {
        title: "Scalable Infrastructure.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
      {
        title: "Scalable Infrastructure.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
    ],
  },
  {
    path: "restaurant",
    IndustryHeading1: "OurRealEstate",
    IndustryHeading2: "ItSevices",
    IndustrySubheading: "IndustrySubheading",
    data: [
      {
        id: 1,
        icon: `${awsURL}/images/DataBusiness.png`,
        name: "CustomSoftware",
        subHeading: "loremIndustrysub",
      },
      {
        id: 2,
        icon: `${awsURL}/images/Integration.png`,
        name: "IntegrationServices",
        subHeading: "loremIndustrysub",
      },
      {
        id: 3,
        icon: `${awsURL}/images/DigitalContent.png`,
        name: "DataManagement",
        subHeading: "loremIndustrysub",
      },
      {
        id: 4,
        icon: `${awsURL}/images/MobileApp.png`,
        name: "MobileDevelopment",
        subHeading: "loremIndustrysub",
      },
    ],
    benefit_Classname: "industry_real_estate",
    benefit_heading: "Real Estate",
    benefit_desc:
      "Unlocking Efficiency, Precision, and Patient-Centric Care: Exploring the Advantages of Tailored Healthcare Software Solutions for Modern Medical Practices",
    benefitData: [
      {
        icon: <EnhanceEstateSvg />,
        title: "Personalized Learning",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <ImproveEstateSvg />,
        title: "Scalability",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <ScalableEstateSvg />,
        title: "Integration",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <TrailoresEstateSvg />,
        title: "Data Analytics",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <TrailoresEstateSvg />,
        title: "Data Analytics",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <TrailoresEstateSvg />,
        title: "Data Analytics",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
    ],
    whyChooseUsData: [
      {
        title: "Customized Solutions",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
      {
        title: "Experienced Team",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
      {
        title: "Cutting-edge Technology",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
      {
        title: "Scalable Infrastructure.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
      {
        title: "Scalable Infrastructure.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
      {
        title: "Scalable Infrastructure.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
    ],
  },
  {
    path: "socialnetworking",
    IndustryHeading1: "OurRealEstate",
    IndustryHeading2: "ItSevices",
    IndustrySubheading: "IndustrySubheading",
    data: [
      {
        id: 1,
        icon: `${awsURL}/images/DataBusiness.png`,
        name: "CustomSoftware",
        subHeading: "loremIndustrysub",
      },
      {
        id: 2,
        icon: `${awsURL}/images/Integration.png`,
        name: "IntegrationServices",
        subHeading: "loremIndustrysub",
      },
      {
        id: 3,
        icon: `${awsURL}/images/DigitalContent.png`,
        name: "DataManagement",
        subHeading: "loremIndustrysub",
      },
      {
        id: 4,
        icon: `${awsURL}/images/MobileApp.png`,
        name: "MobileDevelopment",
        subHeading: "loremIndustrysub",
      },
    ],
    benefit_Classname: "industry_real_estate",
    benefit_heading: "Real Estate",
    benefit_desc:
      "Unlocking Efficiency, Precision, and Patient-Centric Care: Exploring the Advantages of Tailored Healthcare Software Solutions for Modern Medical Practices",
    benefitData: [
      {
        icon: <EnhanceEstateSvg />,
        title: "Personalized Learning",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <ImproveEstateSvg />,
        title: "Scalability",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <ScalableEstateSvg />,
        title: "Integration",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <TrailoresEstateSvg />,
        title: "Data Analytics",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <TrailoresEstateSvg />,
        title: "Data Analytics",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
      {
        icon: <TrailoresEstateSvg />,
        title: "Data Analytics",
        desc: "Allows for personalized learning experiences based on individual student needs, preferences, and learning styles.",
      },
    ],
    whyChooseUsData: [
      {
        title: "Customized Solutions",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
      {
        title: "Experienced Team",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
      {
        title: "Cutting-edge Technology",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
      {
        title: "Scalable Infrastructure.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
      {
        title: "Scalable Infrastructure.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
      {
        title: "Scalable Infrastructure.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porta est felis, ac hendrerit metus pulvinar in.",
      },
    ],
  },
];
