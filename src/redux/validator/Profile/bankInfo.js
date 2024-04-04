/* eslint-disable no-useless-escape */
/* eslint-disable camelcase */
import * as Yup from "yup";

export const bankDetailsSchema = Yup.object({
  account_name: Yup.string()
    .required("Account Name is required!")
    .matches(/^([A-Za-z' '])*$/, "Account Name can contain only letters"),
  account_number: Yup.string()
    .required("Account Number is required!")
    .matches(/^([0-9*]{9,18})$/, "Invalid Account Number"),
  ifsc: Yup.string()
    .required("IFSC Code is required!")
    .matches(/^([A-Za-z]{4}0[A-Z0-9a-z]{6})$/, "Invalid IFSC Code"),
});
