import * as Yup from "yup";

export const jobOpeningValidation = Yup.object({
  firstName: Yup.string().required('Please enter firstName '),
  lastName: Yup.string().required('Please enter lastName '),
  email: Yup.string().required('Please enter email '),
  country: Yup.string().required('Please enter country '),
  state: Yup.string().required('Please enter state '),
  contactNumber: Yup.string().required('Please enter contactNumber '),
  resume: Yup.array().min(1, "Resume is required"),
});
