/* eslint-disable no-useless-escape */
/* eslint-disable camelcase */
import * as Yup from "yup";

export const loginInSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().required("No password provided."),
});

export const forgotSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
});

export const resetPasswordSchema = Yup.object({
  newPassword: Yup.string()
    .required("Please enter your password.")
    .min(8, "Your password is too short."),
  confirmPassword: Yup.string()
    .required("Please retype your password.")
    .oneOf([Yup.ref("newPassword")], "Your passwords do not match."),
});
