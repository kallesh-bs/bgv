/* eslint-disable no-useless-escape */
/* eslint-disable camelcase */
import * as Yup from "yup";

export const fullTimeSalaryInfoSchema = Yup.object({
  basic_salary: Yup.number().required("Basic Salary is required!"),
  allowance_medical: Yup.number().required("Medical Allowance is required!"),
  hra: Yup.number().required("HRA is required!"),
  gratuity: Yup.number().required("Gratuity is required!"),
  allowance_special: Yup.number().required("Special Allowance is required!"),
  pf: Yup.number().required("PF is required!"),
  tds: Yup.number().required("TDS is required!"),
  professional_tax: Yup.number().required("Professional Tax is required!"),
  incentives: Yup.number().required("Incentives is required!"),
  esic: Yup.number().required("ESIC is required!"),
  salary_type: Yup.string().required("Salary Type is required!"),
  status: Yup.string().required("Status is required!"),
});

export const contractTimeSalaryInfoSchema = Yup.object({
  tds: Yup.number().required("TDS is required!"),
  salary_type: Yup.string().required("Salary Type is required!"),
  status: Yup.string().required("Status is required!"),
});
