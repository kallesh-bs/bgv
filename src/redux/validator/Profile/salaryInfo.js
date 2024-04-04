/* eslint-disable no-useless-escape */
/* eslint-disable camelcase */
import * as Yup from "yup";

export const fullTimeSalaryValidationSchema = Yup.object({
  basic_salary: Yup.number()
    .typeError("Please insert a valid number")
    .required("Basic Salary is required!"),
  allowance_special: Yup.number()
    .typeError("Please insert a valid number")
    .required("Special Allowance is required!"),
  allowance_medical: Yup.number()
    .typeError("Please insert a valid number")
    .required("Medical Allowance is required!"),
  hra: Yup.number()
    .typeError("Please insert a valid number")
    .required("HRA is required!"),
  gratuity: Yup.number()
    .typeError("Please insert a valid number")
    .required("Gratuity is required!"),
});

export const contractSalaryValidationSchema = Yup.object({
  consultancyFees: Yup.number()
    .typeError("Please insert a valid number")
    .required("Fees is required!"),
  tds: Yup.number()
    .typeError("Please insert a valid number")
    .required("tds is required!"),
});
