import axios from "axios";
import { userLogout } from "../utils/common";
import config from "./config";

let apiBasePath = "";

if (process.env.NODE_ENV === "production") {
  apiBasePath = config.API_BASEPATH_PROD;
} else if (process.env.NODE_ENV === "staging") {
  apiBasePath = config.API_BASEPATH_STAGING;
}

console.log("apiBasePath11", apiBasePath);
// const apiBasePath = config.API_BASEPATH;
class Request {
  constructor(dispatch, successFn, errorFn) {
    this.successFn = typeof successFn === "function" ? successFn : () => {};
    this.errorFn = typeof errorFn === "function" ? errorFn : () => {};
    this.dispatch = typeof dispatch === "function" ? dispatch : () => {};
  }

  /**
   * GET axios instance and do things that are common for every request
   */
  instance() {
    const headers = {};

    // if (process.env.NODE_ENV === "development") {
    //   headers.frontEnv = "local";
    // }

    const auth =
      "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI5OTEwMTc5OTAxIiwiZXhwIjoxNjU0MzUxNzQ4fQ.4TQ8PDhPQdqclnxLajJJG6aDkJHDMyuXhyCCMvUiwe03fKGgkEyQbMzHvczn1DXhj_FKPkw2XalTpOrC6DAFdg";
    if (auth) {
      headers["api-Authorization"] =
        "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI5OTEwMTc5OTAxIiwicHJpdmlsZWdlIjoiUFRNX0FETUlOIiwiYXV0aCI6IlBUTV9QQVlPVVRfVFJBTlNBQ1RJT04sUFRNX1BBWU9VVF9TVEFUVVNfUkVQT1JULFBUTV9QQVlPVVRfTU9OVEhMWV9SRVBPUlQsUFRNX1BBWU9VVF9UUkFOU0FDVElPTl9TVU1fUkVQT1JULFBUTV9XQUxMRVRfQU1PVU5ULFBUTV9XQUxMRVRfVFJBTlNBQ1RJT05TLFBUTV9TRVJWSUNFX1RZUEVfUkVQT1JULFBUTV9VU0VSX1RZUEVfVFJBTlNBQ1RJT04sUFRNX0RFUE9TSVQsUFRNX0RFQklULFBUTV9GVU5EX1JFUVVFU1QsUFRNX0ZVTkRfQVBQUk9WRSxQVE1fRlVORF9SRUpFQ1QsUFRNX0ZVTkRfUkVRVUVTVF9MSVNULFBUTV9HRVRfUFJPRklMRSxQVE1fU0FWRV9QUk9GSUxFLFBUTV9DSEFOR0VfUEFTU1dPUkQsUFRNX0NSRUFURV9VU0VSLFBUTV9VUERBVEVfVVNFUixQVE1fR0VUX0FMTF9VU0VSLFBUTV9VU0VSX0RFVEFJTF9VU0VSX05BTUUsUFRNX0RFTEVURSxQVE1fQ1JFQVRFX1VTRVJfQ09NTUlTU0lPTixQVE1fVVBEQVRFX1BBWU9VVF9DT05GSUcsUFRNX1BBWU9VVF9SQU5HRSxQVE1fVkVORE9SX1RSQU5TQUNUSU9OX1JFUE9SVCIsImV4cCI6MTY1NDM1MTc0OH0.F0mCy3CQB9Zi1sJhP0eeD3lkffQXQw_F5XBcaK_J24Z1Zrj3I0OesHUUehe1RcVzDRKtrvMy-5GckO0qN3iKAQ";
      headers.Authorization = auth;
      headers.token = auth;
    }

    const instance = axios.create({
      baseURL: "",
      headers,
    });

    return instance;
  }

  /**
   * GET Requests
   * @param {string} url
   * @param {object} params
   */
  async get(url, params = {}) {
    try {
      const res = await this.instance().get(apiBasePath + url, params);
      const data = res.data ? res.data : null;
      const headers = res.headers ? res.headers : null;
      this.successFn(data, headers);
      return res;
    } catch (error) {
      // const data = error.hasOwnProperty('data') ? data : null;
      // const headers = error.hasOwnProperty('headers') ? headers : null;

      if (error && error.response && error.response.status === 401) {
        userLogout();
        window.location.href = "/admin";
      }
      console.log("Error => ", error);
      this.errorFn(error);
    }
  }

  /**
   * POST Requests
   * @param {string} url
   * @param {object} params
   */
  async post(url, params = {}) {
    try {
      const res = await this.instance().post(apiBasePath + url, params);
      const { data = {}, status } = res;
      this.successFn(data, status);
      return res;
    } catch (error) {
      // const {
      //   response: { data = {}, status },
      // } = error;
      //  console.log("Error => ", error.response);
      if (error && error.response && error.response.status == "401") {
        // need to check the status code for making user logout
        userLogout();
      }

      //   this.errorFn(data, status);
    }
  }

  /**
   * PUT Requests
   * @param {string} url
   * @param {object} params
   */
  async put(url, params = {}) {
    try {
      const res = await this.instance().put(apiBasePath + url, params);
      const { data = {}, status } = res;
      this.successFn(data, status);
      return res;
    } catch (error) {
      // const {
      //   response: { data = {}, status },
      // } = error;
      //  console.log("Error => ", error.response);
      if (error && error.response && error.response.status == "401") {
        // need to check the status code for making user logout
        userLogout();
      }

      //   this.errorFn(data, status);
    }
  }

  /**
   * DELETE Requests
   * @param {string} url
   * @param {object} params
   */
  async delete(url, params = {}) {
    try {
      const res = await this.instance().delete(apiBasePath + url, params);
      const { data = {}, status } = res;
      this.successFn(data, status);
      return res;
    } catch (error) {
      //handle error
    }
  }
}

export default Request;
