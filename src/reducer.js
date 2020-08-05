import {extend} from "./utils/common.js";
import {Screen, Genre} from "./utils/const.js";
import {getFilmsByGenre} from "./utils/genre.js";
import {MAIN_PAGE_FILMS_DISPLAY_STEP} from "./config.js";

import films from "./mocks/films.js";
import reviews from "./mocks/reviews.js";

const initialState = {
  screen: Screen.MAIN,
  genre: Genre.ALL,
  promo: films[0],
  films,
  displayedFilms: films.slice(0, MAIN_PAGE_FILMS_DISPLAY_STEP),
  reviews,
};

export const ActionType = {
  SET_MAIN_PAGE_SCREEN: `SET_MAIN_PAGE_SCREEN`,
  SET_MOVIE_PAGE_SCREEN: `SET_MOVIE_PAGE_SCREEN`,
  SWITCH_GENRE: `SWITCH_GENRE`,
  SHOW_MORE_FILMS: `SHOW_MORE_FILMS`,
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

  showMoreFilms: () => ({
    type: ActionType.SHOW_MORE_FILMS,
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
        displayedFilms: getFilmsByGenre(state.films, action.payload)
          .slice(0, MAIN_PAGE_FILMS_DISPLAY_STEP),
      });

    case ActionType.SHOW_MORE_FILMS:
      return extend(state, {
        displayedFilms: getFilmsByGenre(state.films, state.genre)
          .slice(0, (state.displayedFilms.length + MAIN_PAGE_FILMS_DISPLAY_STEP)),
      });

    default:
      return state;
  }
};
