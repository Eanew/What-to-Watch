import {extend} from "./utils/common.js";
import {Screen, Genre} from "./utils/const.js";

import films from "./mocks/films.js";
import reviews from "./mocks/reviews.js";

const initialState = {
  screen: Screen.MAIN,
  genre: Genre.ALL,
  promo: films[0],
  films,
  filteredFilms: films,
  reviews,
};

export const ActionType = {
  SET_MAIN_PAGE_SCREEN: `SET_MAIN_PAGE_SCREEN`,
  SET_MOVIE_PAGE_SCREEN: `SET_MOVIE_PAGE_SCREEN`,
  SWITCH_GENRE: `SWITCH_GENRE`,
};

export const ActionCreator = {
  setMainPageScreen: () => ({
    type: ActionType.SET_MAIN_PAGE_SCREEN,
  }),

  setMoviePageScreen: (currentFilm) => ({
    type: ActionType.SET_MOVIE_PAGE_SCREEN,
    payload: currentFilm,
  }),

  switchGenre: (genre) => ({
    type: ActionType.SWITCH_GENRE,
    payload: genre,
  }),
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_MAIN_PAGE_SCREEN:
      return extend(state, {
        screen: Screen.MAIN,
      });

    case ActionType.SET_MOVIE_PAGE_SCREEN:
      return extend(state, {
        screen: Screen.MOVIE_PAGE,
        currentFilm: action.payload,
      });

    case ActionType.SWITCH_GENRE:
      return extend(state, {
        genre: action.payload,
        filteredFilms: action.payload === Genre.ALL
          ? state.films
          : state.films.filter((film) => film.genre === action.payload),
      });

    default:
      return state;
  }
};
