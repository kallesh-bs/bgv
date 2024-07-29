import apiUrl from "api/apiUrl";
import Helper from "api/Helper";
import { userProfileData } from "redux/actions/action";
import { formatBVUserData } from "redux/selector/Admin/client";
import swalService from "utils/SwalServices";


export const fetchVerficationUserData = (id , setHandleLoading , setHandlePopup ) => async (dispatch) => {
    try {
        setHandleLoading(true);
        let formated = {};
      const path = `${apiUrl.verficationPath}/${id}`;
      const { response , status } = await Helper.get(path);
        if (response?.background_verification?.hold) {
          formated = formatBVUserData(response);
        }else{
          formated = {
            userData: response?.background_verification
          }
        }
 
      if (status === 200 || status === 201) {
        dispatch(userProfileData(formated));
        
        setHandleLoading(false)} }catch (error) {
      swalService.showError({ title: "Error during fetch data!" });
      setHandlePopup(false)
      setHandleLoading(false)
    }
  };
  

  export const sendNotify = async (id , setIsLoading , setNotifyPopUp)=>{
    setIsLoading(true)
    try {
        const path =`background_verification/notify_user/?id=${id}`;
        const  {status} = await Helper.post({},path)
      
        if (status === 200) {
          swalService.showSuccess({ title: "Notify Successfully" })
          setIsLoading(false)
          setNotifyPopUp(false)
        }
        
    } catch (error) {
        swalService.showError({ title: "Error during fetch data!" });
    }

  }