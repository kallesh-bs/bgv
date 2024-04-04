import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import apiUrl from "api/apiUrl";
import { setjobOpening } from "../../../redux/actions/action";
import LoaderComp from "../../loader/LoaderComp";
import ApplyNow from "../home/ApplyNow";
import JobView from "../home/JobView";
import { useTranslation } from "react-i18next";
import { awsURL } from "utils/Constants";
import Helper from "api/Helper";
import SectionHeadings from "../home/SectionHeadings";

const Openings = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);
  const [jobViewModal, setJobViewModal] = useState(false);
  const [jobopeningId, setjobOpeningId] = useState(0);
  const dispatch = useDispatch();
  const openModal = (id) => {

    setjobOpeningId(id);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleModalOpen = (jobOpeningId) => {
    setJobViewModal(!jobViewModal);
    setjobOpeningId(jobOpeningId);
  };
  const jobOpeningsData = useSelector(
    (state) => state.jobOpeningReducer.jobOpenings
  );
  const arr = jobOpeningsData?.map((item) => {
    return {
      ...item,
      icon: `${awsURL}/images/Frame+459.png`,
      location: " Jaipur / WFO",
    };
  });

  useEffect(() => {
    const fetchJobOpenings = async () => {
      const path = apiUrl.jobOpenings;
      const { response } = await Helper.get(path);
      dispatch(setjobOpening(response?.data));
      setIsLoading(false);
    };
    fetchJobOpenings();
  }, [dispatch]);
  const { t } = useTranslation();

  useEffect(() => {
    if (isModalOpen || jobViewModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [isModalOpen, jobViewModal]);

  return (
    <div
      className="w-full flex flex-col gap-[2.88rem] items-center justify-center lg:py-[85px]
     lg:px-[135px] px-[35px] py-[100px]"
    >
      <div className="w-full h-fit flex items-center justify-center">
        <SectionHeadings
          headingPart1={t("currentOpeningsH1")}
          headingPart2={t("currentOpeningsH2")}
        />
      </div>
      {isLoading ? (
        <div className="text-center">
          <LoaderComp />
        </div>
      ) : (
        <div className="w-fit flex justify-center career-mob-box">
          <div
            className="w-fit grid grid-cols-1 sm:grid sm:grid-cols-2 gap-4 lg:grid lg:grid-cols-4"
          >
            {arr?.map((item) => (
              <div
                key={item.id}
                className="h-64 flex flex-col items-center justify-center w-[270px] gap-[18px]
                  bg-white rounded-2xl shadow-[4px_10px_30px_0px_rgba(0,0,0,0.03)]"
              >
                <div>
                  <img src={item.icon} alt="icon" />
                </div>
                <div className="w-full flex flex-col justify-center items-center gap-[14px]">
                  <h1
                    className="text-[#031B59] font-black contact-mob-post capitalize cursor-pointer"
                    onClick={() => handleModalOpen(item.id)}
                  >
                    {item.title}
                  </h1>
                  <h3 className="text-sm">{item.requirements}</h3>
                  <h3 className="text-sm">{item.location}</h3>
                </div>
                <div>
                  <button
                    className="border-2 border-[#425483] px-7 py-3 rounded-2xl text-[#031B59]"
                    onClick={() => openModal(item.id)}
                  >
                    {t("applyNow")}
                  </button>
                </div>
              </div>
            ))}
            {isModalOpen && (
              <ApplyNow closeModal={closeModal} jobopeningId={jobopeningId} />
            )}
            {jobViewModal && (
              <JobView
                setJobViewModal={setJobViewModal}
                jobopeningId={jobopeningId}
                openModal={openModal}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Openings;
