/* eslint-disable no-useless-escape */
/* eslint-disable camelcase */
import * as Yup from "yup";

export const companyProfileDetails = Yup.object({
  companyName: Yup.string().required("Company Name is required!"),
  companyContactNo: Yup.array().of(
    Yup.object({
      valuee: Yup.string().required("Contact no. is required!"),
    })
  ),
  companyMailInput: Yup.array().of(
    Yup.object({
      valuee: Yup.string()
        .required("Company Email Id is required!")
        .matches(
          /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          "Invalid email address"
        ),
    })
  ),
  emailIdNewsLetter: Yup.string().required(
    "Email Id for News letter is required!"
  ),
  facebook: Yup.string().required("facebook Id is required!"),
  linkedIn: Yup.string().required("linkedIn Id is required!"),
  instagram: Yup.string().required("Instagram Id is required!"),
  X: Yup.string().required("X Id is required!"),
  branchInput: Yup.array().of(
    Yup.object().shape({
      address: Yup.string().required("Address is required!"),
      country: Yup.string().required("Country is required!"),
      state: Yup.string().required("State is required!"),
      city: Yup.string().required("City is required!"),
      postalCode: Yup.string().required("Postal Code is required!"),
      branchContactNo: Yup.array().of(
        Yup.object().shape({
          valuee: Yup.string().required("Branch Contact No. is required!"),
        })
      ),
      branchEmail: Yup.array().of(
        Yup.object().shape({
          valuee: Yup.string()
            .required("Branch Email Id is required!")
            .matches(
              /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              "Invalid email address"
            ),
        })
      ),
      incorporationDate: Yup.string().required(
        "Incorporation Date is required!"
      ),
      pan: Yup.string()
        .required("PAN No. is required!")
        .matches(/^([A-Z]){5}([0-9]){4}([A-Z]){1}$/, "Invalid PAN Number"),
      gst: Yup.string().required("GST No. is required!"),
      tan: Yup.string().required("Tan No. is required!"),
    })
  ),
  About: Yup.array().of(
    Yup.object().shape({
      projects: Yup.number().required("Project completed is required!"),
      clients: Yup.number().required("Satisfied Clients field is required!"),
      experience: Yup.number().required("Years of Experience is required!"),
    })
  ),
});

export const settingsSchema = Yup.object({
  leaveTypeName: Yup.string()
    .required("Leave Type is required!")
    .matches(/^([A-Za-z' '])*$/, "Leave Type can contain only letters"),
  numOfLeaves: Yup.string().required("No Of Leaves is required!"),
  creditTimePeriod: Yup.string().required("Credit Time Period is required!"),
});

export const additinaldailogSchema = Yup.object({
  field: Yup.string().required('Field type is required'),
  name: Yup.string().required("Field name is required!"),
});

export const deductiondailogSchema = Yup.object({
  name: Yup.string().required("Field name is required!"),
});

export const otherdailogSchema = Yup.object({
  name: Yup.string().required("Field name is required!"),
});

