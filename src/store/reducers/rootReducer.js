import { combineReducers } from "redux";
import alert from "../reducers/alert";
import payment from "../reducers/payment";

export default combineReducers({
  alert,
  payment,
});
