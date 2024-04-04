import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import Helper from "api/Helper";
import swalService from "utils/SwalServices";
import { useNavigate } from "react-router-dom";
import { addEmployeeSchema } from "redux/validator/admin/employee";
import { useDispatch, useSelector } from "react-redux";
import { allEmployeeList } from "redux/actions/action";
import { useTranslation } from "react-i18next";
import { convertDateFormat } from "utils/date";
import { IoCall } from "react-icons/io5";
import Popup from "component/common/Popup";
import apiUrl from "api/apiUrl";

export default function AddEmployee() {
  const employeeData = useSelector(
    (state) => state.employeeReducer.employeeData
  );
  const isOpenDialogBoxToggle = useSelector(
    (state) => state.popUpDialogBox.isShowDialogBox
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [customError, setCustomError] = useState("");
  const [submitOnce, setSubmitOnce] = useState(false);
  const [divBorder, setDivBorder] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  const [divContactBorder, setDivContactBorder] = useState(false);

  const handleFocus = () => setDivBorder(true);
  const handleContactFocus = () => setDivContactBorder(true);
  const handleContactBlur = () => setDivContactBorder(false);
  const handleBlur = () => setDivBorder(false);

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
      swalService.showError({ title: "Error!" });
    }
  };
  const { setFieldValue, values } = Formik;

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
    addEmployessDialoBox();
    const path = apiUrl.sign;
    const { response, status } = await Helper.post(employeesData, path);
    if (status === 200) {
      swalService.showSuccess({
        icon: "success",
        title: "Added!",
        text: response.message,
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      swalService.showError({
        icon: "error",
        title: "Error!",
        text: "Failed to Add New Employee",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    navigate(-1);
  };
  const handleDateChange = (e) => {
    setFieldValue(`${e.target.name}`, convertDateFormat(e.target.value));
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
      navigate(-1);
    }
  };
  const addEmployessDialoBox = () => {
    setShowPopUp(!showPopUp);
  };

  return (
    <div className="h-full w-full flex justify-center">
      {showPopUp && (
        <Popup
          popupBox={addEmployessDialoBox}
          title={t("invite")}
          handleSubmit={submit}
        >
          <div className="w-full flex flex-col border gap-2 ">
            {checkData &&
              Object.keys(checkData?.user)?.map((val, index) => {
                return (
                  <div
                    key={index}
                    className="flex w-full items-center gap-4 p-2 "
                  >
                    <p className="basis-1/4 w-full text-[black]">
                      {val} <span>:</span>
                    </p>
                    <p>{checkData?.user[`${val}`]}</p>
                  </div>
                );
              })}
          </div>
        </Popup>
      )}
      <div
        className={`w-[96%] ${
          isOpenDialogBoxToggle ? "h-fit" : "h-[46.063rem]"
        } 
      p-5 bg-white flex-flex-col space-y-8
      shadow-[0_0px_20px_0px_rgba(3,27,89,0.10)] rounded-[20px]`}
      >
        <div className="w-full h-fit bg-white flex justify-between overflow-y-hidden">
          <div className="flex justify-center items-center">
            <h2 className="font-extrabold text-xl text-[#031B59]">
              {t("addEmployee")}
            </h2>
          </div>

          <div className="flex items-center justify-center space-x-4">
            <button
              className="w-[7.625rem]  h-[2.688rem] flex items-center justify-center rounded-full text-[#686868]"
              onClick={() => navigate(-1)}
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
        <form className="w-full h-fit grid grid-cols-1 lg:grid lg:grid-cols-2 gap-4">
          <div className="flex flex-col space-y-2">
            <label htmlFor="fullName" className="text-[#313135]">
              {t("name")}
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              className="h-[2.625rem] w-full border border-[#E2E8F0] rounded p-[10px_14px_10px_10px] text-[#191919]"
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
            {customError !== "" && <p className="text-[red]">{customError}</p>}
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="text-[#313135]">
              {t("email")}
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="h-[2.625rem] w-full border border-[#E2E8F0] rounded p-[10px_14px_10px_10px] text-[#191919]"
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
            {customError !== "" && <p className="text-[red]">{customError}</p>}
          </div>
          <div>
            <div className="relative flex flex-col space-y-2">
              <label htmlFor="Contact" className="text-[#313135]">
                {t("contact_no")}
              </label>
              <div
                className={`flex border p-[7px] rounded-lg
             w-[100%] ${divContactBorder ? "border-black border-2" : "null"}
            `}
              >
                <div className="flex justify-center items-center relative w-[2rem]">
                  <IoCall className="text-gray-400" />
                </div>
                <input
                  type="text"
                  name="contactNo"
                  id="contactNo"
                  pattern="[0-9]{10}"
                  max="10"
                  maxLength="10"
                  value={Formik.values.contactNo}
                  onChange={Formik.handleChange}
                  onBlur={() => {
                    Formik.handleBlur();
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
                  className="w-full mr-3 bg-inherit outline-none p-1"
                />
              </div>
            </div>
            {Formik.errors.contactNo && Formik.touched.contactNo ? (
              <p className="text-[red]">{Formik.errors.contactNo}</p>
            ) : null}
          </div>

          <div>
            <div className="relative flex flex-col space-y-2">
              <label htmlFor="dob" className="text-[#313135]">
                {t("Date of Birth")}
              </label>
              <div
                className={`flex border p-[7px] rounded-lg
             w-[100%] ${divBorder ? "border-black border-2" : "null"}
            `}
              >
                <input
                  className="w-[90%] mr-3 bg-inherit outline-none p-1"
                  name="dob"
                  type="text"
                  placeholder="DD MM YYYY"
                  disabled
                  value={convertDateFormat(Formik.values?.dob)}
                  onChange={handleDateChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
                <input
                  className="ml-8 w-5 border-[#E2E8F0] rounded text-[#191919] outline-none"
                  type="date"
                  name="dob"
                  id="dob"
                  max="2004-12-31"
                  onChange={handleDateChange}
                  onBlur={Formik.handleBlur}
                />
              </div>
            </div>
            {Formik.errors.dob && Formik.touched.dob ? (
              <p className="text-[red]">{Formik.errors.dob}</p>
            ) : null}
          </div>
        </form>
      </div>
    </div>
  );
}
