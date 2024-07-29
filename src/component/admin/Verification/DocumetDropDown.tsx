import { useState } from "react";
import { FaArrowLeftLong, FaChevronRight } from "react-icons/fa6";
import NotifyPopUp from "./NotifyPopUp";
import VerficationDetails from "./VerificationDetails";

const DocumetDropDown = () => {
  const [isNotifyPopUp, setNotifyPopUp] = useState(false);
  const [handleDropDown, setHandleDropDown] = useState(false);
  return (
    <div className={`rounded-xl ${handleDropDown && "border"} h-full mt-2  `}>
      <div
        className={`w-full bg-${
          !handleDropDown && "[#031B59]  text-white "
        } p-3 px-4 items-center rounded-xl   flex justify-between`}
      >
        <div className="flex gap-2 items-center">
          {handleDropDown && (
            <div
              className="cursor-pointer"
              onClick={() => setHandleDropDown(!handleDropDown)}
            >
              <FaArrowLeftLong />
            </div>
          )}
          Documents
        </div>
        {!handleDropDown && (
          <div
            className="text-white cursor-pointer"
            onClick={() => setHandleDropDown(true)}
          >
            <FaChevronRight />
          </div>
        )}
        <div
          className={`text-[#031B59] font-semibold cursor-pointer ${
            !handleDropDown ? "hidden" : ""
          } `}
          onClick={() => setNotifyPopUp(!isNotifyPopUp)}
        >
          Notify
        </div>
        {isNotifyPopUp ? (
          <NotifyPopUp
            isNotifyPopUp={isNotifyPopUp}
            setNotifyPopUp={setNotifyPopUp}
            tabName={"Identity Check"}
          />
        ) : (
          ""
        )}
      </div>
      <div className="mt-2 h-full px-4">
        {handleDropDown && <VerficationDetails />}
      </div>
    </div>
  );
};

export default DocumetDropDown;
