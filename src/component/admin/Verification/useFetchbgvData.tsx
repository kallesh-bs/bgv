import useDebounce from "hooks/useDebounce";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchBgvEmployeeData } from "redux/appThunk/Admin/bgv";
import { AppThunkDispatch } from "redux/store"; // Adjust this import according to your store setup
import { IUseFetchBgvDataProps } from "utils/types";

const useFetchBgvData = ({
  query = "",
  currentPage = 1,
  openPopUp = false,
}: IUseFetchBgvDataProps = {}) => {
  const dispatch = useDispatch<AppThunkDispatch>();
  const searchQuery = useDebounce(query, 500);

  useEffect(() => {
    const fetchUserData = () => {
      if (searchQuery) {
        dispatch(fetchBgvEmployeeData(currentPage, searchQuery));
      } else {
        dispatch(fetchBgvEmployeeData(currentPage));
      }
    };
    fetchUserData();
  }, [searchQuery, currentPage, openPopUp, dispatch]);
};

export default useFetchBgvData;
