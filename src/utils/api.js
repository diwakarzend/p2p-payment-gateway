import Request from "./Request";
import config from "./config";

const apiRequest = new Request(
  () => {},
  () => {},
  () => {}
);

export const loginRequest = (params) => {
  return apiRequest.get(
    `${config.apis.LOGIN_URL}?hash=${params.hash}&amount=${params.amount}&clientId=${params.clientId}`
  );
};

export const getVendorDetails = (params = {}) => {
  return apiRequest.get(config.apis.GET_VENDOR_DETAILS, params);
};

export const getAllPtpsByMerchantId = (id) => {
  return apiRequest.get(`${config.apis.PTP_BY_MERCHANT_ID}/${id}`);
};
export const verifyUtrRequest = (id) => {
  return apiRequest.get(`${config.apis.VERIFY_UTR_ID}/${id}`, {});
};

// amount,
// txnType,
// custName,
// clientId,
// hash,
