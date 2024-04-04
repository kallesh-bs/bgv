/* eslint-disable no-useless-escape */
/* eslint-disable camelcase */
import * as Yup from "yup";

export const addLeaveSchema = Yup.object({
  id: Yup.string().required("ID is required"),
  fromDate: Yup.date().required("Date is required!"),
  toDate: Yup.date()
    .required("Date is required!")
    .min(Yup.ref("fromDate"), "To date must be equal or greater than From date!")
    .test(
      "toDate",
      "To date must be strictly be equal or greater than From Date!",
      function (value) {
        const fromDate = new Date(this.resolve(Yup.ref("fromDate")));
        const toDate = new Date(value);

        return toDate >= fromDate;
      }
    ),
  numOfDays: Yup.string().required("Number of Days is required"),
  leaveType: Yup.string()
    .required("Leave Type is required"),
  reason: Yup.string().required("Reason is required"),
  leaveStatus: Yup.string().required("Status is required"),
});
