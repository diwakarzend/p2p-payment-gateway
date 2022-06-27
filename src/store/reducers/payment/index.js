import { REMOVE_ALERT, SET_ALERT } from "../../actions/alert";

const initialState = {
  amount: 0,
  fee: 0,
  totalAmount: 0,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case "SET_PAYMENT_OBJECT":
      {
        const data = action.payload || null;
        return {
          ...initialState,
          ...data,
        };
      }
      return {
        ...initialState,
      };
    default:
      return { ...state };
  }
};
