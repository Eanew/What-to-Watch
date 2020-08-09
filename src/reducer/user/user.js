import {extend} from "../../utils/common.js";

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
};

const ActionCreator = {
  requireAuthorization: ({status, userInfo}) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: {
      status,
      userInfo,
    },
  }),
};

const Operation = {
  checkAuthorization: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((response) => {
        dispatch(ActionCreator.requireAuthorization({
          status: AuthorizationStatus.AUTH,
          userInfo: response.data,
        }));
      });
  },

  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.login,
      password: authData.password,
    })
      .then((response) => {
        dispatch(ActionCreator.requireAuthorization({
          status: AuthorizationStatus.AUTH,
          userInfo: response.data,
        }));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });

    default:
      return state;
  }
};

export {reducer, AuthorizationStatus, ActionType, ActionCreator, Operation};
