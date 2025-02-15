import React from "react";
import { GrFormClose } from "react-icons/gr";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

function Popup({
  popupBox,
  title,
  handleSubmit,
  submitBtnText = "save",
  children,
}) {
  const { t } = useTranslation();

  return (
    <div
      className="w-full h-full flex items-center
    justify-center fixed top-0 left-0 z-20 bg-[rgba(3,27,89,.2)]"
    >
      <div
        className="min-w-[37.5rem] w-fit z-10 h-fit flex flex-col items-center gap-[1.5rem] bg-white
        rounded-[18px] shadow-lg"
      >
        <form className="w-full flex flex-col h-full" onSubmit={handleSubmit}>
          <div
            className="w-full px-7 py-5 flex justify-between items-center text-[#031B59]
          font-extrabold text-xl"
          >
            <p>{title}</p>
            <button className="w-fit h-fit" onClick={popupBox}>
              <GrFormClose className="flex w-[2rem] h-[2rem]" />
            </button>
          </div>
          <div className="w-full flex flex-col gap-4">
            <hr />
            <div className="w-full px-7 flex flex-col item-center gap-4">
              {children}
            </div>
            <hr />
          </div>
          <div className="w-full px-7 py-5 flex justify-end items-center gap-8">
            <button
              onClick={popupBox}
              className="flex w-[7.5rem] h-[3rem] p-[1rem] justify-center items-center gap-[0.5rem]
              rounded-[0.5rem]"
            >
              {t("cancel")}
            </button>
            <button
              className={`flex h-[3rem] p-[1rem_1.875rem] min-w-[6rem] justify-center items-center gap-[0.5rem]
               bg-[#031B59] rounded-[2.5rem] font-inter text-[1rem]
                font-bold leading-normal text-white`}
              type="button"
              onClick={() => {
                handleSubmit();
              }}
            >
              {t(`${submitBtnText}`)}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

Popup.propTypes = {
  popupBox: PropTypes.any,
  children: PropTypes.any,
  title: PropTypes.string,
  handleSubmit: PropTypes.any,
  submitBtnText: PropTypes.string,
};

export default Popup;
