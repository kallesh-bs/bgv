/* eslint-disable no-useless-escape */
/* eslint-disable camelcase */
import * as Yup from "yup";

export const addInvoiceSchema = Yup.object({
  // clientname: Yup.string()
  //   .required("Name is required!")
  //   .matches(/^([A-Za-z' '])*$/, "Name can contain only letters"),
  invoice_number: Yup.number().required("Invoice No. is required!"),
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
