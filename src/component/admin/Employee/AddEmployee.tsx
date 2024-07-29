import apiUrl from "api/apiUrl";
import Helper from "api/Helper";
import Popup from "component/common/Popup";
import { FormikHelpers, useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { GrFormClose } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { allEmployeeList } from "redux/actions/action";
import { RootState } from "redux/store";
import { addEmployeeSchema } from "redux/validator/admin/employee";
import { convertDateFormat } from "utils/date";
import swalService from "utils/SwalServices";

interface AddEmployeeProps {
  setShowAddEmployeePopup: (show: boolean) => void;
}

interface EmployeeData {
  fullName: string;
  contactNo: string;
  email: string;
  dob: string;
  role: string;
}

const AddEmployee: React.FC<AddEmployeeProps> = ({
  setShowAddEmployeePopup,
}) => {
  const employeeData = useSelector(
    (state: RootState) => state.employeeReducer.employeeData
  );
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [errorMessages, setErrorMessages] = useState<Record<string, string>>(
    {}
  );
  const [submitOnce, setSubmitOnce] = useState<boolean>(false);
  const [showPopUp, setShowPopUp] = useState<boolean>(false);
  const [divContactBorder, setDivContactBorder] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const handleContactFocus = () => setDivContactBorder(true);

  const initialValues: EmployeeData = {
    fullName: "",
    contactNo: "",
    email: "",
    dob: "",
    role: "employee",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: addEmployeeSchema,
    onSubmit: async (
      values: EmployeeData,
      { setSubmitting }: FormikHelpers<EmployeeData>
    ) => {
      setSubmitting(true);
      await submit();
      setSubmitting(false);
    },
  });

  const cancelButton = () => {
    setShowAddEmployeePopup(false);
  };

  const fetchData = async () => {
    const path = "fetch_all_emails";
    try {
      const { response }: any = await Helper.get(path);
      dispatch(allEmployeeList(response.active_users));
    } catch (error) {
      swalService.showError({
        icon: "error",
        title: "Error!",
        text: "Failed to fetch employee data",
        timer: 1500,
      });
    }
  };

  const { setFieldValue, values } = formik;

  const checkData = {
    user: {
      Name: values.fullName,
      Email: values.email,
      "Contact Number": values.contactNo,
      "Date of Birth": values.dob,
    },
  };

  const employeesData = {
    user: {
      full_name: values.fullName,
      contact_no: values.contactNo,
      email: values.email,
      date_of_birth: values.dob,
    },
  };

  const submit = async () => {
    if (isChecked) {
      const path = apiUrl.sign;
      const { response, status }: any = await Helper.post(employeesData, path);
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
          timer: 1500,
        });
      }

      setShowAddEmployeePopup(false);
      setShowPopUp(false);
    } else {
      alert("Please agree to the terms and conditions");
    }
  };
  const handleSubmit2 = () => {
    const errors: Record<string, string> = {};

    if (formik.values.fullName.trim() === "") {
      errors.fullName = "Please enter your full name.";
    }
    if (formik.values.contactNo.trim() === "") {
      errors.contactNo = "Please enter your contact number.";
    }
    if (formik.values.email.trim() === "") {
      errors.email = "Please enter your email.";
    }
    if (formik.values.dob.trim() === "") {
      errors.dob = "Please enter your date of birth.";
    }

    setErrorMessages(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }

    setSubmitOnce(false);
    setShowPopUp(true);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue(e.target.name, convertDateFormat(e.target.value));
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!setShowAddEmployeePopup) return null;

  const handleEmployee = (val: string) => {
    setErrorMessages({});
    const email = employeeData.find(
      (data: { email: string }) => data.email === val
    );
    if (email) {
      setErrorMessages((prevErrors) => ({
        ...prevErrors,
        email: "User already exists!",
      }));
    }
  };

  const enterClick = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault();
      formik.handleSubmit();
    } else if (event.key === "Escape") {
      event.preventDefault();
      setShowPopUp(false);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[rgba(3,27,89,.2)] z-50">
      {!showPopUp && (
        <div
          className="bg-white p-5 rounded-[20px] shadow-lg max-w-[500px] w-full"
          style={{
            width: "880px",
            height: "auto",
            gap: "20px",
            borderRadius: "8px",
          }}
        >
          <div className="flex justify-between items-center mb-5">
            <h2 className="font-extrabold text-xl text-[#031B59]">
              {t("Add Employee")}
            </h2>
            <button className="w-fit h-fit" onClick={cancelButton}>
              <GrFormClose className="flex w-[2rem] h-[2rem]" />
            </button>
          </div>
          <form className="gap-4 flex-col" onSubmit={formik.handleSubmit}>
            <div className="flex flex-col">
              <label style={{ width: "43px", height: "22px" }}>
                {t("Name")}
              </label>
              <input
                type="text"
                required
                name="fullName"
                id="fullName"
                placeholder="Enter your name"
                style={{
                  borderRadius: "4px",
                  borderWidth: "1px",
                  gap: "8px",
                  padding: "10px",
                }}
                className="h-[2.625rem] w-full border border-[#E2E8F0] rounded p-2 text-[#191919]"
                value={formik.values.fullName}
                onChange={(e) => {
                  formik.handleChange(e);
                  handleEmployee(e.target.value);
                }}
                onKeyDown={enterClick}
              />
              {formik.errors.fullName && formik.touched.fullName && (
                <p className="text-[red] text-left">{formik.errors.fullName}</p>
              )}
              {errorMessages.fullName && (
                <p className="text-[red] text-left">{errorMessages.fullName}</p>
              )}
            </div>
            <br />
            <div className="flex flex-col">
              <label style={{ width: "40px", height: "22px" }}>
                {t("Email")}
              </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={formik.values.email}
                style={{
                  borderRadius: "4px",
                  borderWidth: "1px",
                  gap: "8px",
                  padding: "10px",
                }}
                onChange={(e) => {
                  formik.handleChange(e);
                  handleEmployee(e.target.value);
                }}
                onKeyDown={enterClick}
              />
              {formik.errors.email && formik.touched.email && (
                <p className="text-[red]">{formik.errors.email}</p>
              )}
              {errorMessages.email && (
                <p className="text-[red] text-left">{errorMessages.email}</p>
              )}
            </div>
            <br />
            <div className="flex flex-col">
              <label
                style={{ width: "150px", height: "22px", textAlign: "left" }}
              >
                {t("Contact Number")}
              </label>
              <div
                className={`flex border p-2 rounded-lg w-full ${
                  divContactBorder ? "border-black border-2" : ""
                }`}
              >
                <input
                  type="text"
                  name="contactNo"
                  id="contactNo"
                  placeholder="Enter your phone number"
                  pattern="[0-9]{10}"
                  maxLength={10}
                  value={formik.values.contactNo}
                  onChange={formik.handleChange}
                  onFocus={handleContactFocus}
                  onKeyDown={(e) => {
                    if (
                      !/\d/.test(e.key) &&
                      ![
                        "Backspace",
                        "Delete",
                        "ArrowLeft",
                        "ArrowRight",
                      ].includes(e.key)
                    ) {
                      e.preventDefault();
                    }
                    enterClick(e);
                  }}
                  className="w-full bg-inherit outline-none p-1"
                />
              </div>
              {formik.errors.contactNo && formik.touched.contactNo && (
                <p className="text-[red] text-left">
                  {formik.errors.contactNo}
                </p>
              )}
              {errorMessages.contactNo && (
                <p className="text-[red] text-left">
                  {errorMessages.contactNo}
                </p>
              )}
            </div>
            <br />
            <div className="flex flex-col">
              <label
                style={{ width: "110px", height: "22px", textAlign: "left" }}
              >
                {t("Date of Birth")}
              </label>
              <input
                type="date"
                name="dob"
                id="dob"
                value={formik.values.dob}
                onChange={(e) => {
                  handleDateChange(e);
                  formik.handleChange(e);
                }}
                onKeyDown={enterClick}
                className="w-full bg-inherit outline-none p-1"
                style={{
                  borderRadius: "4px",
                  borderWidth: "1px",
                  gap: "8px",
                  padding: "10px",
                }}
              />
              {formik.errors.dob && formik.touched.dob && (
                <p className="text-[red] text-left">{formik.errors.dob}</p>
              )}
              {errorMessages.dob && (
                <p className="text-[red] text-left">{errorMessages.dob}</p>
              )}
            </div>
            <br />
            <div className="flex justify-end space-x-4 mt-4 ">
              <button
                className="text-[#686868] rounded-full"
                onClick={cancelButton}
              >
                {t("cancel")}
              </button>
              <button
                type="button"
                className="h-[2.688rem] w-[7.625rem] bg-[#23275E] text-white rounded-full"
                disabled={submitOnce}
                onClick={() => handleSubmit2()}
              >
                {t("Add")}
              </button>
            </div>
          </form>
        </div>
      )}
      {showPopUp && (
        <Popup
          popupBox={cancelButton}
          title={t("invite")}
          handleSubmit={submit}
        >
          <div className="w-full flex flex-col border gap-2">
            {checkData &&
              Object.keys(checkData.user).map((key: string, index) => (
                <div key={index} className="flex items-center gap-4 p-2">
                  <p className="basis-1/4 text-black">
                    {key} <span>:</span>
                  </p>
                  <p>{(checkData.user as any)[key]}</p>
                </div>
              ))}
          </div>
          <div style={{ display: "flex", gap: "4px" }}>
            <input
              type="checkbox"
              id="topping"
              name="topping"
              value="addemail"
              checked={isChecked}
              onChange={(event) => setIsChecked(event.target.checked)}
              style={{
                width: "18px",
                marginTop: "4px",
                height: "18px",
                fontSize: "16px",
              }}
            />
            <span className="w-141 h-19 top-0 flex-start">
              {" "}
              Invite User via email
            </span>
          </div>
        </Popup>
      )}
    </div>
  );
};

export default AddEmployee;
