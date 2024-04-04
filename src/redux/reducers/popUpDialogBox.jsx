const initialstate = {
  isShowDialogBox: false,
  isShowAdditionDialogBox: false,
  isShowDeductionDialogBox: false,
  isSHowOtherDialogBox: false,
  isShowDisableDialogBox: false,
  scrollBody: false,
};

export const popUpDialogBox = (state = initialstate, { type, payload }) => {
  switch (type) {
  case "SET_SHOW_DIALOG_BOX":
    return { ...state, isShowDialogBox: payload};
  case "SET_SHOW_ADDITION_DIALOG_BOX":
    return { ...state, isShowAdditionDialogBox: payload };
  case "SET_SHOW_DEDUCTION_DIALOG_BOX":
    return{ ...state, isShowDeductionDialogBox: payload };
  case "SET_SHOW_OTHER_DIALOG_BOX":
    return{ ...state, isSHowOtherDialogBox: payload };
  case "SET_DELETE_DIALOG_BOX":
    return{ ...state, isShowDisableDialogBox: payload };
  default:
    return state;
  }
};

