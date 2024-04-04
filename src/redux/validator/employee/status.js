import * as Yup from "yup";

export const applyStatusSchema = Yup.object({
  status_date: Yup.string().required("Please enter current date."),
  tasksDetails: Yup.array().of(
    Yup.object().shape({
      project_id: Yup.string().required("Project Name is required"),
      working_hours: Yup.string().required("Working Hours is required"),
      task_status: Yup.string().required("Status is required"),
      task_description: Yup.string().required("Description is required"),
      billable: Yup.string().required("Billable is required"),
    })
  ),
});
