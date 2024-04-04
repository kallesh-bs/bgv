export const formatLeaveData = (response) => {
  const requiredResponse = [];
  response?.map((obj) => {
    requiredResponse.push({
      id: obj.leaves.id,
      fromDate: obj.leaves.from_date,
      toDate: obj.leaves.to_date,
      leaveType: obj.leaves.leave_type?.leave_name || null,
      reason: obj.leaves.reason,
      toTime: obj.leaves.to_time,
      leaveBalance: obj.leaves.leave_balance,
      leaveStatus: obj.leaves.leave_status,
      fromTime: obj.leaves.from_time,
      consumedLeave: obj?.leaves?.consumed_leave,
    }
    );
  });

  return requiredResponse;
};

export const formatLeave = (response) => {
  const requiredResponse = {
    id: response.leaves.id,
    fromDate: response.leaves.from_date,
    toDate: response.leaves.to_date,
    leaveType: response.leaves.leave_type?.leave_name || null,
    reason: response.leaves.reason,
    toTime: response.leaves.to_time,
    leaveBalance: response.leaves.leave_balance,
    leaveStatus: response.leaves.leave_status,
    fromTime: response.leaves.from_time,
  };

  return requiredResponse;
};

export const formatAddLeave = (values,id) => {
  return({
    leave: {
      id_of_user: id,
      leave_type: values?.leaveType,
      from_date: values?.fromDate,
      from_time: values?.fromTime,
      to_date: values?.toDate,
      to_time: values?.toTime,
      reason: values?.reason,
      leave_status: values?.status,
      consumed_leave: values?.consumedLeave,
    },
  });
};

export const formatEditLeaves = (values) => {
  return({
    leave: {
      leave_type: values?.leaveType,
      from_date: values?.fromDate,
      from_time: values?.fromTime,
      to_date: values?.toDate,
      to_time: values?.toTime,
      reason: values?.reason,
      leave_status: values?.status,
      consumed_leave: values?.consumedLeave,
    },
  });
};
