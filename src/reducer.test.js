import {Screen} from "./utils/const.js";

import {reducer, ActionType, ActionCreator} from "./reducer.js";

const firstFilm = {id: 1};
const secondFilm = {id: 2};

describe(`Reducer`, () => {
  it(`Should returns initial state by default`, () => {
    expect(reducer(void 0, {})).toEqual({
      screen: Screen.MAIN,
      currentFilm: null,
    });
  });

  it(`Should set current film to a given value`, () => {
    expect(reducer({
      screen: Screen.MAIN,
      currentFilm: null,
    }, {
      type: ActionType.SET_MOVIE_PAGE_SCREEN,
      payload: firstFilm,
    })).toEqual({
      screen: Screen.MOVIE_PAGE,
      currentFilm: firstFilm,
    });
  });

  it(`Should switch current film`, () => {
    expect(reducer({
      screen: Screen.MOVIE_PAGE,
      currentFilm: firstFilm,
    }, {
      type: ActionType.SET_MOVIE_PAGE_SCREEN,
      payload: secondFilm,
    })).toEqual({
      screen: Screen.MOVIE_PAGE,
      currentFilm: secondFilm,
    });
  });

  it(`Should set main screen`, () => {
    expect(reducer({
      screen: Screen.MOVIE_PAGE,
      currentFilm: firstFilm,
    }, {
      type: ActionType.SET_MAIN_PAGE_SCREEN,
    })).toEqual({
      screen: Screen.MAIN,
      currentFilm: null,
    });
  });
});

describe(`Action creators`, () => {
  it(`Should setMainPageScreen method returns correct action`, () => {
    expect(ActionCreator.setMainPageScreen()).toEqual({
      type: ActionType.SET_MAIN_PAGE_SCREEN,
    });
  });

  it(`Should setMoviePageScreen method returns correct action`, () => {
    expect(ActionCreator.setMoviePageScreen(firstFilm)).toEqual({
      type: ActionType.SET_MOVIE_PAGE_SCREEN,
      payload: firstFilm,
    });
  });
});
