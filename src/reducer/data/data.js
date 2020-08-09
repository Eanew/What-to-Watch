import {extend} from "../../utils/common.js";

const initialState = {
  promo: {},
  films: [],
  favorites: [],
  reviews: [],
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
        dispatch(ActionCreator.loadPromo(response.data));
      });
  },

  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        dispatch(ActionCreator.loadFilms(response.data));
      });
  },

  loadFavorites: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        dispatch(ActionCreator.loadFavorites(response.data));
      });
  },

  loadReviews: (filmId) => (dispatch, getState, api) => {
    return api.get(`/comments/${filmId}`)
      .then((response) => {
        dispatch(ActionCreator.loadReviews(response.data));
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
