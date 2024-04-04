import React, { useEffect } from "react";
import { AiOutlineGlobal } from "react-icons/ai";
import { MdPadding, MdOutlinePerson } from "react-icons/md";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobOpeningDataById } from "redux/appThunk/Admin/jobOpening";
import LoaderComp from "component/loader/LoaderComp";
import { awsURL } from "utils/Constants";

export default function JobView({ setJobViewModal, jobopeningId, openModal }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { isLoading, individualOpening } = useSelector(
    (state) => state.jobOpeningReducer
  );

  useEffect(() => {
    dispatch(fetchJobOpeningDataById(jobopeningId));
  }, []);

  return (
    <div
      className="fixed z-50 top-[0px] left-0 b-0 w-full h-full flex items-center justify-center
       bg-[#01223770] scrollbar-hide text-black "
    >
      <div
        className="max-w-[57.25rem] w-full h-[55.875rem] max-h-[55.875rem]
       flex flex-col items-center justify-center"
      >
        {isLoading ? (
          <LoaderComp />
        ) : (
          <>
            <div
              className="w-full max-h-[55.875rem] p-5 overflow-y-scroll
          rounded-t-[20px] shadow-[0_1px_4px_0px_rgba(0,0,0,0.3)]  bg-white"
            >
              <div
                className="] gap-6 flex flex-col flex-shrink flex-grow
              items-center"
              >
                {/* Title and Logo Column */}
                <div className="w-full flex justify-center py-2 items-center gap-[17px]">
                  <div className="h-[45px] w-[45px] flex items-center justify-center rounded-[95px] bg-[#FF79140D]">
                    <img src={`${awsURL}/images/Frame+459.png`} alt="frame" />
                  </div>
                  <div className="w-full flex flex-col items-start justify-start gap-[13px]">
                    <h4 className="text-[#031B59] text-xl font-extrabold uppercase">
                      {individualOpening.title}
                    </h4>
                    <div className="w-full flex justify-start items-center text-[#686868] text-[16px]">
                      <p>{individualOpening.location}</p>&nbsp;
                      <span>•</span>
                      &nbsp;
                      <p> {individualOpening.jobType}</p>&nbsp;
                      <span>•</span>
                      &nbsp;
                      <p>{individualOpening.requirements}</p>
                    </div>
                  </div>
                </div>
                {/* basic Info  */}
                <div className="w-full gap-[10px] flex flex-col items-start justify-center text-[#686868]">
                  <div className="w-full flex items-center justify-start gap-2">
                    <AiOutlineGlobal className="h-5 w-5 fill-[#031B59]" />
                    <a href="www.deeporion.com">www.deeporion.com</a>
                  </div>
                  <div className="w-full flex items-center justify-start gap-2">
                    <MdOutlinePerson className="h-5 w-5 fill-[#031B59]" />
                    <a href="www.deeporion.com">50 employees</a>
                  </div>
                  <div className="w-full flex items-center justify-start gap-2">
                    <MdPadding className="h-5 w-5 fill-[#031B59]" />
                    <a href="www.deeporion.com">
                      {individualOpening.vacancy} Seats
                    </a>
                  </div>
                </div>
                {/* About the job */}
                <div className="w-full flex flex-col gap-2 justify-center">
                  <h4 className="text-lg font-bold text-[#031B59]">
                    {t("aboutJob")}
                  </h4>
                  <div
                    className="text-[#686868]"
                    dangerouslySetInnerHTML={{
                      __html: individualOpening.description,
                    }}
                  ></div>
                </div>
                {/* Benefits */}
                {individualOpening?.benefits?.length > 0 && (
                  <div className="w-full flex flex-col gap-5 justify-center">
                    <span className="text-lg font-bold text-[#031B59]">
                      {t("benefitsofworking")}
                    </span>
                    <div className="flex flex-row items-center gap-5">
                      {individualOpening?.benefits?.map((input, index) => (
                        <div
                          key={index}
                          className="flex flex-row
                          items-center bg-[#E7F2E8] text-[#686868]
                          h-[32px] border border-[#1A8718] p-2 rounded-md"
                        >
                          <h6 className="min-w-[5rem] bg-[#E7F2E8] border-none outline-none">
                            {input}
                          </h6>
                          <div className="cursor-pointer"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div
              className="w-full h-[87px] p-5 flex items-center justify-end space-x-3
        bg-[#F4F6FC] rounded-br-[20px] rounded-bl-[20px]"
            >
              <button
                className="h-[55px!important] py-4 px-10 flex items-center justify-center
          text-[#031B59] border border-[#E2E8F0] rounded-[20px] font-medium text-lg"
                onClick={() => setJobViewModal(false)}
              >
                {t("cancel")}
              </button>
              <button
                className="h-[55px!important] py-4 px-10 flex items-center justify-center
          text-[#fff] border bg-[#031B59] rounded-[20px] font-medium text-lg"
                onClick={() => {
                  openModal(jobopeningId);
                  setJobViewModal(false);
                }}
              >
                {t("applyNow")}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

JobView.propTypes = {
  setJobViewModal: PropTypes.func,
  jobopeningId: PropTypes.string,
  openModal: PropTypes.func,
};
