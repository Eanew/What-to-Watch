import {Genre} from "../../utils/const.js";
import {extend} from "../../utils/common.js";

import {MAIN_PAGE_FILMS_DISPLAY_STEP} from "../../config.js";

const initialState = {
  genre: Genre.ALL,
  displayedFilmsCount: MAIN_PAGE_FILMS_DISPLAY_STEP,
};

const ActionType = {
  SWITCH_GENRE: `SWITCH_GENRE`,
  SHOW_MORE_FILMS: `SHOW_MORE_FILMS`,
};

const ActionCreator = {
  switchGenre: (genre) => ({
    type: ActionType.SWITCH_GENRE,
    payload: genre,
  }),

  showMoreFilms: () => ({
    type: ActionType.SHOW_MORE_FILMS,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SWITCH_GENRE:
      return extend(state, {
        genre: action.payload,
        displayedFilmsCount: MAIN_PAGE_FILMS_DISPLAY_STEP,
      });

    case ActionType.SHOW_MORE_FILMS:
      return extend(state, {
        displayedFilmsCount: state.displayedFilmsCount + MAIN_PAGE_FILMS_DISPLAY_STEP,
      });

    default:
      return state;
  }
};

export {reducer, ActionType, ActionCreator};
