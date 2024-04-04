/* eslint-disable no-useless-escape */
/* eslint-disable camelcase */
import * as Yup from "yup";

const phoneRegExp = /^\d{10}$/;

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

export const UserloginSchema = Yup.object({
  name: Yup.string().min(3).required("Please enter your name."),
  email: Yup.string().email().required("Please enter your email"),
});

export const Applyleaveschema = Yup.object({
  to_time: Yup.string().required("Please enter time till."),
  from_time: Yup.string().required("Please enter time from."),
  leave_type: Yup.string().required("Please enter leave type ."),
  from_date: Yup.string().required("Please enter date from."),
  to_date: Yup.string().required("Please enter date till."),
  reason: Yup.string().required("Please enter the reason."),
});

export const Applystatusschema = Yup.object({
  to: Yup.array().required("Add at least one recipient."),
  status_date: Yup.string().required("Please enter current date."),
  tasksDetails: Yup.array().of(
    Yup.object().shape({
      working_hours: Yup.string().required("Working Hours is required"),
      task_status: Yup.string().required("Status is required"),
      task_description: Yup.string().required("Description is required"),
      billable: Yup.string().required("Billable is required"),
    })
  ),
});

export const AddEmployeeSchema = Yup.object({
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
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("confirm your password"),
});

export const FullTimeSalaryInfoSchema = Yup.object({
  basic_salary: Yup.number().required("Basic Salary is required!"),
  allowance_medical: Yup.number().required("Medical Allowance is required!"),
  hra: Yup.number().required("HRA is required!"),
  gratuity: Yup.number().required("Gratuity is required!"),
  allowance_special: Yup.number().required("Special Allowance is required!"),
  pf: Yup.number().required("PF is required!"),
  tds: Yup.number().required("TDS is required!"),
  professional_tax: Yup.number().required("Professional Tax is required!"),
  incentives: Yup.number().required("Incentives is required!"),
  esic: Yup.number().required("ESIC is required!"),
  salary_type: Yup.string().required("Salary Type is required!"),
  status: Yup.string().required("Status is required!"),
});

export const contractTimeSalaryInfoSchema = Yup.object({
  tds: Yup.number().required("TDS is required!"),
  salary_type: Yup.string().required("Salary Type is required!"),
  status: Yup.string().required("Status is required!"),
});

export const userOtherInfoValidation = Yup.object({
  date_of_joining: Yup.string().required("Date Of Joining is required!"),
  esic_no: Yup.string().required("ESIC is required!"),
  designation: Yup.string().required("Designation is required!"),
  retention_bonus: Yup.string()
    .required("Retention Bonus is required")
    .matches(/^([0-9]*)$/, "Retention Bonus can contain only Number"),
  retention_bonus_no: Yup.string()
    .required("Retention Bonus Number is required")
    .matches(/^([0-9]*)$/, "Retention Bonus Number can contain only Number"),
  uan_no: Yup.string()
    .matches(/^([0-9]*)$/, "UAN Number can contain only Number")
    .required("UAN Number is required"),
  manager_id: Yup.string().required("Manager is required"),
});

export const userNewOtherInfoValidation = Yup.object({
  date_of_joining: Yup.string().required("Date Of Joining is required!"),
  designation: Yup.string().required("Designation is required!"),
  retention_bonus: Yup.string()
    .required("Retention Bonus is required")
    .matches(/^([0-9]*)$/, "Retention Bonus can contain only Number"),
  retention_bonus_no: Yup.string()
    .required("Retention Bonus Number is required")
    .matches(/^([0-9]*)$/, "Retention Bonus Number can contain only Number"),

  manager_id: Yup.string().required("Manager is required"),
});

export const addTdsSchema = Yup.object({
  empId: Yup.string()
    .required("Id is required!")
    .matches(/^([0-9]*)$/, "ID can contain only Number"),
  pan: Yup.string()
    .required("PAN Number is required")
    .matches(/^([A-Z]){5}([0-9]){4}([A-Z]){1}$/, "Invalid PAN Number"),
  total_amount: Yup.string()
    .required("Total Amount is required")
    .matches(/^([0-9]+(\.[0-9]+)?)$/, "Total Amount can contain only Number"),
  tds_amount: Yup.string()
    .required("TDS Amount is required")
    .matches(/^([0-9]+(\.[0-9]+)?)$/, "TDS Amount can contain only Number"),
  status: Yup.string().required("Status is required"),
});

export const addPFSchema = Yup.object({
  empId: Yup.string()
    .required("Id is required!")
    .matches(/^([0-9]*)$/, "ID can contain only Number"),
  uAN: Yup.string().required("UAN Number is required"),
  month: Yup.string()
    .required("Month is required")
    .matches(/^([A-Za-z]*)$/, "month is required"),
  employeeShare: Yup.string()
    .required("Employee share is required")
    .matches(/^([0-9])*$/, "Employee share can contain only Number"),
  employerShare: Yup.string()
    .required("Employer share is required")
    .matches(/^([0-9])*$/, "Employer share can contain only Number"),
  status: Yup.string().required("Status is required"),
});

export const addAssetSchema = Yup.object({
  assetId: Yup.string()
    .required("Asset Id is required!")
    .matches(/^([0-9]*)$/, "Asset ID can contain only Number"),
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

export const addLeaveSchema = Yup.object({
  id: Yup.string().required("ID is required"),
  from_date: Yup.date()
    .required("Date is required")
    .test(
      "from_date",
      "From date must be today or in the future",
      function (value) {
        const incomingDate = new Date(value);
        const currentDate = new Date();
        incomingDate.setDate(incomingDate.getDate() + 1);
        const datePart1 = incomingDate.toISOString().substr(0, 10);
        const datePart2 = currentDate.toISOString().substr(0, 10);

        return datePart1 >= datePart2;
      }
    ),
  to_date: Yup.date()
    .required("Date is required")
    .min(Yup.ref("from_date"), "To date must be greater than From date")
    .test(
      "to_date",
      "To date must be strictly greater than From date",
      function (value) {
        const fromDate = new Date(this.resolve(Yup.ref("from_date")));
        const toDate = new Date(value);

        return toDate > fromDate;
      }
    ),
  numOfDays: Yup.string().required("Number of Days is required"),
  leave_type: Yup.string()
    .required("Leave Type is required")
    .matches(
      /^(['sick','paid','casual','S','P','C']*)$/,
      "Leave Type must be sick, paid, casual."
    ),
  reason: Yup.string().required("Reason is required"),
  leave_status: Yup.string().required("Status is required"),
});

export const fullTimeSalaryValidationSchema = Yup.object({
  basic_salary: Yup.number()
    .typeError("Please insert a valid number")
    .required("Basic Salary is required!"),
  allowance_special: Yup.number()
    .typeError("Please insert a valid number")
    .required("Special Allowance is required!"),
  allowance_medical: Yup.number()
    .typeError("Please insert a valid number")
    .required("Medical Allowance is required!"),
  hra: Yup.number()
    .typeError("Please insert a valid number")
    .required("HRA is required!"),
  gratuity: Yup.number()
    .typeError("Please insert a valid number")
    .required("Gratuity is required!"),
});

export const ContractSalaryValidationSchema = Yup.object({
  consultancyFees: Yup.number()
    .typeError("Please insert a valid number")
    .required("Fees is required!"),
  tds: Yup.number()
    .typeError("Please insert a valid number")
    .required("tds is required!"),
});

export const BankDetailsSchema = Yup.object({
  account_name: Yup.string()
    .required("Account Name is required!")
    .matches(/^([A-Za-z' '])*$/, "Account Name can contain only letters"),
  account_number: Yup.string()
    .required("Account Number is required!")
    .matches(/^([0-9]{9,18})$/, "Invalid Account Number"),
  ifsc: Yup.string()
    .required("IFSC Code is required!")
    .matches(/^([A-Za-z]{4}0[A-Z0-9a-z]{6})$/, "Invalid IFSC Code"),
});

export const settingsSchema = Yup.object({
  leaveTypeName: Yup.string()
    .required("Leave Type is required!")
    .matches(/^([A-Za-z' '])*$/, "Leave Type can contain only letters"),
  numOfLeaves: Yup.string().required("No Of Leaves is required!"),
  creditTimePeriod: Yup.string().required("Credit Time Period is required!"),
});

export const ClientInformationSchema = Yup.object({
  name: Yup.string()
    .required("name is required!")
    .matches(/^([A-Za-z' '])*$/, "Name can contain only letters"),
  email: Yup.string()
    .required("Email is required!")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      "Invalid email address"
    ),
  phoneNumber: Yup.string().required("Contact No. is required!")
    .matches(phoneRegExp,"contact number is invalid").nullable(),
  clientType: Yup.string().required("Client Type is required!"),
  streetAddress: Yup.string().required("Street Address is required!"),
  city: Yup.string().required("City is required!"),
  state: Yup.string().required("State is required!"),
  country: Yup.string().required("Country is required!"),
  timeZone: Yup.string().required("Time Zone is required!"),
  onboardDate: Yup.string().required("Onboard is required!"),
  onboardedBy: Yup.string().required("Onboarder By  is required!"),
  goods_and_services_tax: Yup.string()
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

export const addInvoiceSchema = Yup.object({
  // clientname: Yup.string()
  //   .required("Name is required!")
  //   .matches(/^([A-Za-z' '])*$/, "Name can contain only letters"),
  invoice_number: Yup.number().required("invoice number is required!"),
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

export const personalInformationSchema = Yup.object({
  email: Yup.string().matches(
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    "Invalid email address"
  ),
  fullName: Yup.string(
    "fullName is required!"
  ).nullable(),
  fatherName: Yup.string(
    "fatherName is required!"
  ).nullable(),
  motherName: Yup.string(
    "motherName is required!"
  ).nullable(),
  linkedinProfile: Yup.string(
    "linkedinProfile is required!"
  ).nullable(),
  contactNo: Yup.string(
    "contactNo is required!"
  ).matches(phoneRegExp,"contact number is invalid").nullable(),
  personalEmail: Yup.string().nullable().matches(
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    "Invalid email address"
  ),
  bloodGroup: Yup.string(
    "bloodGroup is required!"
  ).nullable(),
  maritalStatus: Yup.string(
    "maritalStatus is required!"
  ).nullable(),
  dateOfBirth: Yup.date().test(
    "dateOfBirth",
    "Date of Birth must be less than current date",
    function (value) {
      const incomingDate = new Date(value);
      const currentDate = new Date();
      incomingDate.setDate(incomingDate.getDate() + 1);
      const datePart1 = incomingDate.toISOString().substr(0, 10);
      const datePart2 = currentDate.toISOString().substr(0, 10);

      return datePart1 < datePart2;
    }
  ).nullable(),
  gender: Yup.string(
    "gender is required!"
  ).nullable(),
  city: Yup.string(
    "city is required!"
  ).nullable(),
  state: Yup.string(
    "state is required!"
  ).nullable(),
  pincode: Yup.string(
    "pincode is required!"
  ).matches(/^[0-9]+$/, "Must be only digits")
    .min(6, 'Must be exactly 6 digits')
    .max(6, 'Must be exactly 6 digits').nullable(),
  address: Yup.string(
    "address is required!"
  ).nullable(),
  emergencyContactNo: Yup.string(
    "emergencyContactNo is required!"
  ).matches(phoneRegExp,"emergencyContactNo is invalid").nullable(),
});

export const contactUsSchema = Yup.object({
  name: Yup.string().required("Name is required!"),
  email: Yup.string().required("Email Id is required!").matches(
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    "Invalid email address!"
  ),
  phone: Yup.string().required("Contact No. is required!").matches(phoneRegExp,"contact number is invalid").nullable(),
  subject: Yup.string().required("Subject is required!"),
  description: Yup.string().required("Description is required!"),
});

export const addProjectSchema = Yup.object({
  name: Yup.string().required("Project Name is required!"),
  currency: Yup.string().required("Currency is required!"),
  description: Yup.string().required("Description is required!"),
  startDate: Yup.string().required("Date is required"),
  endDate: Yup.string().required("Date is required"),
  amount: Yup.string().required("Amount is required"),
  billingType: Yup.string().required("Billing Type is required"),
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

export const addProjectSchemainClint = Yup.object({
  projectName: Yup.string().required("Project Name is required!"),
  projectDesc: Yup.string().required("Description is required!"),
  link: Yup.string().required("Link Name is required!"),
  startDate: Yup.string().required("Date is required"),
  currency: Yup.string().required("Currency is required!"),
  endDate: Yup.string().required("Date is required"),
  amount: Yup.string().required("Amount is required"),
  billingType: Yup.string().required("Billing Type is required"),
  projectStatus: Yup.string().required("Project Status is required"),
});

