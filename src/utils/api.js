import Request from "./Request";
import config from "./config";

const apiRequest = new Request(
  () => {},
  () => {},
  () => {}
);

export const getVendorDetails = (params = {}) => {
  return apiRequest.get(config.apis.GET_VENDOR_DETAILS, params);
};

export const verifyUtrRequest = (id) => {
  return apiRequest.get(`${config.apis.VERIFY_UTR_ID}/${id}`, {});
};
