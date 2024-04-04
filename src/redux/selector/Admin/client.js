export const formatProjectResourceResponse = (response) => {
  const requiredResponse = [];
  response?.map((obj) => {
    requiredResponse.push({
      id: obj?.id,
      designation: obj?.designation,
      employeeName: obj?.employee_name,
      rate: obj?.rate,
      startDate: obj?.start_date,
      type: obj.type,
    });
  });

  return requiredResponse;
};

export const formatClientInformation = (response) => {
  const requiredResponse = {
    city: response?.city,
    clientType: response?.client_type,
    country: response?.country,
    documentUrl: response?.document_url,
    email: response?.email,
    goodsAndServiceTax: response.goods_and_services_tax,
    id: response?.id,
    isActive: response?.is_active,
    name: response?.name,
    onboardDate: response?.onboard_date,
    onboardedBy: response?.onboarded_by,
    phoneNumber: response?.phone_number,
    state: response?.state,
    streetAddress: response?.street_address,
    taxRate: response?.tax_rate,
    timeZone: response?.time_zone,
  };

  return requiredResponse;
};

export const formatAllProjectInformation = (response) => {
  const requiredResponse = [];
  if (response) {
    response?.map((obj) => {
      requiredResponse.push({
        id: obj?.project?.id,
        name: obj?.project?.name,
        startDate: obj?.project?.start_date,
      });
    });

    return requiredResponse;
  }

  return requiredResponse;
};

export const formatClientInfo = (request) => {
  const formdata = new FormData();

  formdata.append("client[name]", request.name);
  formdata.append("client[email]", request.email);
  formdata.append("client[phone_number]", request.phoneNumber);
  formdata.append("client[client_type]", request.clientType);
  formdata.append(
    "client[password_confirmation]",
    request.passwordConfirmation
  );
  formdata.append("client[password]", request.password);
  formdata.append("client[street_address]", request.streetAddress);
  formdata.append("client[state]", request.state);
  formdata.append("client[city]", request.city);
  formdata.append("client[country]", request.country);
  formdata.append("client[time_zone]", request.timeZone);
  formdata.append("client[onboard_date]", request.onboardDate);
  formdata.append("client[onboarded_by]", request.onboardedBy);
  formdata.append(
    "client[goods_and_services_tax]",
    request.goodsAndServicesTax
  );
  formdata.append("client[tax_rate]", request.taxRate);

  if (request.document) {
    formdata.append("client[document_url]", request.document);
  }

  return formdata;
};

export const formatClientInvoiceData = (response) => {
  const requiredResponse = [];
  response?.map((obj) => {
    requiredResponse.push({
      id: obj?.id,
      designation: obj?.designation,
      employeeName: obj?.employee_name,
      rate: obj?.rate,
      startDate: obj?.start_date,
      type: obj.type,
    });
  });

  return requiredResponse;
};

export const formatEmployeeData = (response) => {
  const requiredResponse = [];
  if (response) {
    response?.map((obj) => {
      requiredResponse.push({
        email: obj?.email,
        fullName: obj?.full_name,
        id: obj?.id,
      });
    });

    return requiredResponse;
  }
};

export const formatAddResourceRequest = (values, id, projectId) => {
  const requiredRequest = {
    values: {
      project_resource: {
        start_date: values.startDate,
        rate: values.rate,
        type: values.type,
      },
    },
    id: id,
    projectId: projectId,
    employeeName: values.employeeName,
  };

  return requiredRequest;
};

export const formatedInvoiceData = (response) => {
  const requiredResponse = [];

  if (response) {
    response?.map((obj) => {
      requiredResponse.push({
        amount: obj?.attributes?.amount,
        client: obj?.attributes?.client,
        clientName: obj?.attributes?.client_name,
        currency: obj?.attributes?.currency,
        dueDate: obj?.attributes?.due_date,
        gstFiles: obj?.attributes?.gst_files,
        invoiceDate: obj?.attributes?.invoice_date,
        invoiceNumber: obj?.attributes?.invoice_number,
        status: obj?.attributes?.status,
      });
    });
  }

  return requiredResponse;
};

export const formateReviews = (response) => {
  const requiredResponse = [];

  response?.map((obj) =>
    requiredResponse.push({
      id: obj?.id,
      review: obj?.review,
      projectId: obj?.project_id,
      resourceId: obj?.resource_id,
      clientId: obj?.client_id,
      punctualityRating: obj?.punctuality_rating,
      behaviourRating: obj?.behaviour_rating,
      createdAt: obj?.created_at,
      productivityRating: obj?.productivity_rating,
      month: obj?.month,
    })
  );

  return requiredResponse;

};

export const formatSingleReviews = (response) => {
  return ({
    id: response?.id,
    review: response?.review,
    projectId: response?.project_id,
    resourceId: response?.resource_id,
    clientId: response?.client_id,
    punctualityRating: response?.punctuality_rating,
    behaviourRating: response?.behaviour_rating,
    createdAt: response?.created_at,
    productivityRating: response?.productivity_rating,
    month: response?.month,
  });
};

export const formatReview = (values) => {
  const jsonObj = {
    review: {
      review: values?.review,
      resource_id: values?.resourceId,
      project_id: values?.projectId,
      client_id: values?.id,
      punctuality_rating: values?.punctuality,
      behaviour_rating: values?.behaviour,
      productivity_rating: values?.productivity,
      month: values?.month,
    },
  };

  return jsonObj;
};

export const formatfeedback = (values, interviewId) => {
  const jsonObj = {
    feedback: {
      comment: values.comment,
      interview_id: interviewId,
    },
  };

  return jsonObj;
};
