import axios from "axios";

const BASE_URL = `https://4.react.pages.academy/wtw`;

const REQUEST_TIMEOUT = 10 * 1000;

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
    if (error.response.status === Error.UNAUTHORIZED) {
      onUnauthorized();
    }

    throw error;
  };

  api.interceptors.response.use(onSuccess, onError);

  return api;
};
