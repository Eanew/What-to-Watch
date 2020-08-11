import axios from "axios";

import {showCustomAlert} from "./utils/custom-alert.js";

export const BASE_URL = `https://4.react.pages.academy/wtw`;

const REQUEST_TIMEOUT = 5000;

const Error = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
};

export const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onError = (error) => {
    switch (error.response.status) {
      case Error.UNAUTHORIZED:
        onUnauthorized();
        throw error;

      case Error.BAD_REQUEST:
        showCustomAlert(`Please enter a valid data`);
        throw error;

      default:
        showCustomAlert(`Connection error. Error code: ${error.response.status}`);
        throw error;
    }
  };

  api.interceptors.response.use(onSuccess, onError);

  return api;
};
