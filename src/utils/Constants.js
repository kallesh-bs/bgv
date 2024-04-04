import {
  FaReact,
  FaAngular,
  FaBootstrap,
  FaJava,
  FaAppStoreIos,
  FaAndroid,
  FaPython,
  FaFigma,
  FaHtml5,
  FaCss3,
  FaSass,
  FaAirbnb
} from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { DiMongodb, DiMysql, DiPostgresql, DiDjango } from "react-icons/di";
import {
  SiRubyonrails,
  SiTypescript,
  SiTailwindcss,
  SiMui,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobexd,
  SiMiro,
  SiTestinglibrary
} from "react-icons/si";
import { GoRuby } from "react-icons/go";
import { IoLogoJavascript } from "react-icons/io";
import { GiJesterHat } from "react-icons/gi";
import { MdFlutterDash } from "react-icons/md";
import { FaGolang } from "react-icons/fa6";
import { BsFiletypeScss } from "react-icons/bs";
import { TbSettingsSearch } from "react-icons/tb";
import { PiSealQuestionFill } from "react-icons/pi";

export const url = "deeporionback-0cd6e44c3c14.herokuapp.com";

export const awsURL = "https://deeporion.s3.ap-south-1.amazonaws.com";

export const projectName = ["Project Name"];

export const monthList = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const filterTableDefaultValue = [
  {
    id: 0,
    header: "Pincode",
    isChecked: false,
    key: "pincode",
  },
  {
    id: 1,
    header: "City",
    isChecked: false,
    key: "city",
  },
  {
    id: 2,
    header: "Linkedin Profile",
    isChecked: false,
    key: "linkedin_profile",
  },
  {
    id: 3,
    header: "Blood Group",
    isChecked: false,
    key: "blood_group",
  },

  {
    id: 4,
    header: "Emergency Contact No",
    isChecked: false,
    key: "emergency_contact_no",
  },
  {
    id: 5,
    header: "Employee Type",
    isChecked: false,
    key: "employee_type",
  },
  {
    id: 6,
    header: "Esic No",
    isChecked: false,
    key: "esic_no",
  },
  {
    id: 7,
    header: "Father Name",
    isChecked: false,
    key: "father_name",
  },
  {
    id: 8,
    header: "Gender",
    isChecked: false,
    key: "gender",
  },
  {
    id: 9,
    header: "Job Type",
    isChecked: false,
    key: "jobTYpe",
  },

  {
    id: 10,
    header: "Manager ID",
    isChecked: false,
    key: "manager_id",
  },
  {
    id: 11,
    header: "Marital Status",
    isChecked: false,
    key: "marital_status",
  },
  {
    id: 12,
    header: "Mother Name",
    isChecked: false,
    key: "mother_name",
  },
  {
    id: 13,
    header: "UAN No",
    isChecked: false,
    key: "uan_no",
  },
  {
    id: 14,
    header: "Notice Period",
    isChecked: false,
    key: "notice_period",
  },
  {
    id: 15,
    header: "Personal Email",
    isChecked: false,
    key: "personal_email",
  },
  {
    id: 16,
    header: "State",
    isChecked: false,
    key: "state",
  },
  {
    id: 17,
    header: "Relieving Date",
    isChecked: false,
    key: "relieving_date",
  },
  {
    id: 18,
    header: "Resignation Date",
    isChecked: false,
    key: "resignation_date",
  },
  {
    id: 19,
    header: "Resignation Status",
    isChecked: false,
    key: "resignation_status",
  },
  {
    id: 20,
    header: "Retention Bonus",
    isChecked: false,
    key: "retention_bonus",
  },
  {
    id: 21,
    header: "Retention Bonus No",
    isChecked: false,
    key: "retention_bonus_no",
  },
  {
    id: 22,
    header: "Retention Time",
    isChecked: false,
    key: "retention_time",
  },
  {
    id: 23,
    header: "Address",
    isChecked: false,
    key: "address",
  },
  {
    id: 24,
    header: "Date of Birth",
    isChecked: false,
    key: "date_of_birth",
  },
];

export const FilterUsers = [
  {
    id: 0,
    header: "All employees",
    key: "all",
  },
  {
    id: 1,
    header: "Enable employees",
    key: "active",
  },
  {
    id: 2,
    header: "Disable employees",
    key: "disabled",
  },
];

export const filterClients = [
  {
    id: 0,
    header: " All Clients",
    key: "all",
  },
  {
    id: 1,
    header: " Enable  Clients",
    key: "active",
  },
  {
    id: 2,
    header: " Disable Clients",
    key: "disabled",
  },
];

export const SALARY_ARR = [
  "basic_salary",
  "hra",
  "allowance_medical",
  "allowance_special",
  "incentives",
  "bonus_1",
  "bonus_2",
  "pf",
  "gratuity",
  "tds",
  "professional_tax",
  "consultancy_fees",
  "gst",
  "invoice",
];

export const section192 = [
  "id",
  "employeeId",
  "full_name",
  "esic",
  "salary_type",
  "date",
  "total_working_days",
  "Effective_Working_days",
  "total_leaves",
  "status",
];

export const section194 = [
  "employeeId",
  "full_name",
  "salary_type",
  "date",
  "total_working_days",
  "Effective_Working_days",
  "total_leaves",
  "Consultancy Fee",
  "total_salary",
  "email",
  "status",
  "gst",
  "invoice",
  "TDS",
];

export const unprotectedPaths = [
  "/",
  "/login",
  "/services",
  "/portfolio",
  "/about",
  "/career",
  "/contact-us",
  "/forgot",
  "/checkYourMail",
  "/otp",
  "/reset",
  "/page1",
  "/page2",
  "/page3",
  "/page2-1",
  "/page2-2",
  "/page2-3",
  "/page3-1",
  "/page3-2",
  "/page3-3",
  "/hire-us",
  "/reset/",
];

export const messageInfo = {
  text: {
    sender: {
      _id: 6,
      username: "Tony Stark",
    },
    content: "I am static data",
    chat: {
      _id: 27,
      chatName: "string",
      isGroupChat: true,
      users: [
        {
          _id: 6,
          username: "Tony Stark",
          email: "tony@gmail.com",
        },
        {
          _id: 6,
          username: "Tony Stark",
          email: "tony@gmail.com",
        },
        {
          _id: 7,
          username: "Thor Odhinson",
          email: "thor@gmail.com",
        },
        {
          _id: 8,
          username: "Peter Parker",
          email: "peter@gmail.com",
        },
        {
          _id: 9,
          username: "T'Chala",
          email: "tchala@gmail.com",
        },
        {
          _id: 10,
          username: "Dr banner",
          email: "hulk@gmail.com",
        },
        {
          _id: 12,
          username: null,
          email: "vision@gmail.com",
        },
        {
          _id: 13,
          username: null,
          email: "wanda@gmail.com",
        },
      ],
      createdAt: "2023-11-27T08:52:08.162Z",
      updatedAt: "2023-11-27T08:52:08.162Z",
      latestMessage: 35,
    },
    _id: 35,
    createdAt: "2023-11-30T10:29:06.340Z",
    updatedAt: "2023-11-30T10:29:06.340Z",
  },
};

export const SALARY_TYPE = [
  { id: 1, key: "", value: "Select" },
  { id: 2, key: "full_and_final_payment", value: "Full & Final Payment" },
  { id: 3, key: "Consultancy Fee", value: "Consultancy Fees" },
  { id: 4, key: "Salary", value: "Salary" },
];

export const BONUS_TYPE = [
  { id: 1, key: "", value: "Select" },
  { id: 2, key: "monthly", value: "Monthly" },
  { id: 2, key: "quaterly", value: "Quaterly" },
  { id: 2, key: "halfyearly", value: "Half Yearly" },
  { id: 2, key: "yearly", value: "Yearly" },
];

export const STATUS_ARR = [
  { id: 1, key: "", value: "Select", disable: true },
  { id: 2, key: "done", value: "Done", disable: false },
  { id: 3, key: "pending", value: "Pending", disable: false },
  { id: 4, key: "cancelled", value: "Cancelled", disable: false },
];

export const INVOICE_ARR = [
  { id: 0, key: "all", value: "All" },
  { id: 1, key: "paid", value: "Paid" },
  { id: 2, key: "pending", value: "Pending" },
  { id: 3, key: "cancel", value: "Cancelled" },
];

export const format = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  minimumFractionDigits: 2,
});

// add ₹ in salary or amount type
export const AddRsinSalary = (name, obj) => {
  obj = obj?.toString();
  if (SALARY_ARR.includes(name) && obj) {
    obj = !obj?.includes("₹") ? format.format(obj) : obj;
  }

  return obj;
};

export const searchKeys = [
  "email",
  "full_name",
  "employee_id",
  "designation",
  "contact_no",
  "date_of_joining",
  "pincode",
  "city",
  "linkedin_profile",
  "blood_group",
  "emergency_contact_no",
  "employee_type",
  "esic_no",
  "father_name",
  "gender",
  "job_type",
  "manager_id",
  "marital_status",
  "mother_name",
  "uan_no",
  "notice_period",
  "personal_email",
  "state",
  "relieving_date",
  "resignation_date",
  "resignation_status",
  "retention_bonus",
  "retention_bonus_no",
  "retention_time",
  "address",
  "date_of_birth",
];

export const projectFilterTableDefaultValue = [
  {
    id: 0,
    header: "Start Date",
    isChecked: false,
    key: "start_date",
  },
  {
    id: 1,
    header: "Description",
    isChecked: false,
    key: "description",
  },
  {
    id: 2,
    header: "Client",
    isChecked: false,
    key: "client_id",
  },
  {
    id: 3,
    header: "Currency",
    isChecked: false,
    key: "currency",
  },

  {
    id: 4,
    header: "Amount",
    isChecked: false,
    key: "amount",
  },
  {
    id: 5,
    header: "Billing Type",
    isChecked: false,
    key: "billing_type",
  },
  {
    id: 6,
    header: "End Date",
    isChecked: false,
    key: "end_date",
  },
  {
    id: 7,
    header: "Status",
    isChecked: false,
    key: "status",
  },
];

export const LOCATION_URL =
  // eslint-disable-next-line max-len
  "https://www.google.com/maps/place/DeepOrion+Technology/@26.8471628,75.8019201,16z/data=!4m15!1m8!3m7!1s0x396db7b60434d061:0x8cf67bbea85125b2!2sDeepOrion+Technology!8m2!3d26.8434983!4d75.8024232!10e5!16s%2Fg%2F11rpzdq7tj!3m5!1s0x396db7b60434d061:0x8cf67bbea85125b2!8m2!3d26.8434983!4d75.8024232!16s%2Fg%2F11rpzdq7tj?entry=ttu";

export const creditTimePeriod = [
  {
    id: 1,
    period: "Monthly",
  },
  {
    id: 2,
    period: "Yearly",
  },
];

export const positionArr = ["trainee", "junior", "senior", "lead", "manager"];

export const statusFilterTableDefaultValue = [
  {
    id: 0,
    header: "Total Working Hours",
    isChecked: true,
    disable: true,
    key: "workingHours",
  },
  {
    id: 1,
    header: "Status Date",
    isChecked: true,
    disable: true,
    key: "statusDate",
  },
  {
    id: 2,
    header: "Designation",
    isChecked: false,
    key: "designation",
  },
  {
    id: 3,
    header: "Employee Id",
    isChecked: false,
    key: "employeeId",
  },

  {
    id: 4,
    header: "Billable",
    isChecked: false,
    key: "billable",
  },
];

export const notificationData = [
  {
    message: {
      id: 97,
      content: "hi",
      chat_id: 16,
      sender_id: 25,
      receiver_id: 8,
    },
    users: [
      {
        id: 8,
        email: "karan.bairwa@deeporion.com",
        full_name: "Karan Bairwa",
      },
      {
        id: 25,
        email: "admin4@test.com",
        full_name: null,
      },
    ],
  },
  {
    message: {
      id: 97,
      content: "hello",
      chat_id: 16,
      sender_id: 25,
      receiver_id: 8,
    },
    users: [
      {
        id: 8,
        email: "karan.bairwa@deeporion.com",
        full_name: "Karan Bairwa",
      },
      {
        id: 25,
        email: "admin4@test.com",
        full_name: null,
      },
    ],
  },
  {
    message: {
      id: 325,
      content: "what are you doing",
      chat_id: 10,
      sender_id: 45,
      receiver_id: 8,
    },
    users: [
      {
        id: 8,
        email: "karan.bairwa@deeporion.com",
        full_name: "Karan Bairwa",
      },
      {
        id: 45,
        email: "ayushi.khandelwal@deeporion.com",
        full_name: "Ayushi",
      },
    ],
  },
  {
    message: {
      id: 326,
      content: "hi",
      chat_id: 10,
      sender_id: 45,
      receiver_id: 8,
    },
    users: [
      {
        id: 8,
        email: "karan.bairwa@deeporion.com",
        full_name: "Karan Bairwa",
      },
      {
        id: 45,
        email: "ayushi.khandelwal@deeporion.com",
        full_name: "Ayushi",
      },
    ],
  },
];

export const leaveFilterTableDefaultValue = [
  {
    id: 0,
    header: "From Date",
    isChecked: true,
    disable: true,
    key: "fromDate",
  },
  {
    id: 1,
    header: "To Date",
    isChecked: true,
    disable: true,
    key: "toDate",
  },
  {
    id: 2,
    header: "No. Of Days",
    isChecked: true,
    disable: true,
    key: "numOfDays",
  },
  {
    id: 3,
    header: "Leave Type",
    isChecked: true,
    disable: true,
    key: "leaveType",
  },

  {
    id: 4,
    header: "Reason",
    isChecked: true,
    disable: true,
    key: "reason",
  },
];

export const HeaderValues = [
  {
    id: 1,
    values: [
      "employeeName",
      "empId",
      "uAN",
      "month",
      "employeeShare",
      "employerShare",
      "status",
    ],
  },
  {
    id: 2,
    values: ["name", "pAN", "totalAmount", "tdsAmount", "status"],
  },
  {
    id: 3,
    values: [
      "assetId",
      "Assetname",
      "assignedTo",
      "assignedBy",
      "assignedDate",
      "serialNo",
      "desc",
      "buyingDate",
      "buyingPrice",
    ],
  },
  {
    id: 4,
    values: ["name", "taxType", "amount", "dueDate", "status"],
  },
  {
    id: 5,
    values: [
      "expenseFor",
      "expenseBy",
      "date",
      "amount",
      "paymentBy",
      "paymentMethod",
    ],
  },
];

export const pfFilterValue = [
  {
    id: 0,
    header: "Employee Name",
    isChecked: false,
    key: "full_name",
  },
  {
    id: 1,
    header: "Employee ID",
    isChecked: false,
    key: "id",
  },
  {
    id: 2,
    header: "UAN Number",
    isChecked: false,
    key: "uan_no",
  },
  {
    id: 3,
    header: "Month",
    isChecked: false,
    key: "month",
  },
  {
    id: 4,
    header: "	Employee Share",
    isChecked: false,
    key: "employee_share",
  },
  {
    id: 5,
    header: "	Employer Share",
    isChecked: false,
    key: "employer_share",
  },
];

export const tabLinks = [
  {
    id: 1,
    value: "providentFund",
  },
  {
    id: 2,
    value: "TDS",
  },
  {
    id: 3,
    value: "assets",
  },
  {
    id: 4,
    value: "companyTax",
  },
  {
    id: 5,
    value: "expenses",
  },
];

export const buttonBasedOnTabValue = {
  1: { path: "/management/addProvidentFund", value: "addNew" },
  2: { path: "/management/AddTdsDetails", value: "add" },
  3: { path: "/management/AssetDetails", value: "addAssets" },
  4: { path: "/management/AddCompanyTaxDetails", value: "add" },
  5: { path: "/management/ExpenseDetails", value: "addExpense" },
};

export const filterSalaryValue = [
  {
    header: "Salary Type",
    isChecked: true,
    disable: true,
    key: "salary_type",
  },
  {
    header: "Total Working Days",
    isChecked: true,
    disable: true,
    key: "total_working_days",
  },
  {
    header: "Status",
    isChecked: true,
    disable: true,
    key: "status",
  },
  {
    header: "Date",
    isChecked: false,
    key: "date",
  },
  {
    header: "Total Leaves",
    isChecked: false,
    key: "total_leaves",
  },
  {
    header: "ESIC",
    isChecked: false,
    key: "esic",
  },

  {
    header: "Effective Working Days",
    isChecked: false,
    key: "Effective_Working_days",
  },
];

export const skills = [
  { id: 1, name: "React JS", icon: FaReact, className: "text-blue-500" },
  {
    id: 2,
    name: "React Native",
    icon: TbBrandReactNative,
    className: "text-blue-500",
  },
  { id: 3, name: "MongoDB", icon: DiMongodb, className: "text-green-500" },
  { id: 4, name: "Mysql", icon: DiMysql, className: "text-blue-700" },
  { id: 5, name: "Postgresql", icon: DiPostgresql, className: "text-blue-800" },
  { id: 6, name: "Angular", icon: FaAngular, className: "text-red-600" },
  {
    id: 7,
    name: "Ruby on Rails",
    icon: SiRubyonrails,
    className: "text-red-700",
  },
  { id: 8, name: "Ruby", icon: GoRuby, className: "text-red-700" },
  { id: 9, name: "HTML", icon: FaHtml5, className: "text-orange-500" },
  { id: 10, name: "Css", icon: FaCss3, className: "text-blue-500" },
  {
    id: 11,
    name: "Typescript",
    icon: SiTypescript,
    className: "text-blue-600",
  },
  {
    id: 12,
    name: "Javascript",
    icon: IoLogoJavascript,
    className: "text-yellow-500",
  },
  { id: 13, name: "Tailwind", icon: SiTailwindcss, className: "text-teal-500" },
  { id: 14, name: "SCSS", icon: BsFiletypeScss, className: "text-pink-600" },
  { id: 15, name: "SASS", icon: FaSass, className: "text-pink-700" },
  { id: 16, name: "MUI", icon: SiMui, className: "text-blue-600" },
  {
    id: 17,
    name: "Bootstrap",
    icon: FaBootstrap,
    className: "text-indigo-600",
  },
  { id: 18, name: "Jest", icon: GiJesterHat, className: "text-pink-700" },
  { id: 19, name: "Enzyme", icon: FaAirbnb, className: "#8C1515" },
  { id: 20, name: "Java", icon: FaJava, className: "text-blue-700" },
  { id: 21, name: "IOS", icon: FaAppStoreIos, className: "text-black" },
  { id: 22, name: "Android", icon: FaAndroid, className: "text-green-500" },
  { id: 23, name: "Flutter", icon: MdFlutterDash, className: "text-blue-900" },
  { id: 24, name: "SEO", icon: TbSettingsSearch, className: "text-blue-500" },
  {
    id: 25,
    name: "Pen Testing",
    icon: SiTestinglibrary,
    className: "text-red-800",
  },
  { id: 26, name: "GoLang", icon: FaGolang, className: "text-blue-900" },
  { id: 27, name: "Python", icon: FaPython, className: "text-blue-900" },
  { id: 28, name: "Django", icon: DiDjango, className: "text-green-900" },
  { id: 29, name: "Figma", icon: FaFigma, className: "text-red-600" },
  {
    id: 30,
    name: "Adobe Illustrator",
    icon: SiAdobeillustrator,
    className: "text-yellow-500",
  },
  {
    id: 31,
    name: "Adobe Photoshop",
    icon: SiAdobephotoshop,
    className: "text-blue-500",
  },
  { id: 32, name: "Adobe XD", icon: SiAdobexd, className: "text-purple-700" },
  { id: 33, name: "Miro", icon: SiMiro, className: "text-black" },
  {
    id: 34,
    name: "Others",
    icon: PiSealQuestionFill,
    className: "text-[#333]",
  },
];

export const section = {
  section194: "section 194",
  section192: "section 192",
};

export const message = [
  {
    chatId: 12,
    content:
      "Expedita.",
    createdAt: "2024-03-05T11:01:05.086+05:30",
    id: 231,
    senderId: 26,
    senderName: "karan bairwa",
    files: [
      "https://i.pinimg.com/564x/b6/2a/7c/b62a7cef004ca9078abe50c72fb8c915.jpg",
    ],
    users: [
      {
        email: "karan2@deeporion.com",
        full_name: "karan 2",
        id: 47,
      },
      {
        email: "karan@deeporion.com",
        full_name: "karan bairwa",
        id: 26,
      },
    ],
  },
  {
    chatId: 12,
    content: "",
    createdAt: "2024-03-05T11:01:05.086+05:30",
    id: 234,
    senderId: 26,
    senderName: "karan bairwa",
    files: [
      "https://i.pinimg.com/564x/b6/2a/7c/b62a7cef004ca9078abe50c72fb8c915.jpg",
    ],
    users: [
      {
        email: "karan2@deeporion.com",
        full_name: "karan 2",
        id: 47,
      },
      {
        email: "karan@deeporion.com",
        full_name: "karan bairwa",
        id: 26,
      },
    ],
  },
  {
    chatId: 12,
    content: "MY ANME IS KARAN BAIRWA",
    createdAt: "2024-03-05T11:01:05.086+05:30",
    id: 232,
    senderId: 47,
    senderName: "karan bairwa",
    users: [
      {
        email: "karan2@deeporion.com",
        full_name: "karan 2",
        id: 47,
      },
      {
        email: "karan@deeporion.com",
        full_name: "karan bairwa",
        id: 26,
      },
    ],
  },
];
