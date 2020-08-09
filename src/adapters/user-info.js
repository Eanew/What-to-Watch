export default {
  parse: (raw) => ({
    id: raw[`id`],
    name: raw[`name`],
    email: raw[`email`],
    avatar: raw[`avatar_url`],
  }),

  toPost: (authData) => ({
    "email": authData.email,
    "password": authData.password,
  }),
};
