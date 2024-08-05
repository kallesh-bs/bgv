import Helper from "api/Helper";
import { bgvAllEmpData, bgvEmployeeDataById, isLoading } from "redux/actions/action";
import swalService from "utils/SwalServices";
import apiUrl from "api/apiUrl";


export const fetchBgvEmployeeData =
  (currentPage, searchItem) => async (dispatch) => {
    dispatch(isLoading(true));
    const path = `background_verification?&page=${
      currentPage || 1
    } &per_page=${10} &query=${searchItem || ""}`;
    try {
      const { response } = await Helper.get(path);
      if (response.message === "No records found") {
        dispatch(bgvAllEmpData([]));
      } else {
        dispatch(bgvAllEmpData(response));
      }
      dispatch(isLoading(false));
    } catch (error) {
      swalService.showError({ title: "Error!" });
    }
  };

export const fetchBgvFilterEmployeeData =
  (currentPage, searchItem) => async (dispatch) => {
    dispatch(isLoading(true));
    const path = `background_verification?&page=${
      currentPage || 1
    } &per_page=${10} &query=${searchItem || ""}`;
    try {
      const { response } = await Helper.get(path);
      if (response.message === "No records found") {
        dispatch(bgvAllEmpData([]));
      } else {
        dispatch(bgvAllEmpData(response));
      }
      dispatch(isLoading(false));
    } catch (error) {
      swalService.showError({ title: "Error!" });
    }
  };



export const handleSidePopUpData = async (dispatch, userId) => {

  let path = `${apiUrl.background_verification}/${userId}`;
  console.log(path);

  // Ensure a valid path was determined
  if (!path) {
    console.error("Invalid text value, no API path determined");
    return;
  }
  try {
    const { response, status } = await Helper.get(path);
    // dispatch(bgvAllEmpData(response));
    console.log(response.background_verification
    );

    dispatch(bgvEmployeeDataById(response.background_verification))

    return true;
  }
  catch (error) {
    swalService.showError({ title: "Error while fetching data" });
  }

  // console.log("hHe");
}

export async function handleFileDelete(userId, url, columnName, dispatch) {
  let path = `${apiUrl.background_verification}/remove_document/${userId}`;
  // console.log(path, url, columnName);

  // Ensure a valid path was determined
  if (!path) {
    console.error("Invalid text value, no API path determined");
    return;
  }
  try {
    const { response, status } = await Helper.put({
      "url": url,
      "column": columnName
    }, path);
    if (response.success) {
      swalService.showSuccess({
        icon: "success",
        title: "Added!",
        text: "Document Deleted successfully",
        showConfirmButton: false,
        timer: 1500,
    });
      handleSidePopUpData(dispatch, userId)
    }
  }
  catch (error) {
    swalService.showError({
      icon: "error",
      title: "Error!",
      text: "Failed to Delete Document",
      timer: 1500,
  });
  }
}

export const handleFileChange = async (event, userid, form_column, path_add, dispatch) => {
  const files = event.target.files === null? [] : Array.from(event.target.files);
  const formData = new FormData();
  files.forEach((file) => {
      formData.append(form_column, file);
  });

  let path = `${path_add}/${userid}`;
  // console.log(path);
  
  if (!path) {
      swalService.showError({
          icon: "error",
          title: "Error!",
          text: "Failed to update Document Status",
          timer: 1500,
      });
      return;
  }
  const multipart= true;
  try {
      const { response, status } = await Helper.post(formData, path, multipart);
      console.log(response);
      if (response.status === 200) {
        handleSidePopUpData(dispatch, userid)
          swalService.showSuccess({
              icon: "success",
              title: "Added!",
              text:"Document uploaded successfully",
              showConfirmButton: false,
              timer: 1500,
          });
      } else {
          swalService.showError({
              icon: "error",
              title: "Error!",
              text: "Failed to upload Document",
              timer: 1500,
          });
      }
  }
  catch (error) {
    console.log(error);
      swalService.showError({
          icon: "error",
          title: "Error!",
          text: "Failed to update Document Status ! Something gone wrong!",
          timer: 1500,
      });
  }
}

export async function handleUpdateDocStatus(userid, doc_status, path_add, doc_status_column, dispatch) {
  // console.log({ doc_status_column: doc_status });

  let path = `${path_add}/${userid}`;
  // console.log(path);

  if (!path) {
      console.error("Invalid text value, no API path determined");
      return;
  }
  // console.log(doc_status);
  try {
      const { response }  = await Helper.post(
          {
              [doc_status_column]: doc_status
          }, path);
          
      if (response.success) {
        console.log(response);
        swalService.showSuccess({
            icon: "success",
            title: "Added!",
            text: "Document Status Updated successfully",
            showConfirmButton: false,
            timer: 1500,
        });
        handleSidePopUpData(dispatch, userid)
      }else{
        swalService.showError({
          icon: "error",
          title: "Error!",
          text: "Failed to update Document Status ! Something gone wrong !",
          timer: 1500,
      });
      }
  }
  catch (error) {
      swalService.showError({
          icon: "error",
          title: "Error!",
          text: "Failed to update Document Status",
          timer: 1500,
      });
  }
}

export const handleNotify = async (userid, dispatch, handle, tabclick, reason="NA") =>{
  // console.log(Boolean(reason));
  // console.log(reason);
  let path = ''
  if(tabclick === 5){
    path = `background_verification/notify_user/?id=${userid}`;
  }
  // console.log(path);
  if (!path) {
    // console.log(reason);
    // console.error("Invalid Path");
    handle()
    return;
  }

  try {
    // console.log(path);
    if(tabclick === 5){
      const { response }  = await Helper.post({},path);

      console.log(response);

      if (response.message==="Consent request email sent to user") {
        
        swalService.showSuccess({
            icon: "success",
            title: "Added!",
            text: "Consent request email sent to user successfully",
            showConfirmButton: false,
            timer: 1500,
        });
        handleSidePopUpData(dispatch, userid)
        handle()
      }else{
        swalService.showError({
          icon: "error",
          title: "Error!",
          text: "Failed to update Document Status ! Something gone wrong !",
          timer: 1500,
        });
      }
    }
    else{
      // const { response }  = await Helper.post({},path);

      // console.log(response);

      // if (response.message==="Consent request email sent to user") {
        
      //   swalService.showSuccess({
      //       icon: "success",
      //       title: "Added!",
      //       text: "Consent request email sent to user successfully",
      //       showConfirmButton: false,
      //       timer: 1500,
      //   });
      //   handleSidePopUpData(dispatch, userid)
      //   handle()
      // }else{
      //   swalService.showError({
      //     icon: "error",
      //     title: "Error!",
      //     text: "Failed to update Document Status ! Something gone wrong !",
      //     timer: 1500,
      //   });
      // }
    }
  }
  catch (error) {
    console.log(error);
      swalService.showError({
          icon: "error",
          title: "Error!",
          text: "Failed to update Document Status",
          timer: 1500,
      });
  }

}