export function setPaymentObject(obj = null) {
  //  console.log("hi");
  return {
    type: "SET_PAYMENT_OBJECT",
    payload: obj,
  };
}
