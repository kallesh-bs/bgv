export const formatLeaveTypeResponse = (response) => {
  const requiredResponse = [];
  response?.map((obj) => {
    requiredResponse.push({
      id: obj?.id,
      leaveName: obj?.leave_name,
      isActive: obj?.is_active,
    });
  });

  return requiredResponse;
};

export const formatAddLeaveRequest = (values) => {
  return {
    leave: {
      id_of_user: values?.id,
      employee_name: values?.employeeName,
      from_date: values?.fromDate,
      to_date: values?.toDate,
      consumed_leave: values?.numOfDays,
      leave_type: values?.leaveType,
      reason: values?.reason,
      leave_status: values?.leaveStatus,
    },
  };
};

export const formattedStatusChange = (leaves, option) => {
  return {
    from_time: leaves?.fromTime,
    to_time: leaves?.toTime,
    from_date: leaves?.fromDate,
    to_date: leaves?.toDate,
    leave_type: leaves?.leaveType,
    leave_status: option,
    reason: leaves?.reason,
    consumed_leave: Number(leaves?.consumedLeave),
    employee_name: leaves?.fullName,
  };
};

export const formatEmployeeData = (response) => {
  const requiredResponse = [];
  response?.map((obj) => {
    requiredResponse.push({
      id: obj.leaves?.id,
      fullName: obj.user.full_name,
      email: obj.user?.email,
      fromDate: obj.leaves?.from_date,
      toDate: obj.leaves?.to_date,
      leaveType: obj.leaves?.leave_type?.leave_name || null,
      reason: obj.leaves?.reason,
      toTime: obj.leaves?.to_time,
      leaveStatus: obj.leaves?.leave_status,
      fromTime: obj.leaves?.from_time,
      consumedLeave: obj.leaves.consumed_leave || null,
    });
  });

  return requiredResponse;
};

export const formatLeaveSearchData = (response) => {
  const requiredResponse = [];
  response.map((leaves) => {
    if (leaves?.leaves?.length > 0) {
      leaves.leaves?.map((obj) => {
        requiredResponse.push({
          id: leaves.user?.id,
          fullName: leaves.user.full_name,
          email: leaves.user?.email,
          fromDate: obj.from_date,
          toDate: obj.to_date,
          leaveType: obj.leave_type?.leave_name || null,
          reason: obj.reason,
          toTime: obj.to_time,
          leaveStatus: obj.leave_status,
          fromTime: obj.from_time,
          consumedLeave: obj.consumed_leave || null,
        });
      });
    }
  });

  return requiredResponse;
};
