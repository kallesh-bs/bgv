const initialstate = {
  assetEdit: [],
};

export const AssetReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
  case "SET_ASSET_DATA":
    return { ...state, assetEdit: payload };
  default:
    return state;
  }
};
