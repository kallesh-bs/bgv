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
  password: Yup.string()
    .required("Please enter your password.")
    .matches(
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/,
      "password must contain 6 or more characters with at least one of each: uppercase, lowercase, number and special"
    )
    .max(15, "maximum 15 characters"),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("confirm your password"),
});

export const addInvoiceSchema = Yup.object({
  // clientname: Yup.string()
  //   .required("Name is required!")
  //   .matches(/^([A-Za-z' '])*$/, "Name can contain only letters"),
  invoice_number: Yup.number().required("Contact No. is required!"),
  currency: Yup.string().required("Currency is required"),
  amount: Yup.number()
    .required("Amount is required")
    .positive("Amount must be a positive number"),
  invoice_date: Yup.date()
    .required("Invoice Date is required")
    .typeError("Invalid date format"),
  due_date: Yup.date()
    .required("Due Date is required")
    .typeError("Invalid date format"),
  status: Yup.string().required("Status is required"),
  // Upload_Image: Yup.mixed()
  //   .required("Image is required")
  //   .test(
  //     "fileFormat",
  //     "Invalid file format. Only accept image files.",
  //     (value) => {
  //       if (!value) return true; // If no file is selected, validation passes

  //       return value && ["image/jpeg", "image/png"].includes(value.type);
  //     }
  //   ),
});

export const addProjectSchema = Yup.object({
  name: Yup.string().required("Project Name is required!"),
  currency: Yup.string().required("Currency is required!"),
  description: Yup.string().required("Description is required!"),
  startDate: Yup.date().required("Date is required"),
  endDate: Yup.date()
    .required("Date is required!")
    .min(Yup.ref("startDate"), "end date must be  greater than start date!")
    .test(
      "endDate",
      "end date must be greater than start Date!",
      function (value) {
        const startDate = new Date(this.resolve(Yup.ref("startDate")));
        const endDate = new Date(value);

        return endDate > startDate;
      }
    ),
  amount: Yup.string().required("Amount is required"),
  billingType: Yup.string().required("Billing Type is required"),
});

export const clientInformationSchema = Yup.object({
  name: Yup.string()
    .required("name is required!")
    .matches(/^([A-Za-z' '])*$/, "Name can contain only letters"),
  email: Yup.string()
    .required("Email is required!")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      "Invalid email address"
    ),
  phoneNumber: Yup.string()
    .required("Contact No. is required!")
    .matches(phoneRegExp, "contact number is invalid")
    .nullable(),
  clientType: Yup.string().required("Client Type is required!"),
  streetAddress: Yup.string().required("Street Address is required!"),
  city: Yup.string().required("City is required!"),
  state: Yup.string().required("State is required!"),
  country: Yup.string().required("Country is required!"),
  timeZone: Yup.string().required("Time Zone is required!"),
  onboardDate: Yup.string().required("Onboard is required!"),
  onboardedBy: Yup.string().required("Onboarder By  is required!"),
  goodsAndServicesTax: Yup.string()
    .required("Good And Service Tax is required!")
    .matches(/^[0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]*$/, "Not Allowed"),
  taxRate: Yup.string()
    .required("Tax Rate is required!")
    .matches(/^[0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]*$/, "Not Allowed"),
  password: Yup.string()
    .required("Please enter your password.")
    .matches(
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/,
      "password must contain 6 or more characters with at least one of each: uppercase, lowercase, number and special"
    )
    .max(15, "maximum 15 characters"),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("confirm your password"),
});

export const projectInfoSchema = Yup.object({
  name: Yup.string().required("Project Name is required!"),
  currency: Yup.string().required("Currency is required!"),
  description: Yup.string().required("Description is required!"),
  startDate: Yup.string().required("Date is required"),
  endDate: Yup.string().required("Date is required"),
  amount: Yup.string().required("Amount is required"),
  billingType: Yup.string().required("Billing Type is required"),
  status: Yup.string().required("Status is required"),
});

export const addFeedback = () => Yup.object({
  comment: Yup.string().required("Please insert your feedback"),
});

export const newResourceSchema = Yup.object({
  employeeName: Yup.string()
    .required("employee Name is required!"),
  designation: Yup.string().required("Designation is required!"),
  startDate: Yup.date().required("Date is required!"),
  rate: Yup.number().required("Rate is required!"),
  type: Yup.string().required("Type is required!"),
});
