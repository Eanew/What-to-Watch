import {BASE_URL} from "../api.js";

const pathName = BASE_URL.split(`/`).pop();

export default {
  parse: (raw) => ({
    id: raw[`id`],
    name: raw[`name`],
    email: raw[`email`],
    avatar: BASE_URL.replace(`/${pathName}`, raw[`avatar_url`]),
  }),

  toPost: (authData) => ({
    "email": authData.email,
    "password": authData.password,
  }),
};
