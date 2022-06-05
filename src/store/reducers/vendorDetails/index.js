const initialState = {
  data: null,
};

export default (state = initialState, action = {}) => {
  console.log("hi");
  switch (action.type) {
    case "SET_VENDOR_DETAILS": {
      const data = action.payload || [];
      console.log("data = ", data);
      return {
        ...initialState,
        data,
      };
    }
    default:
      return { ...state };
  }
};
