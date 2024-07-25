import useDebounce from "hooks/useDebounce";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchEmployeeData } from "redux/appThunk/Admin/employee";

const useFetchUserData = ({
  onSpotChange,
  permissionToFetch,
  query,
  currentPage,
  employeesType,
  openPopUp,
}) => {
  const dispatch = useDispatch();
  let searchQuery = useDebounce(query, 500);
  useEffect(() => {
    const fetchUserData = () => {
      if (permissionToFetch.viewAll) {
        if (searchQuery)
          dispatch(fetchEmployeeData(employeesType, currentPage, searchQuery));
        else {
          dispatch(fetchEmployeeData(employeesType, currentPage, searchQuery));
        }
      }
    };
    fetchUserData();
  }, [onSpotChange, employeesType, searchQuery, currentPage, openPopUp]);
};

export default useFetchUserData;
