export const formatMyTeamResponse = (response) => {
  const requiredResponse = [];
  response?.map((obj) => {
    requiredResponse.push({
      id: obj.id,
      fullName: obj.full_name,
      email: obj.email,
      designation: obj.designation,
      jobType: obj.job_type,
      status: obj.status,
    });
  });

  return requiredResponse;
};

export const formatuserResponse = (response) => {
  return ({
    designationId: response?.designation_id,
  });
};
