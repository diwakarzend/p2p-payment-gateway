export default {
  // API_BASEPATH_STAGING: "https://vendor-apiservice.pay2mobiles.com:8443",
  // API_BASEPATH_PROD: "https://vendor-apiservice.pay2mobiles.com:8443",
  API_BASEPATH_STAGING: "https://service-api.digitpay.pro",
  API_BASEPATH_PROD: "https://service-api.digitpay.pro",
  apis: {
    LOGIN_URL: "/api/authenticateByHash",
    GET_VENDOR_DETAILS: "/api/ptp/vendor-details",
    VERIFY_UTR_ID: "/api/merchant/verifyUTR",
    PTP_BY_MERCHANT_ID: "/api/ptp/ptp-details",
    PTP_AUTH_BY_HASH: "/api/authenticateByHash",
    GET_DYNAMIC_QR_CODE: "/api/qr/transaction",
    GET_DYNAMIC_QR_STATUS: "/api/merchant/verifyOnlyByOrderId",
  },
};
