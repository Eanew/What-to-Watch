import {extend} from "../../utils/common.js";

import UserAdapter from "../../adapters/user-info.js";

const initialState = {
  userInfo: {
    isAuthorized: false,
  },
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
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
    return api.post(`/login`, UserAdapter.toPost(authData))
      .then((response) => {
        dispatch(ActionCreator.requireAuthorization(extend({
          isAuthorized: true,
        }, UserAdapter.parse(response.data))));
      });
  },
};

const ActionCreator = {
  requireAuthorization: (userInfo) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: userInfo,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        userInfo: action.payload,
      });

    default:
      return state;
  }
};

export {ActionType, Operation, ActionCreator, reducer};
