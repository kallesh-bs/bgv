import Helper from "api/Helper";
import { bgvAllEmpData, bgvConfirmDialogueValue, bgvEmployeeDataById, bgvSetFilterTab, isLoading } from "redux/actions/action";
import swalService from "utils/SwalServices";
import apiUrl from "api/apiUrl";


export const fetchBgvEmployeeData =
  (currentPage, searchItem) => async (dispatch) => {
    dispatch(isLoading(true));
    const path = `background_verification?&page=${
      currentPage || 1
    } &per_page=${5} &query=${searchItem || ""}`;
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
  async (dispatch, currentPage, stype,perPage,searchQuery) => {
    dispatch(isLoading(true));
    const path = `background_verification?query=${searchQuery || ""}&page=${
      currentPage || 1
    } &per_page=${perPage} &type=${stype || ""}`;
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
  // Ensure a valid path was determined
  if (!path) {
    console.error("Invalid text value, no API path determined");
    return;
  }
  try {
    const { response, status } = await Helper.get(path);

    dispatch(bgvEmployeeDataById(response.background_verification))

    return true;
  }
  catch (error) {
    swalService.showError({ title: "Error while fetching data" });
  }
}

export async function handleFileDelete(userId, url, columnName, dispatch) {
  let path = `${apiUrl.background_verification}/remove_document/${userId}`;
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
      dispatch(bgvConfirmDialogueValue(null))
      swalService.showSuccess({
        icon: "success",
        title: "<p style='color:red'>Removed</p>",
        text: "Document deleted successfully",
        showConfirmButton: false,
        timer: 1500,
    });
    
    handleSidePopUpData(dispatch, userId)
    }
  }
  catch (error) {
    dispatch(bgvConfirmDialogueValue(null))
    swalService.showError({
      icon: "error",
      title: "Error!",
      text: "Failed to delete document",
      timer: 1500,
  });
  }
}

export const handleFileChange = async (event, userid, form_column, path_add, dispatch) => {

  let docs;

  if(event.length){
    docs = event;
  }
  else{
    const files = event.target.files === null? [] : Array.from(event.target.files);
    docs = files
  }
  
  const documents = new FormData();
  docs.forEach((file) => {
      documents.append(form_column, file);
  });

  let path = `${path_add}/${userid}`;
  
  if (!path) {
    dispatch(bgvConfirmDialogueValue(null))
      swalService.showError({
          icon: "error",
          title: "Error!",
          text: "Failed to upload document !",
          timer: 1500,
      });
      return;
  }
  const formData= true;
  try {
      const { response, status } = await Helper.post(documents,path,formData);
      if (response.status === 200) {
        dispatch(bgvConfirmDialogueValue(null))
        handleSidePopUpData(dispatch, userid)
          swalService.showSuccess({
              icon: "success",
              title: "<p style='color:green'>Uploaded</p>",
              text:"Document uploaded successfully",
              showConfirmButton: false,
              timer: 1500,
          });
      } else {
        dispatch(bgvConfirmDialogueValue(null))
          swalService.showError({
              icon: "error",
              title: "Error!",
              text: "Failed to upload document",
              timer: 1500,
          });
      }
  }
  catch (error) {
    dispatch(bgvConfirmDialogueValue(null))
    console.log(error);
      swalService.showError({
          icon: "error",
          title: "Error!",
          text: "Failed to upload document !",
          timer: 1500,
      });
  }
}

export async function handleUpdateDocStatus(userid, doc_status, path_add, doc_status_column, dispatch) {

  let path = `${path_add}/${userid}`;

  if (!path) {
      console.error("Invalid text value, no API path determined");
      return;
  }
  try {
      const { response }  = await Helper.post(
          {
              [doc_status_column]: doc_status
          }, path);
          
      if (response.success) {
        dispatch(bgvConfirmDialogueValue(null))
        swalService.showSuccess({
            icon: "success",
            title: "Added!",
            text: "Document status updated successfully",
            showConfirmButton: false,
            timer: 1500,
        });
        handleSidePopUpData(dispatch, userid)
      }else{
        dispatch(bgvConfirmDialogueValue(null))
        swalService.showError({
          icon: "error",
          title: "Error!",
          text: "Failed to update document status !",
          timer: 1500,
      });
      }
  }
  catch (error) {
    dispatch(bgvConfirmDialogueValue(null))
      swalService.showError({
          icon: "error",
          title: "Error!",
          text: "Failed to update Document Status",
          timer: 1500,
      });
  }
}

export const handleNotify = async (userid, dispatch, handle, tabclick, reason="NA") =>{
  let path = ''
  let notifyBody = {}
  
  if(tabclick === 5){
    path = `background_verification/notify_user/?id=${userid}`;
  }
  else if(tabclick === 4){
    path = `background_verification/notify_check/?id=${userid}`;
    notifyBody = {employeement_history_check_reason: reason}
  }
  else if(tabclick === 3){
    path = `background_verification/notify_check/?id=${userid}`;
    notifyBody = { address_check_reason: reason}
  }
  else if(tabclick === 2){
    path = `background_verification/notify_check/?id=${userid}`;
    notifyBody = {education_check_reason: reason}
  }
  else if(tabclick === 1){
    path = `background_verification/notify_check/?id=${userid}`;
    notifyBody = {identity_check_reason: reason}
  }
  if (!path) {
    console.log(reason);
    handle()
    return;
  }

  console.log(notifyBody);
  

  try {
    let formData = true
      const { response }  = await Helper.post(notifyBody,path);

      console.log(response);

      if (response.message==="Consent request email sent to user"
        ||response.message==='Identity check consent request email sent to user'
        ||response.message==='Education check consent request email sent to user'
        ||response.message==='Address check consent request email sent to user'
        ||response.message==='Employment history check consent request email sent to user'
      ) {
        
        swalService.showSuccess({
            icon: "success",
            title: "Notified!",
            text: "Notify email sent to user successfully",
            showConfirmButton: false,
            timer: 1500,
        });
        handleSidePopUpData(dispatch, userid)
        handle()
      }else{
        swalService.showError({
          icon: "error",
          title: "Error!",
          text: "Failed to notify user ! Something gone wrong !",
          timer: 1500,
        });
      }
  }
  catch (error) {
    console.log(error);
      swalService.showError({
          icon: "error",
          title: "Error!",
          text: "Failed to notify user!",
          timer: 1500,
      });
  }

}