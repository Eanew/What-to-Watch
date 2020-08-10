import NameSpace from "../name-space.js";

const NAME_SPACE = NameSpace.USER;

export const getUserInfo = (state) => state[NAME_SPACE].userInfo;

export default {
  getUserInfo,
};
