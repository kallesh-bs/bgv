export const formatSearchResult = (response) => {
  const requiredResponse = [];
  response?.map((obj) => {
    requiredResponse.push({
      id: obj?.id,
      email: obj?.email,
      uanNo: obj?.uan_no,
      fullName: obj?.full_name,
      designation: obj?.designation,
    });
  });

  return requiredResponse;
};

export const formatExpensesData = (response) => {
  const requiredResponse = [];
  response?.map((obj) => {
    requiredResponse.push({
      id: obj?.id,
      expensesFor: obj?.expense_for,
      expensesBy: obj?.expense_by,
      date: obj?.date,
      amount: obj?.amount,
      paymentBy: obj?.payment_by,
      paymentMethod: obj?.payment_method,
    });
  });

  return requiredResponse;
};

export const formatCompanyTaxData = (response) => {
  const requiredResponse = [];
  response?.map((obj) => {
    requiredResponse.push({
      id: obj?.id,
      name: obj?.name,
      taxType: obj?.tax_type,
      amount: obj?.amount,
      dueDate: obj?.due_date,
      status: obj?.status,
    });
  });

  return requiredResponse;
};

export const formatAssetData = (response) => {
  const requiredResponse = [];
  response?.map((obj) => {
    requiredResponse.push({
      id: obj?.id,
      gadgetName: obj?.gadget_name,
      assignedBy: obj?.assigned_by,
      assignedTo: obj?.assigned_to,
      assignedDate: obj?.assigned_date,
      serialNo: obj?.serial_no,
      configuration: obj?.configuration,
      buyingDate: obj?.buying_date,
      buyingPrice: obj?.buying_price,
    });
  });

  return requiredResponse;
};

export const formatTdsData = (response) => {
  const requiredResponse = [];
  response?.map((obj) => {
    requiredResponse.push({
      id: obj?.td?.id,
      fullName: obj?.user?.full_name,
      pan: obj?.td?.pan,
      totalAmmount: obj?.td?.total_ammount,
      tdsAmmount: obj?.td?.tds_ammount,
      status: obj?.td?.status,
    });
  });

  return requiredResponse;
};

export const formatPFData = (response) => {
  const requiredResponse = [];
  response?.map((obj) => {
    requiredResponse.push({
      id: obj?.provident_fund?.id,
      fullName: obj?.user?.full_name,
      userId: obj?.user?.id,
      month: obj?.provident_fund?.month,
      employeeShare: obj?.provident_fund?.employee_share,
      employerShare: obj?.provident_fund?.employer_share,
      status: obj?.provident_fund?.status,
      uanNo: obj?.user?.uan_no,
      email: obj?.user?.email,
    });
  });

  return requiredResponse;
};

export const formatAddCompanyData = (response) => {
  const jsonObj = {
    company_taxes: {
      name: response?.name,
      tax_type: response?.tax_type,
      amount: response?.amount,
      due_date: response?.due_date,
      status: response?.status,
    },
  };

  return jsonObj;
};

export const formatEditCompanyData = (response) => {
  const jsonObj = {
    company_tax: {
      name: response?.name,
      taxType: response?.tax_type,
      amount: response?.amount,
      dueDate: response?.due_date,
      status: response?.status,
    },
  };

  return jsonObj;
};

export const getCompanyDD = (response) => {
  return {
    id: response?.id,
    name: response?.name,
    taxType: response?.tax_type,
    amount: response?.amount,
    dueDate: response?.due_date,
    status: response?.status,
  };
};

export const formatEditTdsData = (values) => {
  const jsonObj = {
    tds: {
      empId: values?.id,
      name: values?.name,
      pan: values?.pan,
      total_ammount: values?.total_amount,
      tds_ammount: values?.tds_amount,
      status: values?.status,
    },
    users: {
      id: values?.users?.id,
    },
  };

  return jsonObj;
};

export const formatAddTdsData = (values) => {
  const jsonObj = {
    tds: {
      name: values?.name,
      pan: values?.pan,
      total_ammount: values?.totalAmount,
      tds_ammount: values?.tdsAmount,
      status: values?.status,
    },
  };

  return jsonObj;
};

export const getTdsData = (values) => {
  const jsonObj = {
    empId: values?.user?.id,
    fullName: values?.user?.full_name,
    pan: values?.tds?.pan,
    totalAmount: values?.tds?.total_ammount,
    tdsAmount: values?.tds?.tds_ammount,
    status: values?.tds?.status,
    tdsId: values?.tds?.id,
  };

  return jsonObj;
};

export const formatExpensesDetails = (response) => {
  return {
    id: response?.id,
    expenseFor: response?.expense_for,
    expenseBy: response?.expense_by,
    expenseDate: response?.date,
    amount: response?.amount,
    paymentBy: response?.payment_by,
    paymentMethod: response?.payment_method,
    invoiceImage: response?.invoice_image?.filename,
  };
};

export const addExpenseData = (response) => {
  const jsonObj = {
    expense: {
      expense_for: response?.expenseFor,
      expense_by: response?.expenseBy,
      amount: response?.amount,
      date: response?.expenseDate,
      payment_by: response?.paymentBy,
      payment_method: response?.paymentMethod,
      invoice_image: response?.invoiceImage?.filename,
    },
  };

  return jsonObj;
};

export const getPfData = (response) => {
  const jsonObj = {
    empId: response?.provident_fund?.id,
    name: response?.user?.full_name,
    employeeShare: response?.provident_fund?.employee_share,
    employerShare: response?.provident_fund?.employer_share,
    status: response?.provident_fund?.status,
    fullName: response?.user?.full_name,
    uanNo: response?.user?.uan_no,

  };

  return jsonObj;
};

export const formatEditPFData = (values) => {
  const jsonObj = {
    empId: values.empId,
    name: values.name,
    uAN: values.uAN,
    month: values.month,
    employee_share: values.employeeShare,
    employer_share: values.employerShare,
    status: values.status,
  };

  return jsonObj;
};

export const formatAddPFData = (values) => {
  const jsonObj = {
    provident_fund: {
      month: values?.month,
      employee_share: values?.employeeShare,
      employer_share: values?.employerShare,
      status: values?.status,
    },
  };

  return jsonObj;
};

export const getAssetsData = (response) => {
  const jsonObj = {
    assetId: response?.gadget?.id,
    gadgetName: response?.gadget?.gadget_name,
    assignedTo: response?.gadget?.assigned_to,
    assignedBy: response?.gadget?.assignedBy,
    assignedDate: response?.gadget?.assigned_date,
    serialNo: response?.gadget?.serial_no,
    configuration: response?.gadget?.configuration,
    buyingDate: response?.gadget?.buying_date,
    buyingPrice: response?.gadget?.buying_price,
    gadgetImages: response?.gadget_images?.filename,

  };

  return jsonObj;

};

export const formatEditAssetData = (values, images) => {
  const formData = new FormData();
  formData.append("gadget[gadget_name]", values.gadgetName);
  formData.append("gadget[assigned_to]", values.assigned_to);
  formData.append("gadget[assigned_by]", values.assignedBy);
  formData.append("gadget[assigned_date]", values.assignedDate);
  formData.append("gadget[serial_no]", values.serialNo);
  formData.append("gadget[configuration]", values.configuration);
  formData.append("gadget[buying_date]", values.buyingDate);
  formData.append("gadget[buying_price]", values.buyingPrice);

  if (images) {
    formData.append("gadget[gadget_images][]", images);
  }

  return formData;
};

