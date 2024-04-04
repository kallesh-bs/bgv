export const formatProjectData = (response) => {
  const requiredFormat = [];
  response?.map((res) => {
    return requiredFormat?.push({
      project: {
        id: res?.project?.id,
        name: res?.project?.name,
        description: res?.project?.description,
        domain: res?.project?.domain,
        startDate: res?.project?.start_date,
        rate: res?.project?.rate,
        currency: res?.project?.currency,
        projectType: res?.project?.project_type,
        assignedTo: res?.project?.assigned_to,
        assignedBy: res?.project?.assigned_by,
        billable: res?.project?.billable,
        userId: res?.project?.user_id,
        status: res?.project?.status,
        endDate: res?.project?.end_date,
        billingType: res?.project?.billing_type,
        clientId: res?.project?.client_id,
        amount: res?.project?.amount,
        link: res?.project?.link,
      },
      resource: res?.resource && {
        id: res?.resource?.id,
        email: res?.resource?.email,
        fullName: res?.resource?.full_name,
        employeeId: res?.resource?.employee_id,
        profilePictureUrl: res?.resource?.profile_picture_url,
      },
    });
  });

  return requiredFormat;
};

export const formatAddProjectData = (values) => {
  const requiredFormat = {
    name: values?.name,
    description: values?.description,
    // domain: "",
    start_date: values?.startDate,
    // rate: "",
    currency: values?.currency,
    // project_type: "",
    // assigned_to: 0,
    // assigned_by: 0,
    // billable: "",
    end_date: values?.endDate,
    billing_type: values?.billingType,
    amount: values?.amount,
    // link: "",
    client_id: values?.clientId,
  };

  return requiredFormat;
};
