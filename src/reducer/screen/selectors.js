import NameSpace from "../name-space.js";

const NAME_SPACE = NameSpace.SCREEN;

export const getCurrentScreen = (state) => state[NAME_SPACE].screen;
export const getLastScreen = (state) => state[NAME_SPACE].lastScreen;
export const getCurrentTab = (state) => state[NAME_SPACE].movieTab;

export default {
  getCurrentScreen,
  getLastScreen,
  getCurrentTab,
};
