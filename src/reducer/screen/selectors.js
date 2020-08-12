import {createSelector} from "reselect";
import NameSpace from "../name-space.js";

import {Screen, MovieTab} from "../../utils/const.js";

const NAME_SPACE = NameSpace.SCREEN;

export const getCurrentScreen = (state) => state[NAME_SPACE].screen;
export const getLastScreen = (state) => state[NAME_SPACE].lastScreen;
export const getCurrentTab = (state) => state[NAME_SPACE].movieTab;

export const getNewMovieTab = createSelector(
    getCurrentScreen,
    getCurrentTab,

    (currentScreen, currentTab) => {
      if (currentScreen === Screen.REVIEW) {
        return MovieTab.REVIEWS;
      } else if (currentScreen === Screen.MAIN && currentScreen === Screen.MOVIE_PAGE) {
        return MovieTab.OVERVIEW;
      } else {
        return currentTab;
      }
    }
);

export default {
  getCurrentScreen,
  getLastScreen,
  getCurrentTab,
  getNewMovieTab,
};
