import Request from "./Request";
import config from "./config";

const apiRequest = new Request(
  () => {},
  () => {},
  () => {}
);

export const loginRequest = (params) => {

 const param={'hash':params.hash,
              'amount':params.amount,
              'clientId':params.clientId,
              'apiKey':params.apiKey,
              'orderId':params.orderId,
              'URL':params.URL,
              'RETURN_URL':params.RETURN_URL
            }

  return apiRequest.post(
    config.apis.LOGIN_URL,param
  );
};

export const getVendorDetails = (params = {}) => {

  return apiRequest.get(config.apis.GET_VENDOR_DETAILS, params, );
};

export const getAllPtpsByMerchantId = (id) => {
  return apiRequest.get(`${config.apis.PTP_BY_MERCHANT_ID}/${id}`);
};
export const verifyUtrRequest = (id, clientId, orderId) => {
  console.log("merchantId",clientId);
  console.log("orderId",orderId);

  return apiRequest.get(`${config.apis.VERIFY_UTR_ID}/${id}/${clientId}/${orderId}`, {});
};

export const getDynamicQRCodeRequest = (amount, orderId, vendorId = "14") => {
  return apiRequest.get(`${config.apis.GET_DYNAMIC_QR_CODE}/${amount}/${orderId}/${vendorId}`, {});
}

export const getDynamicQRStatusRequest = (orderId) => {
  return apiRequest.get(`${config.apis.GET_DYNAMIC_QR_STATUS}/${orderId}`, {});
}

// amount,
// txnType,
// custName,
// clientId,
// hash,
