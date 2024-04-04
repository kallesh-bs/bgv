export const formatSearchData = (response) => {
  const requiredResponse = [];
  requiredResponse.push({
    designation: response?.designation,
    id: response?.id,
  });

  return requiredResponse;
};

export const formatDesignationData = (response) => {
  const requiredResponse = [];
  const desinationName = Object.keys(response);

  desinationName?.map((obj) => {

    const tempObj = {
      id: obj,
      designation: response[obj]?.designation,
      users: response[obj]?.users,
    };

    return requiredResponse.push(tempObj);
  });

  const data = requiredResponse?.map((required) => {
    const tempArr = required?.users.map((users) => {
      return {
        id: users?.id,
        email: users?.email,
        fullName: users?.full_name,
      };
    });

    return {
      id: required?.id,
      designation: required?.designation,
      users: tempArr,
    };
  });

  return data;
};
