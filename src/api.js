import axios from "axios";

import {showCustomAlert} from "./utils/api.js";

const BASE_URL = `https://4.react.pages.academy/wtw`;

const REQUEST_TIMEOUT = 5000;

const Error = {
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

      default:
        showCustomAlert(`Ошибка соединения. Код ошибки: ${error.response.status}`);
        throw error;
    }
  };

  api.interceptors.response.use(onSuccess, onError);

  return api;
};
