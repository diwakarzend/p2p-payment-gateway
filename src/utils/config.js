export default {
  API_BASEPATH_STAGING: "https://vendor-apiservice.pay2mobiles.com:8443",
  API_BASEPATH_PROD: "https://vendor-apiservice.pay2mobiles.com:8443",
  apis: {
    LOGIN_URL: "/api/authenticateByHash",
    GET_VENDOR_DETAILS: "/api/ptp/vendor-details",
    VERIFY_UTR_ID: "/api/merchant/verifyUTR",
    PTP_BY_MERCHANT_ID: "/api/ptp/ptp-details",
    PTP_AUTH_BY_HASH: "/api/authenticateByHash",
  },
};
