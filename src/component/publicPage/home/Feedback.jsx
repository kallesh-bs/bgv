import React, { useState } from "react";
import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import SectionHeadings from "./SectionHeadings";
import StarRating from "component/common/StarRating";
import UserAvatar from "component/common/UserAvatar";
import { awsURL } from "utils/Constants";
import { Link } from "react-router-dom";

export const carouselItems = [
  // Add your carousel items here
  {
    title: "Item 1",
    review: `Working with Deeporion on our website development project was an exceptional experience!
       Their team's professionalism, expertise, and attention to detail exceeded our expectations.
        They truly understood our vision and delivered a stunning website that perfectly represents our brand.
         We highly recommend Deeporion for anyone looking for top-notch web development services.
          Thank you for your outstanding work!`,
    clientName: "Yash Lohiya",
    clientproject: "Doodycalls",
    clientProfile: `${awsURL}/images/YashLohiya.jpeg`,
    clientPosition: "Project Manager",
    rating: 5,
    logo: `${awsURL}/images/doodyCalls.png`,
    url: "https://www.doodycalls.com/",
  },
  {
    title: "Item 2",
    review: `Website development done right! Deeporion exceeded our expectations from start to finish.
       They listened attentively to our needs and provided insightful suggestions every step of the way.
        The result? A sleek, user-friendly website that's already driving increased traffic and engagement.
         Their dedication to quality and customer satisfaction is unmatched.
          We're thrilled with the outcome and look forward to future collaborations. Highly recommended!`,
    clientName: "Deepak Gupta",
    clientProject: "Connexials",
    clientProfile: null,
    clientPosition: "CEO",
    rating: 4,
    logo: `${awsURL}/images/connexials.png`,
    url: "https://www.connexials.com/",
  },
  {
    title: "Item 3",
    review: `Exceptional UI/UX and web development expertise!
       Deeporion demonstrated a deep understanding of our brand and target audience,
        delivering a website that not only looks stunning but also provides an intuitive and seamless user experience.
         Their attention to detail and commitment to excellence were evident in every aspect of the project.
          From concept to execution, they exceeded our expectations and brought our vision to life.
          We're thrilled with the results and highly recommend Deeporion to anyone seeking 
          top-tier UI/UX and web development services.`,
    clientName: "Subu Ramachandran",
    clientProject: "Ampai",
    clientProfile: null,
    clientPosition: "CEO",
    rating: 5,
    logo: `${awsURL}/images/ampai.png`,
    url: "https://ampai.ai/",
  },
  {
    title: "Item 4",
    review: `I just wanted to reach out to you and let you know what a wonderful time
       I've had working with Tanushree K. She has been working on one of my projects for a few months now,
        and her designs are such high quality, both myself and the client has been impressed.
         She's detail oriented and has had some incredible ideas we've incorporated into the design.
          She is a self-starter who doesn't need me to hold her hand on designs,
           she just knocks it out and gets it right!
            Today I came in and the client had told me they made comments on some screens,
             Tanushree had already applied all the changes, and I didn't even have to ask! Made my life so much easier,
              I've really appreciated working with her.`,
    clientName: "Emily Music",
    clientproject: "Unified Boxing Club",
    clientProfile: null,
    clientPosition: "Project Manager",
    rating: 5,
    logo: `${awsURL}/images/UnifiedLogo.png`,
    url: "https://unifiedboxingclub.com/",
  },
  {
    title: "Item 5",
    review: `I congratulate the Expert and the Company representative.
       Expert has accelerated since the last sprint. Thank you for his hardwork.
        I like to thank organisation as well for providing prompt support when required.
         I highly recommend Deeporion to choose for app development.`,
    clientName: "Yogiz Ozben",
    clientProject: "Puravankara",
    clientProfile: null,
    clientPosition: "Project Manager",
    rating: 4,
    logo: `${awsURL}/images/puravankara.png`,
    url: "https://www.puravankara.com/",
  },
  {
    title: "Item 6",
    review: `Anuja's contributions have been truly commendable,
       particularly in the swift and impressive delivery of the BB.
        Her ability to join the project midway and seamlessly integrate
         into the team while delivering exceptional results is truly noteworthy.`,
    clientName: "Aakash Rathi",
    clientProject: "MYNE LEAP",
    clientProfile: null,
    clientPosition: "Project Manager",
    rating: 5,
    logo: `${awsURL}/images/myneleap.png`,
    url: "https://myneleap2023-321315-react.b321315.dev.eastus.az.svc.builder.cafe/",
  },
  // Add more items as needed
];

const Feedback = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [carouselData, setCarouselData] = useState(carouselItems);
  const { t } = useTranslation();

  const renderData = (item, index) => {
    if (
      index === activeIndex ||
      index === activeIndex + 1 ||
      index === activeIndex - 1
    ) {
      return (
        <div
          className={`flex bg-[white] text-[#646978] border-[#A1A1A1] p-[1.18rem] w-[28vw] gap-[1.88rem]
             rounded-[1.125rem] my-[0.5rem] flex-col shadow-md font-Nunito ${
        activeIndex === index
          ? "transform scale-105 min-h-[348px]:!important feedback-center"
          : "feedback-hide"
        }`}
          key={index}
        >
          <div className="flex justify-between">
            <div className="flex flex-col">
              <h3
                className={`text-[#031B59] font-bold ${
                  activeIndex === index ? "text-sm" : "text-xs"
                }`}
              >
                {item.clientName}
              </h3>
              <h5
                className={`text-[#646978] ${
                  activeIndex === index ? "text-base" : "text-sm"
                }`}
              >
                {item.clientPosition}
              </h5>
              <div>
                <StarRating rating={item.rating} starWidth={18} />
              </div>
            </div>
            <UserAvatar
              imageUrl={item.clientProfile}
              name={item.clientName}
            />
          </div>
          <h2 className={activeIndex === index ? "text-lg" : "text-sm"}>
            {item.review.slice(0, 260)}...
          </h2>
          <div className="flex justify-between  items-center">
            <Link to={item.url} target="_blank">
              {item.logo ? (
                <img src={item.logo} alt={""} className="h-[20px]" />
              ) : null}
            </Link>
            <div className="flex gap-[2px]">
              <div className="w-[7px] h-[4.667px] bg-[#ED6E0F] rounded-[21.6px]"></div>
              <div className="w-[7px] h-[4.667px] bg-[#ED6E0F] rounded-[21.6px]"></div>
              <div className="w-[32px] h-[4.667px] bg-[#ED6E0F] rounded-[21.6px]"></div>
            </div>
          </div>
        </div>
      );
    }
  };

  const incrementClick = () => {
    if (activeIndex < carouselData?.length - 2) {
      setActiveIndex(activeIndex + 1);
    } else {
      const newData = carouselData.shift();
      const finalValue = [...carouselData, newData];
      setCarouselData(finalValue);
      setActiveIndex(finalValue.length - 2);
    }
  };

  const decrementClick = () => {
    if (activeIndex > 1) {
      setActiveIndex(activeIndex - 1);
    } else {
      carouselData.unshift(carouselData[carouselData.length - 1]);
      const finalValue = carouselData.filter(
        (carousel, index) => carouselData.length - 1 !== index
      );
      setCarouselData(finalValue);
      setActiveIndex(1);
    }
  };

  return (
    <div className="h-fit w-full py-[2.5rem] bg-[#F3F6FD] mb-4">
      <div className="flex items-center justify-center w-full">
        <SectionHeadings
          headingPart1={t("our")}
          headingPart2={t("testimonial")}
          subHeading={t("ourTestionalSub")}
        />
      </div>
      <div className="w-full items-center justify-center py-[2.5rem] flex px-[2.5rem] gap-[2.5rem] mb-4 ">
        {carouselData.map((item, index) => renderData(item, index))}
      </div>
      {/* Buttons */}
      <div className="flex justify-center">
        <button
          className="flex w-[40px] h-[40px] justify-center items-center hover:bg-[#ED6E0F]
           group bg-white rounded-full mx-2 "
          onClick={incrementClick}
        >
          <FaArrowLeftLong className="text-[#ED6E0F] group-hover:text-white" />
        </button>
        <button
          className="flex w-[40px] h-[40px] justify-center items-center hover:bg-[#ED6E0F]
           group bg-white rounded-full mx-2"
          onClick={decrementClick}
        >
          <FaArrowRight className="text-[#ED6E0F] group-hover:text-white" />
        </button>
      </div>
    </div>
  );
};

export default Feedback;
