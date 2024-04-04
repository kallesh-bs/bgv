import * as Yup from "yup";

export const addProjectSchema = Yup.object({
  name: Yup.string().required("Please enter project name"),
  description: Yup.string().required("Please enter project description"),
  startDate: Yup.string().required("Please enter start date"),
  endDate: Yup.string().required("Please enter end date"),
  currency: Yup.string().required("Please select currency"),
  amount: Yup.string().required("Please enter amount"),
  billingType: Yup.string().required("Please select billing type"),
});
