/* eslint-disable no-useless-escape */
/* eslint-disable camelcase */
import * as Yup from "yup";

export const addCompanySchema = Yup.object({
  name: Yup.string()
    .required("Name is Required")
    .matches(/^([A-Za-z]*)$/, "Name can contain only letters."),
  tax_type: Yup.string()
    .required("Tax Type is Required")
    .matches(/^([A-Za-z]*)$/, "Tax Type can contain only letters."),
  amount: Yup.string()
    .required("Total Amount is required")
    .matches(/^([0-9]*)$/, "Total Amount can contain only number."),
  due_date: Yup.string().required("Due Date is required"),
  status: Yup.string().required("Status is required"),
});

export const addPFSchema = Yup.object({
  employeeShare: Yup.string()
    .required("Employee share is required")
    .matches(/^([0-9])*$/, "Employee share can contain only Number"),
  employerShare: Yup.string()
    .required("Employer share is required")
    .matches(/^([0-9])*$/, "Employer share can contain only Number"),
  status: Yup.string().required("Status is required"),
});

export const addTdsSchema = Yup.object({
  empId: Yup.string()
    .required("Id is required!")
    .matches(/^([0-9]*)$/, "ID can contain only Number"),
  pan: Yup.string()
    .required("PAN Number is required")
    .matches(/^([A-Z]){5}([0-9]){4}([A-Z]){1}$/, "Invalid PAN Number"),
  totalAmount: Yup.string()
    .required("Total Amount is required")
    .matches(/^([0-9]+(\.[0-9]+)?)$/, "Total Amount can contain only Number"),
  tdsAmount: Yup.string()
    .required("TDS Amount is required")
    .matches(/^([0-9]+(\.[0-9]+)?)$/, "TDS Amount can contain only Number"),
  status: Yup.string().required("Status is required"),
});

export const addAssetSchema = Yup.object({
  // assetId: Yup.string()
  //   .required("Asset Id is required!")
  //   .matches(/^([0-9]*)$/, "Asset ID can contain only Number"),
  gadgetName: Yup.string()
    .required("Asset Name is required!")
    .matches(/^([A-Za-z' '])*$/, "Asset Name can contain only letters."),
  assigned_to: Yup.string()
    .required("Assigned To is required!")
    .matches(/^([A-Za-z' '])*$/, "Assigned To can contain only letters."),
  assignedBy: Yup.string()
    .required("Assigned By is required!")
    .matches(/^([A-Za-z' ']*)$/, "Assigned By can contain only letters."),
  assignedDate: Yup.string().required("Assigned Date is required!"),
  serialNo: Yup.string()
    .required("Asset no. is required!")
    .matches(/^([0-9]*)$/, "Asset No. can contain only number."),
  configuration: Yup.string().required("Configuration is required!"),
  buyingDate: Yup.string().required("Buying Date is required!"),
  buyingPrice: Yup.number()
    .typeError("Buying Price must be a number")
    .required("Buying Price is required!")
    .positive("Buying Price must be a positive number"),
  // gadget_images: Yup.string().required("Asset Image is required!"),
});

export const addExpenseSchema = Yup.object({
  expenseFor: Yup.string()
    .required("Expense For is Required")
    .matches(/^([A-Za-z]*)$/, "Expense For can contain only letters."),
  expenseBy: Yup.string()
    .required("Expense By is Required")
    .matches(/^([A-Za-z]*)$/, "Expense By can contain only letters."),
  expenseDate: Yup.string().required("Expense Date is required"),
  amount: Yup.string()
    .required("Amount is required")
    .matches(/^([0-9]*)$/, "Amount can contain only number."),
  paymentBy: Yup.string()
    .required("Payment By is required")
    .matches(/^([A-Za-z]*)$/, "Payment By can contain only letters."),
  paymentMethod: Yup.string()
    .required("Payment Method is required")
    .matches(/^([A-Za-z]*)$/, "Payment Method can contain only letters."),
  invoiceImage: Yup.string().required("Invoice Image is required"),
});
