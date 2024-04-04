import { changeDateFormate} from "utils/date";
import { setSalaryFilterListing, setSection192 } from "redux/actions/action";
import { filterSalaryValue, section192 } from "utils/Constants";

export const formatSalaryListing = (response, dispatch) => {
  const data = [];
  const addObj = {};
  const deductionObj = {};
  const otherObj = {};
  const filteredArray = [];
  const section192Array = [];
  response.data?.map((obj, index) => {
    obj?.salary_slip?.additions?.map(({ name, value }) => {
      addObj[name] = value;
    });
    obj?.salary_slip?.deductions?.map(({ name, value }) => {
      deductionObj[name] = value;
    });
    obj?.salary_slip?.others?.map(({ name, value }) => {
      otherObj[name] = value;
    });
    const additionsSum = Object.values(addObj).reduce(
      (acc, total) => acc + total,
      0
    );
    const deductionSum = Object.values(deductionObj).reduce(
      (acc, total) => acc + total,
      0
    );

    if(index === 0) {
      Object.keys(addObj).map((key) => filteredArray.push({
        header: key,
        isChecked: false,
        key: key,
      }));
      Object.keys(deductionObj).map((key) => filteredArray.push({
        header: key,
        isChecked: false,
        key: key,
      }));
      Object.keys(otherObj).map((key) => filteredArray.push({
        header: key,
        isChecked: false,
        key: key,
      }));
      filteredArray.filter((val) =>
        val.key != "Consultancy Fee" ).map((obj) => section192Array.push(obj.key.replace("_"," ")));
      dispatch(setSalaryFilterListing([...filterSalaryValue, ...filteredArray]));
      dispatch(setSection192([...section192, ...section192Array]));
    }

    const otherSum = Object.values(otherObj)
      .filter((item) => typeof item !== "string")
      .reduce((acc, total) => acc + total, 0);
    data.push({
      ...addObj,
      ...deductionObj,
      ...otherObj,
      salaryId: obj?.salary_slip?.id,
      employeeId: obj?.user?.id,
      employeeCode: obj?.user?.emp_code,
      full_name: obj?.user?.full_name,
      esic: obj?.user?.esic_no,
      salary_type: obj?.salary_slip?.salary_type.length > 10 ? "FNF" : obj?.salary_slip?.salary_type,
      date: (obj?.date && changeDateFormate(obj?.date)) || "---",
      total_working_days: obj?.total_working_days,
      Effective_Working_days: obj?.Effective_Working_days,
      total_leaves: obj?.total_leaves,
      total_salary: additionsSum + otherSum - deductionSum,
      email: obj?.user?.email,
      status: obj?.salary_slip?.status,
      tds: obj?.tax_deduction_at_source,
      employee_type: obj?.user?.employee_type,
      section_applicable: obj?.user?.section_applicable,
    });
  });

  return data;
};

export const formatSalaryAttributes = (response) => {
  const salary_type = {
    additions: [],
    deductions: [],
    others: [],
    id: null,
  };
  salary_type.additions = response?.salary_type[0]?.additions;
  salary_type.deductions = response?.salary_type[0]?.deductions;
  salary_type.others = response?.salary_type[0]?.others;
  salary_type.id = response?.salary_type[0]?.id;

  return salary_type;

};
