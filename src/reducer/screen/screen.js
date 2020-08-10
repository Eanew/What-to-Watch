import {Screen, MovieTab} from "../../utils/const.js";
import {extend} from "../../utils/common.js";

const initialState = {
  screen: Screen.MAIN,
  lastScreen: Screen.MAIN,
  currentFilm: null,
  movieTab: MovieTab.OVERVIEW,
};

const ActionType = {
  SET_MAIN_PAGE_SCREEN: `SET_MAIN_PAGE_SCREEN`,
  SET_MOVIE_PAGE_SCREEN: `SET_MOVIE_PAGE_SCREEN`,
  SET_PLAYER_SCREEN: `SET_PLAYER_SCREEN`,
  SWITCH_MOVIE_TAB: `SWITCH_MOVIE_TAB`,
};

const ActionCreator = {
  setMainPageScreen: () => ({
    type: ActionType.SET_MAIN_PAGE_SCREEN,
  }),

  setMoviePageScreen: (currentFilm) => ({
    type: ActionType.SET_MOVIE_PAGE_SCREEN,
    payload: currentFilm,
  }),

  setPlayerScreen: () => ({
    type: ActionType.SET_PLAYER_SCREEN,
  }),

  switchMovieTab: (tab) => ({
    type: ActionType.SWITCH_MOVIE_TAB,
    payload: tab,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_MAIN_PAGE_SCREEN:
      return extend(state, {
        screen: Screen.MAIN,
        lastScreen: Screen.MAIN,
      });

    case ActionType.SET_MOVIE_PAGE_SCREEN:
      return extend(state, {
        screen: Screen.MOVIE_PAGE,
        lastScreen: Screen.MOVIE_PAGE,
        currentFilm: action.payload || state.currentFilm,
        movieTab: state.screen === Screen.PLAYER ? state.movieTab : MovieTab.OVERVIEW,
      });

    case ActionType.SET_PLAYER_SCREEN:
      return extend(state, {
        screen: Screen.PLAYER,
      });

    case ActionType.SWITCH_MOVIE_TAB:
      return extend(state, {
        movieTab: action.payload,
      });

    default:
      return state;
  }
};

export {reducer, ActionType, ActionCreator};
