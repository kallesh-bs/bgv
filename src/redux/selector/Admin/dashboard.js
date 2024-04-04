export const formatRevenueData = (response) => {
  const requiredResponse = [];

  response?.map((obj) =>
    requiredResponse.push({
      Title: obj.title,
      Earnings: obj.Earnings,
      Expenses: obj.Expenses,
      Revenue: obj.Revenue,
    })
  );

  return requiredResponse;
};

export const formatRevenueOverviewData = (response) => {
  const requiredResponse = [];

  response?.map((obj) =>
    requiredResponse.push({
      Title: obj.title,
      Earnings: obj.Earnings,
      Expenses: obj.Expenses,
      Revenue: obj.Revenue,
    })
  );

  return requiredResponse;
};

export const formatMontlyClients = (response) => {
  const requiredResponse = [];
  response?.map((obj) =>
    requiredResponse.push({
      Total: obj.total,
      Month: obj.month,
      Active: obj.active,
      Inactive: obj.inactive,
    })
  );

  return requiredResponse;
};

export const formatMontlyEmployees = (response) => {
  const requiredResponse = [];
  response?.map((obj) =>
    requiredResponse.push({
      Total: obj.total,
      Month: obj.month,
      Active: obj.active,
      Inactive: obj.inactive,
    })
  );

  return requiredResponse;
};

export const formatTotalEmployees = (response) => {
  const requiredResponse = [];
  response?.map((obj) =>
    requiredResponse.push({
      name: obj.name,
      value: obj.value,
    })
  );

  return requiredResponse;
};

export const formatMonthlyWorkingHourGraph = (response) => {
  const requiredResponse = [];
  response?.map((obj) =>
    requiredResponse.push({
      name: obj.name,
      "Non Billable Hours": obj.NonBillableHours,
      "Billable Hours": obj.BillableHours,
    })
  );

  return requiredResponse;
};

export const formatYearlyWorkingHourGraph = (response) => {
  const requiredResponse = [];
  response?.map((obj) =>
    requiredResponse.push({
      name: obj.name,
      "Non Billable Hours": obj.NonBillableHours,
      "Billable Hours": obj.BillableHours,
    })
  );

  return requiredResponse;
};

