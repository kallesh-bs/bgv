import useDebounce from "hooks/useDebounce";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchBgvEmployeeData } from "redux/appThunk/Admin/bgv";

const useFetchbgvData = ({
  query = "",
  currentPage = 1,
  openPopUp = false,
} = {}) => {
  const dispatch = useDispatch();
  let searchQuery = useDebounce(query, 500);
  console.log("calling bgv all data");

  useEffect(() => {
    const fetchUserData = () => {
      if (searchQuery) {
        dispatch(fetchBgvEmployeeData(currentPage, searchQuery));
      } else {
        dispatch(fetchBgvEmployeeData(currentPage));
      }
    };
    fetchUserData();
  }, [searchQuery, currentPage, openPopUp]);
};

export default useFetchbgvData;
