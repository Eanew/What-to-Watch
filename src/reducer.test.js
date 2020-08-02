import {Screen, Genre} from "./utils/const.js";

import {reducer, ActionType, ActionCreator} from "./reducer.js";

import {films} from "./mocks/test-mock.js";

describe(`Reducer`, () => {
  it(`Should returns initial state by default`, () => {
    expect(reducer(void 0, {})).toMatchObject({
      screen: Screen.MAIN,
      currentFilm: null,
      genre: Genre.ALL,
    });
  });

  it(`Should set current film to a given value`, () => {
    expect(reducer({
      screen: Screen.MAIN,
      currentFilm: null,
    }, {
      type: ActionType.SET_MOVIE_PAGE_SCREEN,
      payload: films[0],
    })).toEqual({
      screen: Screen.MOVIE_PAGE,
      currentFilm: films[0],
    });
  });

  it(`Should switch current film`, () => {
    expect(reducer({
      screen: Screen.MOVIE_PAGE,
      currentFilm: films[0],
    }, {
      type: ActionType.SET_MOVIE_PAGE_SCREEN,
      payload: films[1],
    })).toEqual({
      screen: Screen.MOVIE_PAGE,
      currentFilm: films[1],
    });
  });

  it(`Should set main screen`, () => {
    expect(reducer({
      screen: Screen.MOVIE_PAGE,
      currentFilm: films[0],
    }, {
      type: ActionType.SET_MAIN_PAGE_SCREEN,
    })).toEqual({
      screen: Screen.MAIN,
      currentFilm: null,
    });
  });

  it(`Should filter films by genre Drama`, () => {
    expect(reducer({
      genre: `All`,
      films,
      filteredFilms: films,
    }, {
      type: ActionType.SWITCH_GENRE,
      payload: `Drama`,
    })).toEqual({
      genre: `Drama`,
      films,
      filteredFilms: films.filter((film) => film.genre === `Drama`),
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
    expect(ActionCreator.setMoviePageScreen(films[0])).toEqual({
      type: ActionType.SET_MOVIE_PAGE_SCREEN,
      payload: films[0],
    });
  });

  it(`Should switchGenre method returns correct action`, () => {
    expect(ActionCreator.switchGenre(Genre.COMEDY)).toEqual({
      type: ActionType.SWITCH_GENRE,
      payload: Genre.COMEDY,
    });
  });
});
