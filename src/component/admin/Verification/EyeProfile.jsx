// import { EditButton } from "component/common/accessControlUi/Button";
// import ProfileAvtar from "component/common/ProfileAvtar";
// import { mappedPermissionObj } from "hooks/usePermission";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
// import { BsChevronDown } from "react-icons/bs";
// import { CiLocationOn } from "react-icons/ci";
// import { FaRegEnvelope } from "react-icons/fa";
// import { FiPhone } from "react-icons/fi";
// import { PiBagSimpleLight } from "react-icons/pi";
// import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";
// import { content } from "utils/constant/Content";
// import AssignProjectManagerInfo from "./EmployeeDetails/AssignProjectManagerInfo";
// import BankDetailInfo from "./EmployeeDetails/BankDetailInfo";
// import DocumentInfo from "./EmployeeDetails/DocumentInfo";
// import InviteInfo from "./EmployeeDetails/InviteInfo";
// import OtherInfo from "./EmployeeDetails/OtherInfo";
// import PersonalInfo from "./EmployeeDetails/PersonalInfo";
// import ResetPassword from "./EmployeeDetails/ResetPassword";
// import SalaryInfo from "./EmployeeDetails/SalaryInfo";

export default function EyeProfile({ setOpenPopUp }) {
  const [accordionOpen, setAccordionOpen] = useState(null);
  const { t } = useTranslation();
  const [editState, setEditState] = useState(null);
  const clickEye = useSelector((state) => state.profileReducer.eyeEmp);
  const user = useSelector((state) => state.profileReducer.profileData);
  const emailName = clickEye?.email?.split("@")[0];

  const handleOpenDetails = (index) => {
    setAccordionOpen((prevIndex) => (prevIndex === index ? null : index));
  };
  const handleEdit = (section) => {
    setEditState(section);
    setAccordionOpen(true);
  };
  useEffect(() => {
    if (accordionOpen !== null) {
      setEditState(null);
    }
  }, [accordionOpen]);

  return (
    <>
      <div
        className="w-full h-full flex items-center capitalize
justify-end fixed top-0 left-0 z-30 bg-[rgba(3,27,89,.2)] "
      >
        {/* <div
          className="min-w-[40%] h-full p-6 bg-white flex-flex-col space-y-8
shadow-[0_0px_20px_0px_rgba(3,27,89,0.10)] transitionRight"
        >
          <div>
            <div className="flex justify-between items-center">
              <div className="flex gap-1">
                <h1 className="font-semibold text-[1.4rem] text-[#031b59] flex items-center">
                  {t("employee")}
                </h1>
              </div>
              <div
                className="border-2 p-1 text-[1.5rem] cursor-pointer"
                onClick={() => setOpenPopUp(false)}
              >
                <RxCross2 />
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <div>
                <div className="w-full flex flex-col justify-between flex-wrap pt-[2rem] gap-2">
                  <div className="flex border-b-2 justify-between pb-5">
                    <div className="flex flex-col items-center">
                      <div className="w-full h-fit ">
                        <div className="flex gap-8">
                          <div className="text-[3rem]">
                            {user?.profile_picture_url ? (
                              <div className="">
                                <img
                                  className="h-[7rem] w-[7rem] rounded-[50%]"
                                  src={user?.profile_picture_url}
                                ></img>
                              </div>
                            ) : (
                              <ProfileAvtar
                                name={user?.name || emailName}
                                bgImgColor="#031b59"
                                height="7rem"
                                width="7rem"
                              />
                            )}
                          </div>
                          <div>
                            <div className="flex">
                              <h1 className="text-3xl">
                                {user?.full_name || emailName || "User"}
                              </h1>
                              <div className="flex items-center justify-center w-10 ml-5">
                                <div
                                  className="w-6 h-fit flex items-center justify-center bg-green-600 text-white
                 text-xs  rounded-sm"
                                >
                                  IN
                                </div>
                              </div>
                            </div>
                            <div className="w-full h-[3rem] flex mt-5 gap-[5rem] text-md pb-5 ">
                              <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2">
                                  <PiBagSimpleLight className="text-[rgb(180,178,209)]" />
                                  {user?.designation?.designation != null
                                    ? user?.designation?.designation
                                    : "-"}
                                </div>
                                <div className="flex items-center gap-2">
                                  <FaRegEnvelope className="text-[rgb(180,178,209)]" />
                                  {user?.email != null ? user?.email : "-"}
                                </div>
                              </div>
                              <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2">
                                  <FiPhone className="text-[rgb(180,178,209)]" />
                                  {user?.contact_no ?? "-"}
                                </div>
                                <div className="flex items-center gap-2">
                                  <CiLocationOn className="text-[rgb(180,178,209)]" />
                                  {user?.state ?? "-"}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-fit h-fit flex justify-around gap-10 text-xs ">
                    <div className="w-fit h-fit">
                      <h1 className="text-[rgb(136,136,145)]">
                        {t("businessUnit")}
                      </h1>
                      <h1 className="text-[rgb(79,72,179)] text-[0.89rem]">
                        {user?.businessUnit ?? "-"}
                      </h1>
                    </div>
                    <div className="w-fit h-fit">
                      <h1 className="text-[rgb(136,136,145)]">
                        {t("department")}
                      </h1>
                      <h1 className="text-[rgb(79,72,179)] uppercase text-[0.89rem]">
                        {user?.department ?? "-"}
                      </h1>
                    </div>
                    <div className="w-fit h-fit ">
                      <h1 className="text-[rgb(136,136,145)]">
                        {t("reportingManager")}
                      </h1>
                      <div className="flex">
                        <img src="" alt="" />
                        <h1 className="text-[rgb(79,72,179)] uppercase text-[0.89rem]">
                          {user?.reportingManager ?? "-"}
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 max-h-[68vh] overflow-y-scroll custom_scroll ">
                <div
                  className={`h-[2.8rem] w-full p-5 group flex justify-between items-center rounded-xl
                    shadow-[0_0px_6px_0px_rgba(3,27,89,0.2)] ${
                      accordionOpen === 1 && "text-white bg-[#031B59]"
                    }
                    hover:text-white hover:bg-[#031B59] cursor-pointer`}
                  onClick={() => handleOpenDetails(1)}
                >
                  <h3>{content.persInfo}</h3>
                  {accordionOpen === 1 ? (
                    <div className="">
                      <div className=" flex cursor-pointer">
                        <EditButton
                          onClick={() => handleEdit(1)}
                          currentResource={mappedPermissionObj.User}
                        />
                      </div>
                    </div>
                  ) : (
                    <BsChevronDown className="h-3 w-4 stroke-1 " />
                  )}
                </div>
                <div>
                  {accordionOpen === 1 && (
                    <PersonalInfo
                      accordionOpen={accordionOpen}
                      editState={editState}
                      setEditState={setEditState}
                      clickEye={clickEye}
                    />
                  )}
                </div>
                <div
                  className={`h-[2.8rem] w-full p-5 group flex justify-between items-center rounded-xl
                    shadow-[0_0px_6px_0px_rgba(3,27,89,0.2)] ${
                      accordionOpen === 2 && "text-white bg-[#031B59]"
                    }
                    hover:text-white hover:bg-[#031B59] cursor-pointer`}
                  onClick={() => handleOpenDetails(2)}
                >
                  <h3>{content.otherInfo}</h3>
                  {accordionOpen === 2 ? (
                    <div className="">
                      <div className=" flex cursor-pointer">
                        <EditButton
                          onClick={() => handleEdit(2)}
                          currentResource={mappedPermissionObj.User}
                        />
                      </div>
                    </div>
                  ) : (
                    <BsChevronDown className="h-3 w-4 stroke-1 " />
                  )}
                </div>
                <div>
                  <OtherInfo
                    accordionOpen={accordionOpen}
                    editState={editState}
                    eyeId={clickEye?.id}
                    setEditState={setEditState}
                  />
                </div>
                <div
                  className={`h-[2.8rem] w-full p-5 group flex justify-between items-center rounded-xl
                    shadow-[0_0px_6px_0px_rgba(3,27,89,0.2)] ${
                      accordionOpen === 3 && "text-white bg-[#031B59]"
                    }
                    hover:text-white hover:bg-[#031B59] cursor-pointer`}
                  onClick={() => handleOpenDetails(3)}
                >
                  <h3>{content.documents}</h3>
                  {accordionOpen === 3 ? (
                    <div className="">
                      <div className=" flex cursor-pointer">
                        <EditButton
                          onClick={() => handleEdit(3)}
                          currentResource={mappedPermissionObj.User}
                        />
                      </div>
                    </div>
                  ) : (
                    <BsChevronDown className="h-3 w-4 stroke-1 " />
                  )}
                </div>
                <div>
                  <DocumentInfo
                    accordionOpen={accordionOpen}
                    editState={editState}
                    setEditState={setEditState}
                    eyeId={clickEye?.document?.id}
                  />
                </div>
                <div
                  className={`h-[2.8rem] w-full p-5 group flex justify-between items-center rounded-xl
                    shadow-[0_0px_6px_0px_rgba(3,27,89,0.2)] ${
                      accordionOpen === 4 && "text-white bg-[#031B59]"
                    }
                    hover:text-white hover:bg-[#031B59] cursor-pointer`}
                  onClick={() => handleOpenDetails(4)}
                >
                  <h3>{content.salaryInfo}</h3>
                  {accordionOpen === 4 ? (
                    <div className="">
                      <div className=" flex cursor-pointer">
                        <EditButton
                          onClick={() => handleEdit(4)}
                          currentResource={mappedPermissionObj.User}
                        />
                      </div>
                    </div>
                  ) : (
                    <BsChevronDown className="h-3 w-4 stroke-1 " />
                  )}
                </div>
                <div>
                  <SalaryInfo
                    accordionOpen={accordionOpen}
                    editState={editState}
                    setEditState={setEditState}
                    clickEye={clickEye?.id}
                  />
                </div>
                <div
                  className={`h-[2.8rem] w-full p-5 group flex justify-between items-center rounded-xl
                    shadow-[0_0px_6px_0px_rgba(3,27,89,0.2)] ${
                      accordionOpen === 5 && "text-white bg-[#031B59]"
                    }
                    hover:text-white hover:bg-[#031B59] cursor-pointer`}
                  onClick={() => handleOpenDetails(5)}
                >
                  <h3>{content.bankDetails}</h3>
                  {accordionOpen === 5 ? (
                    <div className="">
                      <div className=" flex cursor-pointer">
                        <EditButton
                          onClick={() => handleEdit(5)}
                          currentResource={mappedPermissionObj.User}
                        />
                      </div>
                    </div>
                  ) : (
                    <BsChevronDown className="h-3 w-4 stroke-1 " />
                  )}
                </div>
                <div>
                  <BankDetailInfo
                    accordionOpen={accordionOpen}
                    editState={editState}
                    setEditState={setEditState}
                    eyeId={clickEye?.id}
                    bankId={clickEye?.bank?.id}
                    setAccordionOpen={setAccordionOpen}
                  />
                </div>
                <div
                  className={`h-[2.8rem] w-full p-5 group flex justify-between items-center rounded-xl
                    shadow-[0_0px_6px_0px_rgba(3,27,89,0.2)] ${
                      accordionOpen === 6 && "text-white bg-[#031B59]"
                    }
                    hover:text-white hover:bg-[#031B59] cursor-pointer`}
                  onClick={() => handleOpenDetails(6)}
                >
                  <h3>{content.assign}</h3>
                  {accordionOpen === 6 ? (
                    <div className="">
                      <div className=" flex cursor-pointer">
                        <EditButton
                          onClick={() => handleEdit(6)}
                          currentResource={mappedPermissionObj.User}
                        />
                      </div>
                    </div>
                  ) : (
                    <BsChevronDown className="h-3 w-4 stroke-1 " />
                  )}
                </div>
                <AssignProjectManagerInfo
                  accordionOpen={accordionOpen}
                  editState={editState}
                  setEditState={setEditState}
                  clickEye={clickEye}
                />
                <div
                  className={`h-[2.8rem] w-full p-5 group flex justify-between items-center rounded-xl
                    shadow-[0_0px_6px_0px_rgba(3,27,89,0.2)] ${
                      accordionOpen === 7 && "text-white bg-[#031B59]"
                    }
                    hover:text-white hover:bg-[#031B59] cursor-pointer`}
                  onClick={() => handleOpenDetails(7)}
                  onChange={() => {
                    handleEdit(7);
                  }}
                >
                  <h3>{content.resetPassword}</h3>
                  {accordionOpen === 7 ? (
                    <div className="">
                      <div className=" flex cursor-pointer">
                        <EditButton
                          onClick={() => handleEdit(7)}
                          currentResource={mappedPermissionObj.User}
                        />
                      </div>
                    </div>
                  ) : (
                    <BsChevronDown className="h-3 w-4 stroke-1 " />
                  )}
                </div>
                <ResetPassword
                  accordionOpen={accordionOpen}
                  editState={editState}
                  setEditState={setEditState}
                  setAccordionOpen={setAccordionOpen}
                />
                <div
                  className={`h-[2.8rem] w-full p-5 group flex justify-between items-center rounded-xl
                    shadow-[0_0px_6px_0px_rgba(3,27,89,0.2)] ${
                      accordionOpen === 8 && "text-white bg-[#031B59]"
                    }
                    hover:text-white hover:bg-[#031B59] cursor-pointer`}
                  onClick={() => handleOpenDetails(8)}
                >
                  <h3>{content.inviteDet}</h3>
                  {accordionOpen === 8 ? (
                    <div className="">
                      <div className=" flex cursor-pointer">
                        <BsChevronDown className="h-3 w-4 stroke-1 " />
                      </div>
                    </div>
                  ) : (
                    <BsChevronDown className="h-3 w-4 stroke-1 " />
                  )}
                </div>
                <InviteInfo
                  accordionOpen={accordionOpen}
                  editState={editState}
                  clickEye={clickEye}
                  setEditState={setEditState}
                />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

EyeProfile.propTypes = {
  id: PropTypes.any,
  setOpenPopUp: PropTypes.any,
};
