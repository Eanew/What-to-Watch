import {reducer, ActionType, ActionCreator, Operation} from "./data.js";
import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api.js";

import {film, films, reviews} from "../../test-mock.js";

const api = createAPI(() => {});

describe(`Data reducer`, () => {
  it(`Without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      promo: {},
      films: [],
      favorites: [],
      reviews: [],
    });
  });

  it(`Should update promo by load promo`, () => {
    expect(reducer(void 0, {
      type: ActionType.LOAD_PROMO,
      payload: film,
    })).toMatchObject({
      promo: film,
    });

    expect(reducer({
      promo: films[0],
    }, {
      type: ActionType.LOAD_PROMO,
      payload: films[1],
    })).toMatchObject({
      promo: films[1],
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

describe(`Data request operation`, () => {
  it(`Should make a correct API call to /films/promo`, function () {
    const mockApi = new MockAdapter(api);
    const dispatch = jest.fn();
    const questionLoader = Operation.loadPromo();

    mockApi
      .onGet(`/films/promo`)
      .reply(200, film);

    return questionLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_PROMO,
          payload: film,
        });
      });
  });

  it(`Should make a correct API call to /films`, function () {
    const mockApi = new MockAdapter(api);
    const dispatch = jest.fn();
    const questionLoader = Operation.loadFilms();

    mockApi
      .onGet(`/films`)
      .reply(200, films);

    return questionLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FILMS,
          payload: films,
        });
      });
  });

  it(`Should make a correct API call to /favorite`, function () {
    const mockApi = new MockAdapter(api);
    const dispatch = jest.fn();
    const questionLoader = Operation.loadFavorites();

    mockApi
      .onGet(`/favorite`)
      .reply(200, films);

    return questionLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITES,
          payload: films,
        });
      });
  });

  it(`Should make a correct API call to /comments/123`, function () {
    const mockApi = new MockAdapter(api);
    const dispatch = jest.fn();
    const questionLoader = Operation.loadReviews(123);

    mockApi
      .onGet(`/comments/123`)
      .reply(200, reviews);

    return questionLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: reviews,
        });
      });
  });
});
