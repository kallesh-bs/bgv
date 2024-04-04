export const formatInterviewListResponse = (response) => {
  const requiredResponse = [];
  response?.map((obj) =>
    requiredResponse.push({
      id: obj?.id,
      date: obj?.attributes.date,
      interviewStatus: obj?.attributes.interview_status,
      projectName: obj?.attributes.project_name,
      description: obj?.attributes.description,
      interviewRounds: obj?.attributes.interview_rounds,
      clientName: obj?.attributes.client_name,
    })
  );

  return requiredResponse;
};

export const formatInterviewResponse = (response) => {
  const requiredResponse = {
    id: response?.id,
    projectName: response.attributes.project_name,
    date: response.attributes.date,
    clientName: response.attributes.client_name,
    package: response.attributes.package_or_budget,
    website: response.attributes.website_link,
    title: response.attributes.title,
    fromTime: response.attributes.from_time,
    meetingLink: response.attributes.meeting_link,
    interviewRounds: response.attributes.interview_rounds,
    interviewStatus: response.attributes.interview_status,
    assigneeName: response.attributes.assignee_name,
    description: response.attributes.description,
    toTime: response.attributes.to_time,
    projectProviderName: response.attributes.project_provider_name,
  };

  return requiredResponse;
};

export const formattedAddFeedback = (comment ,id) => {
  return({
    feedback: {
      comment: comment,
      interview_id: id,
    },
  });
};

export const formatAllFeedbackResponse = (response) => {
  const requiredResponse = [];
  response.map((obj) =>
    requiredResponse.push({
      comment: obj?.attributes?.comment,
      time: obj?.attributes.created_at,
      name: obj?.attributes?.user?.full_name,
      profilePic: obj?.attributes?.user?.profile_picture_url,

    }));

  return requiredResponse;
};

export const formatmyFeedback = (response) => {
  const requiredResponse = [];
  response.map((obj) =>
    requiredResponse.push({
      comment: obj?.attributes?.comment,
      time: obj?.attributes.created_at,
      name: obj?.attributes?.user?.full_name,
      profilePic: obj?.attributes?.user?.profile_picture_url,
    }));

  return requiredResponse;
};
