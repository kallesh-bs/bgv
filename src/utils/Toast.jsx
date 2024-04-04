import React, { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { RiErrorWarningFill } from "react-icons/ri";
import { FaTimesCircle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import "./toast.css";
import { useDispatch, useSelector } from "react-redux";
import { setShowToast } from "redux/actions/action";

const Toast = () => {
  const dispatch = useDispatch();
  const { showToast, toastMessage, type } = useSelector(
    (state) => state.commonReducers
  );
  useEffect(() => {
    if (showToast) {
      setTimeout(() => {
        dispatch(setShowToast({ show: false, toastMessage: "" }));
      }, 2000);
    }
  }, [showToast]);
  const mode = {
    success: {
      color: "green",
      icon: FaCheckCircle,
    },
    error: {
      color: "red",
      icon: FaTimesCircle,
    },
    warning: {
      color: "orange",
      icon: RiErrorWarningFill,
    },
  };
  const Icon = mode[type].icon;

  return (
    <>
      <div className={`toast p-5 ${showToast ? "active" : ""}`}>
        <div className="flex justify-around items-center">
          <div className="w-fit min-w-[17rem] flex justify-between items-center space-x-4">
            <Icon className={`text-${mode[type].color}-500 w-6 h-6`} />
            <div className="message-text text-2">{toastMessage}</div>
            <div>
              <RxCross2
                className="w-6 h-6 text-[#a1a1a1] cursor-pointer"
                onClick={() =>
                  dispatch(
                    setShowToast({
                      show: false,
                      toastMessage: "",
                      type: "success",
                    })
                  )
                }
              />
            </div>
          </div>
        </div>
        <i className="uil uil-multiply toast-close"></i>
        <div className={`progress before:bg-${mode[type]["color"]}-500`}></div>
      </div>
    </>
  );
};

export default Toast;
