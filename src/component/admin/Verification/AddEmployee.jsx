import Helper from "api/Helper";
import Popup from "component/common/Popup";
import { useFormik } from "formik";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaRegCalendar } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { allEmployeeList, setSuccess } from "redux/actions/action";
import { addEmployeeSchema } from "redux/validator/admin/employee";
import ToastServices from "ToastServices";

export default function AddEmployee({ setAddEmployeePop }) {
  const employeeData = useSelector(
    (state) => state.employeeReducer.employeeData
  );
  const isOpenDialogBoxToggle = useSelector(
    (state) => state.popUpDialogBox.isShowDialogBox
  );

  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [customError, setCustomError] = useState("");
  const [submitOnce, setSubmitOnce] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  const [divContactBorder, setDivContactBorder] = useState(false);
  const handleContactFocus = () => setDivContactBorder(true);
  const handleContactBlur = () => setDivContactBorder(false);
  const { success } = useSelector((state) => state.ClientsReducer);

  useEffect(() => {
    if (success) {
      setSubmitOnce(false);
      addEmployessDialoBox();
      dispatch(setSuccess(false));
      setAddEmployeePop(false);
    }
  }, [success]);

  const initialvalues = {
    fullName: "",
    contactNo: "",
    email: "",
    dob: "",
    role: "employee",
  };

  const Formik = useFormik({
    initialValues: initialvalues,
    validationSchema: addEmployeeSchema,
    onSubmit: async () => {
      if (customError) {
        return;
      }
      setSubmitOnce(true);
      addEmployessDialoBox();
      setSubmitOnce(false);
    },
  });
  const fetchData = async () => {
    const path = "fetch_all_emails";
    try {
      const { response } = await Helper.get(path);
      dispatch(allEmployeeList(response.active_users));
    } catch (error) {
      ToastServices.showToast({
        message: "Error!",
        type: "error",
        autoClose: 3000,
      });
    }
  };
  const { setFieldValue, values, handleBlur } = Formik;

  const checkData = {
    user: {
      Name: values?.fullName,
      Email: values?.email,
      "Contact Number": values?.contactNo,
      "Date of Birth": values.dob,
    },
  };
  const employeesData = {
    user: {
      full_name: values?.fullName,
      contact_no: values?.contactNo,
      email: values?.email,
      date_of_birth: values.dob,
      role: values?.role,
    },
  };

  const submit = async () => {
    // dispatch(addEmployeeDetail(employeesData,addEmployessDialoBox,setSubmitOnce));
  };
  const handleDateChange = (e) => {
    setFieldValue(`${e.target.name}`, e.target.value);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleEmployee = (val) => {
    setCustomError("");
    const email = employeeData.find((data) => data?.email === val);
    if (email) {
      setCustomError("User already Exists!");
    }
  };

  const enterClick = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      Formik.handleSubmit();
    } else if (event.key === "Escape") {
      event.preventDefault();
      setAddEmployeePop(false);
    }
  };
  const addEmployessDialoBox = () => {
    setShowPopUp(!showPopUp);
  };

  const getMaxDate = () => {
    const currentDate = new Date();
    const minYear = currentDate.getFullYear() - 18;
    const minDate = new Date(
      minYear,
      currentDate.getMonth(),
      currentDate.getDate()
    );

    return minDate.toISOString().split("T")[0];
  };
  const getMinDate = () => {
    const currentDate = new Date();
    const minYear = currentDate.getFullYear() - 100;
    const minDate = new Date(
      minYear,
      currentDate.getMonth(),
      currentDate.getDate()
    );

    return minDate.toISOString().split("T")[0];
  };

  return (
    <div
      className="w-full h-full flex items-center
justify-end fixed top-0 left-0 z-30 bg-[rgba(3,27,89,.2)] "
    >
      <div
        className="min-w-[40%] h-full bg-white flex-flex-col space-y-8
    shadow-[0_0px_20px_0px_rgba(3,27,89,0.10)] transitionRight"
      >
        <div className="h-full w-full flex justify-center z-60">
          {showPopUp && (
            <Popup
              popupBox={addEmployessDialoBox}
              title={t("confirmDetail")}
              handleSubmit={submit}
              submitOnce={submitOnce}
            >
              <div className="w-full flex flex-col border gap-2 ">
                {checkData &&
                  Object.keys(checkData?.user)?.map((val, index) => {
                    return (
                      checkData?.user[val] && (
                        <div
                          key={index}
                          className="flex w-full items-center gap-4 p-2 text-black"
                        >
                          <p className="basis-1/4 w-full text-[black]">
                            {val} <span>:</span>
                          </p>
                          <p>{checkData?.user[`${val}`]}</p>
                        </div>
                      )
                    );
                  })}
              </div>
              <p className=" text-[#031B59] font-extrabold text-sm">
                Invitation sent via Email
              </p>
            </Popup>
          )}
          <div
            className={`w-[100%] ${
              isOpenDialogBoxToggle ? "h-fit" : "max-h-full"
            } 
       bg-white flex flex-col justify-between space-y-8
       rounded-[20px]`}
          >
            <div>
              <div className="w-full p-5 bg-white flex justify-between">
                <div className="flex justify-center items-center font-extrabold">
                  <h2 className="font-extrabold text-xl text-[#031B59]">
                    {t("addemployees")}
                  </h2>
                </div>
                <div
                  className="border-[#031b59] p-1 text-2xl cursor-pointer font-extrabold"
                  onClick={() => setAddEmployeePop(false)}
                >
                  <RxCross2 />
                </div>
              </div>
              <hr />
              <form className="w-full pr-5 pl-5 pt-5 h-fit grid grid-cols-1 lg:grid lg:grid-cols-2 gap-4">
                <div className="flex flex-col space-y-2 text-black">
                  <label htmlFor="fullName" className="text-[#313135]">
                    {t("name")}
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    id="fullName"
                    className="h-[3rem] w-full border border-[#E2E8F0] rounded p-[10px_14px_10px_10px] text-[#191919]"
                    value={Formik.values.fullName}
                    onChange={(e) => {
                      Formik.handleChange(e);
                      handleEmployee(e.target.value);
                    }}
                    onBlur={(e) => {
                      Formik.handleBlur(e);
                      handleEmployee(e.target.value);
                    }}
                    onKeyDown={(e) => enterClick(e)}
                  />
                  {Formik.errors.fullName && Formik.touched.fullName ? (
                    <p className="text-[red]">{Formik.errors.fullName}</p>
                  ) : null}
                </div>

                <div className="flex flex-col space-y-2 text-black">
                  <label htmlFor="email" className="text-[#313135]">
                    {t("email")}
                  </label>
                  <input
                    type="text"
                    name="email"
                    placeholder="Enter Gmail"
                    id="email"
                    className="h-[3rem] w-full border border-[#E2E8F0] rounded p-[10px_14px_10px_10px] text-[#191919]"
                    value={Formik.values.email}
                    onChange={(e) => {
                      Formik.handleChange(e);
                      handleEmployee(e.target.value);
                    }}
                    onBlur={(e) => {
                      Formik.handleBlur(e);
                      handleEmployee(e.target.value);
                    }}
                    onKeyDown={(e) => enterClick(e)}
                  />
                  {Formik.errors.email && Formik.touched.email ? (
                    <p className="text-[red]">{Formik.errors.email}</p>
                  ) : null}
                  {customError !== "" && (
                    <p className="text-[red]">{customError}</p>
                  )}
                </div>
                <div>
                  <div className="relative flex flex-col space-y-2 w-full">
                    <label htmlFor="Contact" className="text-[#313135]">
                      {t("contact_no")}
                    </label>
                    <div
                      className={`flex border p-[7px] rounded-lg
             w-[100%] ${
               divContactBorder ? "border-black border-[1.59px]" : "null"
             }
            `}
                    >
                      <div className="flex justify-center items-center relative w-[2rem]">
                        <IoCall className="text-gray-400" />
                      </div>
                      <input
                        role="contect"
                        placeholder="Contact No"
                        type="text"
                        name="contactNo"
                        id="contactNo"
                        pattern="[0-9]{10}"
                        max="10"
                        maxLength="10"
                        value={Formik.values.contactNo}
                        onChange={Formik.handleChange}
                        onBlur={() => {
                          // eslint-disable-next-line no-unused-expressions
                          Formik.handleBlur;
                          handleContactBlur();
                        }}
                        onFocus={handleContactFocus}
                        onKeyDown={(e) => {
                          if (
                            !/\d/.test(e.key) &&
                            e.key !== "Backspace" &&
                            e.key !== "Delete" &&
                            e.key !== "ArrowLeft" &&
                            e.key !== "ArrowRight"
                          ) {
                            e.preventDefault();
                          }
                          enterClick(e);
                        }}
                        inputMode="numeric"
                        className="w-full mr-3 bg-inherit outline-none p-[5px_7px_5px_5px] text-black"
                      />
                    </div>
                  </div>
                  {Formik.errors.contactNo && Formik.touched.contactNo ? (
                    <p className="text-[red]">{Formik.errors.contactNo}</p>
                  ) : null}
                </div>

                <div>
                  <div className="relative flex flex-col space-y-2 text-black">
                    <label htmlFor="dob" className="text-[#313135]">
                      {t("dOB")}
                    </label>
                    <div className={`flex border outline-none  relative`}>
                      <input
                        className="w-full p-[10px] h-[46px] relative rounded-[0.25rem] outline-none z-10 bg-transparent"
                        type="date"
                        id="date"
                        value={Formik.values?.dob}
                        name={"dob"}
                        onChange={handleDateChange}
                        onBlur={handleBlur}
                        max={getMaxDate()}
                        min={getMinDate()}
                      />
                      <FaRegCalendar className="text-sm mt-4 absolute right-0 mr-3" />
                    </div>
                  </div>
                  {Formik.errors.dob && Formik.touched.dob ? (
                    <p className="text-[red]">{Formik.errors.dob}</p>
                  ) : null}
                </div>
              </form>
            </div>

            <div className="w-full h-fit p-5 bg-white flex justify-end overflow-y-hidden">
              <div className="flex items-center justify-center space-x-4">
                <button
                  className="w-[7.625rem]  h-[2.688rem] flex items-center justify-center rounded-full text-[#686868]"
                  onClick={() => setAddEmployeePop(false)}
                >
                  {t("cancel")}
                </button>
                <button
                  className="h-[2.813rem] w-[7.625rem] p-2 bg-[#23275E] text-white rounded-full"
                  disabled={submitOnce}
                  type="submit"
                  onClick={!submitOnce && Formik.handleSubmit}
                >
                  {t("submit")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

AddEmployee.propTypes = {
  setAddEmployeePop: PropTypes.any,
};
