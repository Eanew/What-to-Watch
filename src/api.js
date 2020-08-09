import axios from "axios";

const BASE_URL = `https://4.react.pages.academy/wtw`;

const REQUEST_TIMEOUT = 5000;

const Error = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
};

export const createAPI = (onUnauthorized, onBadRequest) => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onError = (error) => {
    if (error.response.status === Error.UNAUTHORIZED) {
      onUnauthorized();
    } else if (error.response.status === Error.BAD_REQUEST) {
      onBadRequest();
    }

    throw error;
  };

  api.interceptors.response.use(onSuccess, onError);

  return api;
};
