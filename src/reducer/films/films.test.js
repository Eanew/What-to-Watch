import {Genre} from "../../utils/const.js";
import {MAIN_PAGE_FILMS_DISPLAY_STEP} from "../../config.js";

import {reducer, ActionType, ActionCreator} from "./films.js";

describe(`Films reducer`, () => {
  it(`Should returns initial state by default`, () => {
    expect(reducer(void 0, {})).toEqual({
      genre: Genre.ALL,
      displayedFilmsCount: MAIN_PAGE_FILMS_DISPLAY_STEP,
    });
  });

  it(`Should switch genre to Drama`, () => {
    expect(reducer({
      genre: `All`,
      displayedFilmsCount: MAIN_PAGE_FILMS_DISPLAY_STEP * 2,
    }, {
      type: ActionType.SWITCH_GENRE,
      payload: `Drama`,
    })).toEqual({
      genre: `Drama`,
      displayedFilmsCount: MAIN_PAGE_FILMS_DISPLAY_STEP,
    });
  });

  it(`Should increase displayedFilmsCount by films display step`, () => {
    expect(reducer({
      displayedFilmsCount: MAIN_PAGE_FILMS_DISPLAY_STEP,
    }, {
      type: ActionType.SHOW_MORE_FILMS,
    })).toEqual({
      displayedFilmsCount: MAIN_PAGE_FILMS_DISPLAY_STEP * 2,
    });

    expect(reducer({
      displayedFilmsCount: MAIN_PAGE_FILMS_DISPLAY_STEP * 2,
    }, {
      type: ActionType.SHOW_MORE_FILMS,
    })).toEqual({
      displayedFilmsCount: MAIN_PAGE_FILMS_DISPLAY_STEP * 3,
    });
  });
});

describe(`Films action creators`, () => {
  it(`Should switchGenre method returns correct action`, () => {
    expect(ActionCreator.switchGenre(Genre.COMEDY)).toEqual({
      type: ActionType.SWITCH_GENRE,
      payload: Genre.COMEDY,
    });
  });

  it(`Should showMoreFilms method returns correct action`, () => {
    expect(ActionCreator.showMoreFilms()).toEqual({
      type: ActionType.SHOW_MORE_FILMS,
    });
  });
});
