export const GetCompanyProfileDetail = (response) => {
  const requiredResponse = [];
  response?.map((obj) => {
    requiredResponse.push({
      companyName: obj.companyName,
      companyContactNo: obj.companyContactNo,
      emailIdNewsLetter: obj.emailIdNewsLetter,
      facebook: obj.facebook,
      instagram: obj.instagram,
    }
    );
  });
};

export const formateCompanyProfile = (response) => {
  const requiredResponse = [];
  response?.map((obj) => {
    requiredResponse.push({
      companyName: obj.companyName,
      companyContactNo: obj.companyContactNo,
      emailIdNewsLetter: obj.emailIdNewsLetter,
      facebook: obj.facebook,
      instagram: obj.instagram,
    }
    );
  });
};

