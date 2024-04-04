export const formatManagerData = (response) => {
  const managerName = [];

  response.manager_names.map((data) => managerName.push(data));

  return managerName;
};

export const formatProjectList = (response) => {
  const ProjectList = [];

  response && response?.projects.map((data) => {
    ProjectList.push({
      id: data?.project?.id,
      name: data?.project?.name,
    });
  });

  return ProjectList;
};
