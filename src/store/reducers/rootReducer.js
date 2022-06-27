import { combineReducers } from "redux";
import alert from "../reducers/alert";
import payment from "../reducers/payment";
import vendorDetails from "../reducers/vendorDetails";

export default combineReducers({
  alert,
  payment,
  vendorDetails,
});
