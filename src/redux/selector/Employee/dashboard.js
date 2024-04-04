export const formatPunchInRequest = (userData) => {
  return ({
    emp_code: userData.emp_code,
  });
};

export const formatPunchInOutResponse = (response) => {
  const requiredResponse = {
    remainingPaidLeave: response.remaining_paid_leave,
    remainingSickLeave: response.remaining_sick_leave,
    projectName: response.project_name,
  };

  return requiredResponse;
};

export const formatTotalWorkingDaysResponse = (response) => {
  const requiredResponse = {
    totalWorkingDays: response.total_working_days,
    paidLeave: response.paid_leave,
    unpaidLeave: response.unpaid_leave,
  };

  return requiredResponse;
};

export const formatTimerData = (response) => {
  const requiredResponse = [];
  response?.map((obj) =>
    requiredResponse.push({
      checkIn: obj?.check_in,
      checkOut: obj?.check_out,
      totalTime: obj?.total_time,
    })
  );

  return requiredResponse;
};

export const formatTotalAvg = (response) => {
  const requiredResponse = [];
  response?.map((obj) =>
    requiredResponse.push({
      punchtualityRatings: obj.punchtuality_ratings,
      behaviourRatings: obj.behaviour_ratings,
      productivityRatings: obj.productivity_ratings,
    })
  );

  return requiredResponse;
};

export const formatYourAvg = (response) => {
  const requiredResponse = [];
  response?.map((obj) =>
    requiredResponse.push({
      punchtualityRating: obj.punchtuality_rating,
      behaviourRating: obj.behaviour_rating,
      productivityRating: obj.productivity_rating,
    })
  );

  return requiredResponse;

};

export const formatOverviewReview = (response) => {
  const requiredResponse = [];
  response?.map((obj) =>
    requiredResponse.push({
      month: obj.month,
      rating: obj.rating,
    })
  );

  return requiredResponse;

};

