import axios from "axios";
import { getAuthToken, userLogout } from "../utils/common";
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
    const headers = {
      Authorization: getAuthToken(),
      "api-Authorization": getAuthToken("api-Authorization"),
    };

    // if (process.env.NODE_ENV === "development") {
    //   headers.frontEnv = "local";
    // }

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
        console.log("no auth");
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
