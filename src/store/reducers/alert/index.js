import { REMOVE_ALERT, SET_ALERT } from "../../actions/alert";

const initialState = {
  message: "",
  status: "",
  timeout: ""
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case REMOVE_ALERT:
      return {
        ...initialState
      };
    case SET_ALERT: {
      const data = action.payload || null;
      return {
        ...initialState,
        ...data
      };
    }
    default:
      return { ...state };
  }
};
