import {extend} from "../../utils/common.js";

import UserAdapter from "../../adapters/user-info.js";

const initialState = {
  userInfo: {
    isAuthorized: false,
  },

  isFetching: false,
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  LOAD_REQUEST: `LOAD_REQUEST`,
  LOAD_SUCCESS: `LOAD_SUCCESS`,
  LOAD_ERROR: `LOAD_ERROR`,
};

const Operation = {
  checkAuthorization: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((response) => {
        dispatch(ActionCreator.requireAuthorization(extend({
          isAuthorized: true,
        }, UserAdapter.parse(response.data))));
      });
  },

  login: (authData) => (dispatch, getState, api) => {
    dispatch(ActionCreator.loadRequest());

    return api.post(`/login`, UserAdapter.toPost(authData))
      .then((response) => {
        dispatch(ActionCreator.requireAuthorization(extend({
          isAuthorized: true,
        }, UserAdapter.parse(response.data))));

        dispatch(ActionCreator.loadSuccess());
      })
      .catch((error) => {
        dispatch(ActionCreator.loadError());
        throw error;
      });
  },
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

  requireAuthorization: (userInfo) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: userInfo,
  }),
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

    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        userInfo: action.payload,
      });

    default:
      return state;
  }
};

export {ActionType, Operation, ActionCreator, reducer};
