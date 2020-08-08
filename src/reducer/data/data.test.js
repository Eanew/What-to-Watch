import {reducer, ActionType, ActionCreator} from "./data.js";

import {film, films, reviews} from "../../mocks/test-mock.js";

describe(`Data reducer`, () => {
  it(`Without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      promo: {},
      films: [],
      favorites: [],
      reviews: [],
    });
  });

  it(`Should set currentFilm to promo if currentFilm is not already set`, () => {
    expect(reducer(void 0, {
      type: ActionType.LOAD_PROMO,
      payload: film,
    })).toMatchObject({
      promo: film,
      currentFilm: film,
    });

    expect(reducer({
      promo: {},
      currentFilm: films[0],
    }, {
      type: ActionType.LOAD_PROMO,
      payload: films[1],
    })).toMatchObject({
      promo: films[1],
      currentFilm: films[0],
    });
  });

  it(`Should update films by load films`, () => {
    expect(reducer({
      films: [],
    }, {
      type: ActionType.LOAD_FILMS,
      payload: films,
    })).toMatchObject({
      films,
    });

    expect(reducer({
      films,
    }, {
      type: ActionType.LOAD_FILMS,
      payload: films.reverse(),
    })).toMatchObject({
      films: films.reverse(),
    });
  });

  it(`Should update favorites by load favorites`, () => {
    expect(reducer({
      favorites: [],
    }, {
      type: ActionType.LOAD_FAVORITES,
      payload: films,
    })).toMatchObject({
      favorites: films,
    });

    expect(reducer({
      favorites: films,
    }, {
      type: ActionType.LOAD_FAVORITES,
      payload: films.reverse(),
    })).toMatchObject({
      favorites: films.reverse(),
    });
  });

  it(`Should update reviews by load reviews`, () => {
    expect(reducer({
      reviews: [],
    }, {
      type: ActionType.LOAD_REVIEWS,
      payload: reviews,
    })).toMatchObject({
      reviews,
    });

    expect(reducer({
      reviews,
    }, {
      type: ActionType.LOAD_REVIEWS,
      payload: reviews.reverse(),
    })).toMatchObject({
      reviews: reviews.reverse(),
    });
  });
});

describe(`Data action creators`, () => {
  it(`Should loadPromo method returns correct action`, () => {
    expect(ActionCreator.loadPromo(film)).toEqual({
      type: ActionType.LOAD_PROMO,
      payload: film,
    });
  });

  it(`Should loadFilms method returns correct action`, () => {
    expect(ActionCreator.loadFilms(films)).toEqual({
      type: ActionType.LOAD_FILMS,
      payload: films,
    });
  });

  it(`Should loadFavorites method returns correct action`, () => {
    expect(ActionCreator.loadFavorites(films)).toEqual({
      type: ActionType.LOAD_FAVORITES,
      payload: films,
    });
  });

  it(`Should loadReviews method returns correct action`, () => {
    expect(ActionCreator.loadReviews(reviews)).toEqual({
      type: ActionType.LOAD_REVIEWS,
      payload: reviews,
    });
  });
});
