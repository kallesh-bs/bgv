import { unprotectedPaths } from "../utils/Constants";
import swalService from "../utils/SwalServices";
import { getHost } from "./Config";
import apiUrl from "./apiUrl";

const baseURL = getHost();

const responseInterceptor = async (response, formData = false) => {
  if (response.status === 401) {
    swalService.showWarning({ title: "Unauthorized" });
    setTimeout(() => {
      localStorage.removeItem("userLoginToken");
      localStorage.removeItem("tokenExpiryTime");
      window.location.assign("/login");
    }, 1500);
  } else if (response.status === 404) {
    swalService.showAlert({ title: "Not Found" });
  } else if (response.status === 422) {
    swalService.showAlert({ title: "Unprocessable Entity" });
  } else if (response.status === 400) {
    swalService.showAlert({ title: "Bad Request" });
  } else if (response.status === 500) {
    swalService.showAlert({ title: "Internal Server Error" });
  }
  if (response.status === 200 || response.status === 201) {
    const result = formData ? response : await response.json();

    return { response: result, status: response?.status };
  } else {
    return { response: [], status: response?.status };
  }
};

const requestInterceptor = () => {
  const token = JSON.parse(localStorage.getItem("userLoginToken"))?.token;
  const path = window.location.pathname.includes("/reset/")
    ? "/reset/"
    : window.location.pathname;
  if (!unprotectedPaths.includes(path)) {
    if (token) {
      return token;
    } else {
      swalService.showWarning({ title: "Unauthorized" });
      setTimeout(() => {
        localStorage.removeItem("userLoginToken");
        localStorage.removeItem("tokenExpiryTime");
        window.location.assign("/login");
      }, 1500);
    }
  } else {
    return "";
  }
};

var Helper = {
  post: async (jsonObj = {}, path = "", formData = false) => {
    console.log(JSON.stringify(jsonObj));
    console.log(Boolean(JSON.parse(formData)));
    // console.log(multipart);
    
    
    const token = requestInterceptor();
    if (formData) {
      console.log("mu-----");
      
      const url = baseURL + path;
      const result = await fetch(url, {
        method: "POST",
        body: jsonObj,
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: token,
        },
      });

      return responseInterceptor(result, formData);
    } 
    // else if(multipart){
    //   try {
    //     const url = baseURL + path;
    //     const res = await fetch(url, {
    //       method: "POST",
    //       body: JSON.stringify(jsonObj),
    //       headers: {
    //         "Content-Type": "multipart/form-data",
    //         Authorization: token,
    //       },
    //     });

    //     if (window.location.pathname !== "/login") {
    //       return responseInterceptor(res);
    //     }

    //     return res;
    //   } catch (error) {
    //     console.log("error", error);
    //     swalService.showError({ title: "Error!" });
    //   }
    // }
    else {
      // console.log("here --------",path,"L---");
      try {
        const url = baseURL + path;
        const res = await fetch(url, {
          method: "POST",
          body: JSON.stringify(jsonObj),
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        });

        if (window.location.pathname !== "/login") {
          return responseInterceptor(res);
        }

        return res;
      } catch (error) {
        console.log("error", error);
        swalService.showError({ title: "Error!" });
      }
    }
  },

  put: async (jsonObj = {}, path = "", formData = false) => {
    const token = requestInterceptor();
    if (formData) {
      const url = baseURL + path;
      const res = await fetch(url, {
        method: "PUT",
        body: jsonObj,
        headers: {
          Authorization: token,
        },
      });

      return responseInterceptor(res, formData);
    } else {
      const url = baseURL + path;
      const res = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(jsonObj),
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });

      return responseInterceptor(res);
    }
  },

  patch: async (jsonObj = {}, path = "", formData = false) => {
    const token = requestInterceptor();
    if (formData) {
      const url = baseURL + path;
      const res = await fetch(url, {
        method: "PATCH",
        body: jsonObj,
        headers: {
          Authorization: token,
        },
      });

      return responseInterceptor(res, formData);
    } else {
      const url = baseURL + path;
      const res = await fetch(url, {
        method: "PATCH",
        body: JSON.stringify(jsonObj),
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });

      return responseInterceptor(res);
    }
  },

  delete: async (path = "") => {
    const token = requestInterceptor();
    const url = baseURL + path;
    const res = await fetch(url, {
      method: "Delete",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    return responseInterceptor(res);
  },

  get: async (path = "", api = "") => {
    const token = requestInterceptor();
    const url = baseURL + path;
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    if (api === apiUrl.showUserChatWithId || api === path) {
      return res;
    } else {
      return responseInterceptor(res);
    }
  },

  getDownload: async (path = "") => {
    const token = requestInterceptor();
    const url = baseURL + path;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        accept: "*/*",
        Authorization: token,
      },
    });

    return response;
  },
};

export default Helper;
