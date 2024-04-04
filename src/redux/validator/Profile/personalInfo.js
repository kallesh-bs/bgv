/* eslint-disable no-useless-escape */
/* eslint-disable camelcase */
import * as Yup from "yup";

const phoneRegExp = /^\d{10}$/;

export const personalInformationSchema = Yup.object({
  email: Yup.string().matches(
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    "Invalid email address"
  ),
  fullName: Yup.string("fullName is required!").nullable(),
  fatherName: Yup.string("fatherName is required!").nullable(),
  motherName: Yup.string("motherName is required!").nullable(),
  linkedinProfile: Yup.string("linkedinProfile is required!").nullable(),
  contactNo: Yup.string("contactNo is required!")
    .matches(phoneRegExp, "contact number is invalid")
    .nullable(),
  personalEmail: Yup.string()
    .nullable()
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      "Invalid email address"
    ),
  bloodGroup: Yup.string("bloodGroup is required!").nullable(),
  maritalStatus: Yup.string("maritalStatus is required!").nullable(),
  dateOfBirth: Yup.date()
    .test(
      "dateOfBirth",
      "Date of Birth must be less than current date",
      function (value) {
        const incomingDate = new Date(value);
        const currentDate = new Date();
        incomingDate.setDate(incomingDate.getDate() + 1);
        const datePart1 = incomingDate.toISOString().substr(0, 10);
        const datePart2 = currentDate.toISOString().substr(0, 10);

        return datePart1 < datePart2;
      }
    )
    .nullable(),
  gender: Yup.string("gender is required!").nullable(),
  city: Yup.string("city is required!").nullable(),
  state: Yup.string("state is required!").nullable(),
  pincode: Yup.string("pincode is required!")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(6, "Must be exactly 6 digits")
    .max(6, "Must be exactly 6 digits")
    .nullable(),
  address: Yup.string("address is required!").nullable(),
  emergencyContactNo: Yup.string("emergencyContactNo is required!")
    .matches(phoneRegExp, "emergencyContactNo is invalid")
    .nullable(),
});

export const ProjectListSchema = Yup.object({
  projectId: Yup.string().required("Please select a project!"),
});
