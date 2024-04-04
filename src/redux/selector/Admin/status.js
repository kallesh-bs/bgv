export const formatStatusListResponse = (response) => {
  const requiredResponse = [];
  response?.map((obj) => {

    const totalWorkingHours = obj?.tasks?.reduce(
      (total, current) => total + parseFloat(current?.working_hours || 0),
      0
    );
    requiredResponse.push({
      id: obj?.id,
      email: obj?.email,
      employeeId: obj?.employee_id,
      fullName: obj?.full_name,
      designation: obj?.designation?.designation || null,
      statusDate: obj?.tasks[0].status_date,
      workingHours: totalWorkingHours,
      billable: obj?.tasks[0].billable,
    });
  });

  return requiredResponse;
};

export const formatStatuslistNameAndDate = (response) => {
  const requiredResponse = [];

  response?.map((obj) => {
    const totalWorkingHours = obj?.tasks?.reduce(
      (total, current) => total + parseFloat(current?.working_hours || 0),
      0
    );
    requiredResponse.push({
      id: obj?.id,
      email: obj?.email,
      employeeId: obj?.employee_id,
      fullName: obj?.full_name,
      designation: obj?.designation?.designation || null,
      statusDate: obj?.tasks[0]?.status_date,
      workingHours: totalWorkingHours,
      billable: obj?.tasks[0]?.billable,
    });
  });

  return requiredResponse;
};
