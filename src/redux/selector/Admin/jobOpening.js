export const fetchJobData = (response) => {
  const requiredResponse = [];

  response.map((obj) => {
    requiredResponse.push({
      id: obj.id,
      status: obj.status,
      title: obj.title,
      vacancy: obj.vacancy_count,
      requirements: obj.requirements,
      jobType: obj.job_type,
    }
    );
  });

  return requiredResponse;
};

export const singleJobData = (response) => {
  return ({
    id: response?.id,
    title: response.title,
    location: response.location,
    status: response.status,
    vacancy: response.vacancy_count,
    requirements: response.requirements,
    jobType: response.job_type,
    description: response.description,
    benefits: response.benefits,
  });
};

export const updateJobData = (response) => {
  const jsonObj = {
    job_opening: {
      title: response.title,
      location: response.location,
      status: response.status,
      vacancyCount: response.vacancy_count,
      requirements: response.requirements,
      jobType: response.job_type,
      description: response.description,
      benefits: response.benefits,
    },
  };

  return jsonObj;
};

