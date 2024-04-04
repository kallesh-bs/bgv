export const formatedInvoice = (response) => {
  const requiredResponse = [];
  if (response) {
    response?.map((obj) => {
      requiredResponse.push({
        id: obj?.attributes?.id,
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
