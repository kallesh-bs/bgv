import * as Yup from "yup";

export const applyLeaveSchema = Yup.object({
  toTime: Yup.string()
    .notOneOf(["Select Shift"], "Please select an option")
    .required("Please enter time till!"),
  fromTime: Yup.string()
    .notOneOf(["Select Shift"], "Please select an option")
    .required("Please enter time from!"),
  leaveType: Yup.string().required("Please Select Leave Type!"),
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
  reason: Yup.string().required("Please enter the reason!"),
});
