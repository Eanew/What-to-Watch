import {extend} from "../../utils/common.js";

import FilmAdapter from "../../adapters/film.js";
import ReviewAdapter from "../../adapters/review.js";

const initialState = {
  promo: null,
  films: null,
  favorites: null,
  reviews: null,
};

const ActionType = {
  LOAD_PROMO: `LOAD_PROMO`,
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_FAVORITES: `LOAD_FAVORITES`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
};

const ActionCreator = {
  loadPromo: (promo) => ({
    type: ActionType.LOAD_PROMO,
    payload: promo,
  }),

  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films,
  }),

  loadFavorites: (favorites) => ({
    type: ActionType.LOAD_FAVORITES,
    payload: favorites,
  }),

  loadReviews: (reviews) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: reviews,
  }),
};

const Operation = {
  loadPromo: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then((response) => {
        const promo = FilmAdapter.parse(response.data);
        dispatch(ActionCreator.loadPromo(promo));
      });
  },

  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        const films = FilmAdapter.parse(response.data);
        dispatch(ActionCreator.loadFilms(films));
      });
  },

  loadFavorites: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        const favorites = FilmAdapter.parse(response.data);
        dispatch(ActionCreator.loadFavorites(favorites));
      });
  },

  loadReviews: (filmId) => (dispatch, getState, api) => {
    return api.get(`/comments/${filmId}`)
      .then((response) => {
        const reviews = ReviewAdapter.parse(response.data);
        dispatch(ActionCreator.loadReviews(reviews));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_PROMO:
      return extend(state, {
        promo: action.payload,
      });

    case ActionType.LOAD_FILMS:
      return extend(state, {
        films: action.payload,
      });

    case ActionType.LOAD_FAVORITES:
      return extend(state, {
        favorites: action.payload,
      });

    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        reviews: action.payload,
      });

    default:
      return state;
  }
};

export {reducer, ActionType, ActionCreator, Operation};
