export function setVendorDetails(obj = null) {
  return {
    type: "SET_VENDOR_DETAILS",
    payload: obj,
  };
}
