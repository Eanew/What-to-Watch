import {extend} from "./utils/common.js";
import {Screen} from "./utils/const.js";

const initialState = {
  screen: Screen.MAIN,
  currentFilm: null,
};

export const ActionType = {
  SET_MAIN_PAGE_SCREEN: `SET_MAIN_PAGE_SCREEN`,
  SET_MOVIE_PAGE_SCREEN: `SET_MOVIE_PAGE_SCREEN`,
};

export const ActionCreator = {
  setMainPageScreen: () => ({
    type: ActionType.SET_MAIN_PAGE_SCREEN,
  }),

  setMoviePageScreen: (currentFilm) => ({
    type: ActionType.SET_MOVIE_PAGE_SCREEN,
    payload: currentFilm,
  }),
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_MAIN_PAGE_SCREEN:
      return extend(state, {
        screen: Screen.MAIN,
        currentFilm: null,
      });

    case ActionType.SET_MOVIE_PAGE_SCREEN:
      return extend(state, {
        screen: Screen.MOVIE_PAGE,
        currentFilm: action.payload,
      });

    default:
      return state;
  }
};
