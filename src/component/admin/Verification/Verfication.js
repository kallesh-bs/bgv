import { useEffect, useState } from "react";
import VerficationListing from "./VerficationListing";
import apiUrl from "api/apiUrl";
import Helper from "api/Helper";
import { useDispatch, useSelector } from 'react-redux';
import { bgvAllEmpData } from "redux/actions/action";

const Verfication = () => {
  const dispatch = useDispatch();
  const [userData , setUserData] =useState() 
  const data = useSelector((state) => state.bgvReducer.employeeData);

  const [tabValue, setTabValue] = useState({
    tab: 5,
    label: "",
  });
 
  const [gridItems, setGridItems] = useState([]);

  async function getAddressCheck() {
    let path = `${apiUrl.background_verification}/`;

    // Ensure a valid path was determined
    if (!path) {
      console.error("Invalid text value, no API path determined");
      return;
    }
    try {
      const { response, status } = await Helper.get(path);
      if (status === 200 || status === 201) {
        setUserData((pev)=> (pev = response))
        dispatch(bgvAllEmpData(response));
        
      }


      let gridItemsTemp = []
      gridItemsTemp.push({ value: response['verified_count'], label: 'Verified Checks', color: "#1A8718" })
      gridItemsTemp.push({ value: response['rejected_count'], label: 'Rejected Checks', color: "#FA3232" })
      gridItemsTemp.push({ value: response['inprogress_count'], label: 'Inprogress Checks', color: "#576CA2" })
      gridItemsTemp.push({ value: response['insufficient_count'], label: 'Insufficent Checks', color: "#FF981E" })
      gridItemsTemp.push({ value: response['total_check'].length, label: 'Total Checks', color: "#67147C" })
      setGridItems(gridItemsTemp)
    }
    catch (error) {
      console.error("Error in handleAddressCheck:", error);
    }
  }

  useEffect(() => {
    getAddressCheck();
    console.log("redux data ", data);
  }, []);



  return (
    <>
      <div className="w-full h-fit flex items-center">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-2 w-full p-5">
          {gridItems?.map((item, index) => (
            <div
              key={index}
              className={`h-[8rem] w-full p-5 flex flex-col col-span-1 rounded-[20px] cursor-pointer shadow-[0px_0px_20px_0px_rgba(3,27,89,0.10)] mt-2`}
              style={{
                color: item.color,
                borderColor: item.color,
                borderWidth: tabValue.tab === index + 1 ? "1px" : "0px",
                borderStyle: tabValue.tab === index + 1 ? "solid" : "none",
              }}
              onClick={() =>
                setTabValue({
                  tab: index + 1,
                  label: item.label,
                })
              }
            >
              <div>
                <h6 className="text-bold text-[40px]  font-black">
                  {item.value}
                </h6>
              </div>
              <div className="w-full h-full flex justify-between items-end">
                <h2
                  className={`text-[16px] flex items-end ${tabValue.tab === index + 1
                    ? "underline font-normal"
                    : "font-normal"
                    }`}
                >
                  {item.label}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      {userData && <VerficationListing tabValue={tabValue} allEmpData={userData} /> }
    </>
  );
};

export default Verfication;
