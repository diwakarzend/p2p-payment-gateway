export const REMOVE_ALERT = "REMOVE_ALERT";
export const SET_ALERT = "SET_ALERT";

export function removeAlert() {
  return {
    type: REMOVE_ALERT
  };
}

export function setAlert(alertConfig = null) {
  //  console.log("hi");
  return {
    type: SET_ALERT,
    payload: alertConfig
  };
}
