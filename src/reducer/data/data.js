import {extend} from "../../utils/common.js";

import FilmAdapter from "../../adapters/film.js";
import ReviewAdapter from "../../adapters/review.js";

const initialState = {
  promo: null,
  films: null,
  favorites: null,
  reviews: null,
  isFetching: false,
};

const ActionType = {
  LOAD_REQUEST: `LOAD_REQUEST`,
  LOAD_SUCCESS: `LOAD_SUCCESS`,
  LOAD_ERROR: `LOAD_ERROR`,
  LOAD_PROMO: `LOAD_PROMO`,
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_FAVORITES: `LOAD_FAVORITES`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
};

const ActionCreator = {
  loadRequest: () => ({
    type: ActionType.LOAD_REQUEST,
  }),

  loadSuccess: () => ({
    type: ActionType.LOAD_SUCCESS,
  }),

  loadError: () => ({
    type: ActionType.LOAD_ERROR,
  }),

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
    dispatch(ActionCreator.loadRequest());

    return api.get(`/films/promo`)
      .then((response) => {
        const promo = FilmAdapter.parse(response.data);
        dispatch(ActionCreator.loadPromo(promo));
        dispatch(ActionCreator.loadSuccess());
      })
      .catch((error) => {
        dispatch(ActionCreator.loadError());
        throw error;
      });
  },

  loadFilms: () => (dispatch, getState, api) => {
    dispatch(ActionCreator.loadRequest());

    return api.get(`/films`)
      .then((response) => {
        const films = FilmAdapter.parse(response.data);
        dispatch(ActionCreator.loadFilms(films));
        dispatch(ActionCreator.loadSuccess());
      })
      .catch((error) => {
        dispatch(ActionCreator.loadError());
        throw error;
      });
  },

  loadFavorites: () => (dispatch, getState, api) => {
    dispatch(ActionCreator.loadRequest());

    return api.get(`/favorite`)
      .then((response) => {
        const favorites = FilmAdapter.parse(response.data);
        dispatch(ActionCreator.loadFavorites(favorites));
        dispatch(ActionCreator.loadSuccess());
      })
      .catch((error) => {
        dispatch(ActionCreator.loadError());
        throw error;
      });
  },

  loadReviews: (filmId) => (dispatch, getState, api) => {
    dispatch(ActionCreator.loadRequest());
    dispatch(ActionCreator.loadReviews(null));

    return api.get(`/comments/${filmId}`)
      .then((response) => {
        const reviews = ReviewAdapter.parse(response.data);
        dispatch(ActionCreator.loadReviews(reviews));
        dispatch(ActionCreator.loadSuccess());
      })
      .catch((error) => {
        dispatch(ActionCreator.loadError());
        throw error;
      });
  },

  postReview: (review, filmId) => (dispatch, getState, api) => {
    dispatch(ActionCreator.loadRequest());

    return api.post(`/comments/${filmId}`, ReviewAdapter.toPost(review))
      .then((response) => {
        const reviews = ReviewAdapter.parse(response.data);
        dispatch(ActionCreator.loadReviews(reviews));
        dispatch(ActionCreator.loadSuccess());
      })
      .catch((error) => {
        dispatch(ActionCreator.loadError());
        throw error;
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_REQUEST:
      return extend(state, {
        isFetching: true,
      });

    case ActionType.LOAD_SUCCESS:
      return extend(state, {
        isFetching: false,
      });

    case ActionType.LOAD_ERROR:
      return extend(state, {
        isFetching: false,
      });

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
