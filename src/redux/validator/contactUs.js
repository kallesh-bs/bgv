/* eslint-disable no-useless-escape */
/* eslint-disable camelcase */
import * as Yup from "yup";

const phoneRegExp = /^\d{10}$/;

export const contactUsSchema = Yup.object({
  name: Yup.string().required("Name is required!"),
  email: Yup.string().required("Email Id is required!").matches(
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    "Invalid email address!"
  ),
  phone: Yup.string().required("Contact No. is required!").matches(phoneRegExp, "contact number is invalid").nullable(),
  subject: Yup.string().required("Subject is required!"),
  description: Yup.string().required("Description is required!"),
});

export const HireUsSchema = Yup.object().shape({
  skillName: Yup.array().min(1, "Atleast one skill is selected").required("Skill is required"),
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: Yup.string().min(10, "The phone number must contain 10 digits")
    .required("Phone number is required"),
});
