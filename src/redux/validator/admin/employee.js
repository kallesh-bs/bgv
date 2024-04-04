/* eslint-disable no-useless-escape */
/* eslint-disable camelcase */
import * as Yup from "yup";

const phoneRegExp = /^\d{10}$/;

export const addEmployeeSchema = Yup.object({
  email: Yup.string()
    .required("Please enter your email")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      "Invalid email address"
    ),
  contactNo: Yup.string()
    .required("Contact number is required!")
    .max(10,"Contact must be of 10 digit ")
    .matches(phoneRegExp, "contact number is invalid"),

  fullName: Yup.string()
    .required("Please enter your name"),

  dob: Yup.date()
    .typeError("Invalid date format"),
});
