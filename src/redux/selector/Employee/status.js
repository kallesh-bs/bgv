export const formatStatusResponse = (response) => {
  const requiredResponse = [];
  response?.map((obj) => {
    const totalWorkingHours = obj?.tasks?.reduce(
      (total, current) => total + parseFloat(current?.working_hours || 0),
      0
    );
    requiredResponse.push ({
      statusDate: obj?.tasks[0].status_date,
      workingHours: totalWorkingHours,
      projectName: obj?.tasks[0].project_name,
    });

  });

  return requiredResponse;

};
