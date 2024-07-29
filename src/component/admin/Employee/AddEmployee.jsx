import apiUrl from "api/apiUrl";
import Helper from "api/Helper";
import Popup from "component/common/Popup";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { GrFormClose } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { allEmployeeList } from "redux/actions/action";
import { addEmployeeSchema } from "redux/validator/admin/employee";
import { convertDateFormat } from "utils/date";
import swalService from "utils/SwalServices";
// AddEmployee component definition
export default function AddEmployee({ setShowAddEmployeePopup }) {
  // Retrieve employee data and dialog box state from the Redux store
  const employeeData = useSelector(
    (state) => state.employeeReducer.employeeData
  );

  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [customError, setCustomError] = useState(""); // State for custom validation errors
  const [submitOnce, setSubmitOnce] = useState(false); // State to track if the form has been submitted once
  const [showPopUp, setShowPopUp] = useState(false); // State to manage popup visibility
  const [divBorder, setDivBorder] = useState(false); // State for form field border color
  const [divContactBorder, setDivContactBorder] = useState(false); // State for contact field border color
  const [cancel, setcancel] = useState("");
  // Handlers for form field focus and blur events
  const handleFocus = () => setDivBorder(true);
  const handleContactFocus = () => setDivContactBorder(true);
  const [isChecked, setIsChecked] = useState(false);
  // Initial values for the form fields
  const initialvalues = {
    fullName: "",
    contactNo: "",
    email: "",
    dob: "",
    role: "employee",
  };
  // Formik configuration for form handling and validation
  const Formik = useFormik({
    initialValues: initialvalues,
    validationSchema: addEmployeeSchema,
    onSubmit: async () => {
      //setSubmitOnce(true); // Set submitOnce to true to prevent multiple submissions
      //await submit(); // Call the submit function to handle form submission
    },
  });
  const cancleButton = () => {
    setcancel(setShowAddEmployeePopup);
  };
  // Function to fetch employee data from the API
  const fetchData = async () => {
    const path = "fetch_all_emails";
    try {
      const { response } = await Helper.get(path);
      dispatch(allEmployeeList(response.active_users)); // Dispatch action to store employee list
    } catch (error) {
      swalService.showError({ title: "Error!" }); // Show error message if the fetch fails
    }
  };
  // Destructure Formik values and handlers
  const { setFieldValue, values } = Formik;
  // Data object to display in the popup
  const checkData = {
    user: {
      Name: values?.fullName,
      Email: values?.email,
      "Contact Number": values?.contactNo,
      "Date of Birth": values.dob,
    },
  };
  // Data object for employee creation API request
  const employeesData = {
    user: {
      full_name: values?.fullName,
      contact_no: values?.contactNo,
      email: values?.email,
      date_of_birth: values.dob,
      role: values?.role,
    },
  };
  // Function to handle form submission{}

  const submit = async () => {
    if (isChecked) {
      const path = apiUrl.sign;
      const { response, status } = await Helper.post(employeesData, path);
      if (status === 200) {
        swalService.showSuccess({
          icon: "success",
          title: "Added!",
          text: response.message,
          showConfirmButton: false,
          timer: 1500,
        }); // Show success message on successful addition
      } else {
        swalService.showError({
          icon: "error",
          title: "Error!",
          text: "Failed to Add New Employee",
          showConfirmButton: false,
          timer: 1500,
        }); // Show error message if the addition fails
      }

      setcancel(setShowAddEmployeePopup);
      setShowPopUp(false); // Close the popup after submission
      // navigate(-1); // Navigate back after submission
    } else {
      alert("please write");
    }
  };
  const Handlesubmit2 = () => {
    if (
      Formik.values.fullName.trim() === "" ||
      Formik.values.contactNo.trim() === "" ||
      Formik.values.email.trim() === "" ||
      Formik.values.dob.trim() === ""
    ) {
      setCustomError("Please fill in all required fields.");
      return;
    }

    setSubmitOnce(false); // Reset submitOnce after form submission
    setShowPopUp(true);
    // handleAddEmployeeClick()
  };
  // Handler to format the date input value
  const handleDateChange = (e) => {
    setFieldValue(e.target.name, convertDateFormat(e.target.value));
  };
  // useEffect hook to fetch data when popup is displayed
  useEffect(() => {
    if (setShowAddEmployeePopup) {
      fetchData(); // Fetch data when popup is shown
    }
  }, [setShowAddEmployeePopup]);
  // Return null if the popup is not to be displayed
  if (!setShowAddEmployeePopup) return null;
  // Function to validate employee data based on the provided value
  const handleEmployee = (val) => {
    setCustomError("");
    const email = employeeData.find((data) => data?.email === val);
    if (email) {
      setCustomError("User already Exists!"); // Set custom error if email already exists
    }
  };
  // Handler for form submission on pressing Enter or Escape keys
  const enterClick = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      Formik.handleSubmit();
    } else if (event.key === "Escape") {
      event.preventDefault();
      setShowPopUp(false); // Close the popup on Escape key press
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center   bg-[rgba(3,27,89,.2)] z-50">
      {/* Popup container */}
      {!showPopUp && (
        <div
          className="bg-white p-5 rounded-[20px] shadow-lg max-w-[500px] w-full"
          style={{ width: "880px", height: "auto", gap: "20px", radius: "8px" }}
        >
          <div className="flex justify-between items-center mb-5">
            <h2 className="font-extrabold text-xl text-[#031B59]">
              {t("Add Employee")}
            </h2>
            <button className="w-fit h-fit" onClick={cancleButton}>
              <GrFormClose className="flex w-[2rem] h-[2rem]" />
            </button>
          </div>
          <form
            className=" gap-4 flex-col"
            //  onSubmit={Formik.handleSubmit}/
            //  onSubmit={Han}
          >
            {/* Full Name Input */}
            <div className="flex flex-col ">
              <label style={{ width: "43px", height: "22px" }}>
                {t("name")}
              </label>
              <input
                type="text"
                require
                name="fullName"
                id="fullName"
                style={{
                  borderRadius: "4px",
                  borderWidth: "1px",
                  gap: "8px",
                  padding: "10px",
                }}
                className="h-[2.625rem] w-full border border-[#E2E8F0] rounded p-2 text-[#191919]"
                value={Formik.values.fullName}
                onChange={(e) => {
                  Formik.handleChange(e);
                  handleEmployee(e.target.value);
                }}
                // onBlur={(e) => {
                //   Formik.handleBlur(e);
                //   handleEmployee(e.target.value);
                // }}
                onKeyDown={enterClick}
              />

              {Formik.errors.fullName && Formik.touched.fullName && (
                <p className="text-[red] text-left">{Formik.errors.fullName}</p>
              )}
              {customError && (
                <p className="text-[red] text-left">{customError}</p>
              )}
            </div>
            <br />
            {/* Email Input */}
            <div className="flex flex-col  ">
              <label style={{ width: "40px", height: "22px" }}>
                {t("Email")}
              </label>
              <input
                type="text"
                name="email"
                id="email"
                value={Formik.values.email}
                style={{
                  borderRadius: "4px",
                  borderWidth: "1px",
                  gap: "8px",
                  padding: "10px",
                }}
                onChange={(e) => {
                  Formik.handleChange(e);
                  handleEmployee(e.target.value);
                }}
                // onBlur={(e) => {
                //   Formik.handleBlur(e);
                //   handleEmployee(e.target.value);
                // }}
                onKeyDown={enterClick}
              />

              {Formik.errors.email && Formik.touched.email && (
                <p className="text-[red]">{Formik.errors.email}</p>
              )}
              {customError && (
                <p className="text-[red] text-left">{customError}</p>
              )}
            </div>
            <br />
            {/* Contact Number Input */}
            <div className="flex flex-col  ">
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
                {/* <IoCall className="text-gray-400 mr-2" /> */}
                <input
                  type="text"
                  name="contactNo"
                  id="contactNo"
                  pattern="[0-9]{10}"
                  maxLength="10"
                  value={Formik.values.contactNo}
                  onChange={Formik.handleChange}
                  // onBlur={() => {
                  //   Formik.handleBlur();
                  //   handleContactBlur();
                  // }}
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
              {Formik.errors.contactNo && Formik.touched.contactNo && (
                <p className="text-[red] text-left">
                  {Formik.errors.contactNo}
                </p>
              )}
            </div>
            <br />
            {/* Date of Birth Input */}
            <div className="flex flex-col ">
              <label htmlFor="dob" style={{ width: "91px", height: "22px" }}>
                {t("Date of Birth")}
              </label>
              <div
                className={`flex border p-2 rounded-lg w-full ${
                  divBorder ? "border-black border-2" : ""
                }`}
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
                  // onBlur={handleBlur}
                />
                <input
                  className="w-5 border-[#E2E8F0] rounded text-[#191919] outline-none"
                  type="date"
                  name="dob"
                  id="dob"
                  max="2004-12-31"
                  onChange={handleDateChange}
                  // onBlur={Formik.handleBlur}
                />
              </div>
              {Formik.errors.dob && Formik.touched.dob && (
                <p className="text-[red] text-left">{Formik.errors.dob}</p>
              )}
            </div>
            {/* Submit Button */}
            <div className="flex justify-end space-x-4 mt-4 ">
              <button
                className="text-[#686868] rounded-full"
                onClick={cancleButton} // Close the popup on cancel button click
              >
                {t("cancel")}
              </button>
              <button
                type="button"
                className="h-[2.688rem] w-[7.625rem] bg-[#23275E] text-white rounded-full"
                disabled={submitOnce}
                // onClick={!submitOnce && Formik.handleSubmit}
                onClick={() => Handlesubmit2()}
              >
                {t("Add")}
              </button>
            </div>
          </form>
          {/* Popup Component */}
        </div>
      )}
      {showPopUp && (
        <Popup
          popupBox={cancleButton}
          title={t("invite")}
          handleSubmit={submit}
        >
          <div className="w-full flex flex-col border gap-2">
            {checkData &&
              Object.keys(checkData.user).map((val, index) => (
                <div key={index} className="flex items-center gap-4 p-2">
                  <p className="basis-1/4 text-black">
                    {val} <span>:</span>
                  </p>
                  <p>{checkData.user[val]}</p>
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
            <span className="w-141 h-19 top-0"> Invite User via email</span>
          </div>
        </Popup>
      )}
    </div>
  );
}
