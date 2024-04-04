import { SET_FILES, STORE_FILE_DATA} from "redux/actions/types";

const initialState = {
  files: null,
  fileData: [],
};

const employeeImportReducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_FILES:
    return {
      ...state,
      files: action.payload,
    };
  case STORE_FILE_DATA:

    return {
      ...state,
      fileData: action.payload,
    };
  default:
    return state;
  }
};

export default employeeImportReducer;
