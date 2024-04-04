export const formattedData = (response) => {
  const requiredResponse = [];

  response?.map((obj) => {
    requiredResponse.push({
      id: obj?.id,
      date: obj?.date,
      checkIn: obj?.check_in,
      checkOut: obj?.check_out,
      totalTime: obj?.total_time,
      punchType: obj?.punch_type,
      remark: obj?.remark,
    });
  });

  return requiredResponse;
};
