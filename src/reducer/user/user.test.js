import {reducer, AuthorizationStatus, ActionType, ActionCreator, Operation} from "./user.js";
import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api.js";

const api = createAPI(() => {});

describe(`User reducer`, () => {
  it(`Without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      userInfo: {},
    });
  });

  it(`Should change authorizationStatus by a given value`, () => {
    expect(reducer({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: {
        status: AuthorizationStatus.AUTH,
        userInfo: {id: 123},
      },
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
      userInfo: {id: 123},
    });

    expect(reducer({
      authorizationStatus: AuthorizationStatus.AUTH,
      userInfo: {id: 123},
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: {
        status: AuthorizationStatus.NO_AUTH,
      },
    })).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      userInfo: {},
    });

    expect(reducer({
      authorizationStatus: AuthorizationStatus.AUTH,
      userInfo: {id: 123},
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: {
        status: AuthorizationStatus.AUTH,
        userInfo: {id: 456},
      },
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
      userInfo: {id: 456},
    });

    expect(reducer({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      userInfo: {},
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: {
        status: AuthorizationStatus.NO_AUTH,
      },
    })).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      userInfo: {},
    });
  });
});

describe(`User action creators`, () => {
  it(`Should requireAuthorization method returns correct action`, () => {
    expect(ActionCreator.requireAuthorization({
      status: AuthorizationStatus.NO_AUTH,
    })).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: {
        status: AuthorizationStatus.NO_AUTH,
        userInfo: {},
      },
    });

    expect(ActionCreator.requireAuthorization({
      status: AuthorizationStatus.AUTH,
      userInfo: {id: 123},
    })).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: {
        status: AuthorizationStatus.AUTH,
        userInfo: {id: 123},
      },
    });
  });
});

describe(`User request operation`, () => {
  it(`Should make a correct API on get /login`, function () {
    const mockApi = new MockAdapter(api);
    const dispatch = jest.fn();
    const questionLoader = Operation.checkAuthorization();

    mockApi
      .onGet(`/login`)
      .reply(200, {userId: 123});

    return questionLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: {
            status: AuthorizationStatus.AUTH,
            userInfo: {userId: 123},
          },
        });
      });
  });

  it(`Should make a correct API on post /login`, function () {
    const mockApi = new MockAdapter(api);
    const dispatch = jest.fn();
    const questionLoader = Operation.login({
      email: `test.test@gmail.com`,
      password: `123#Test$`,
    });

    mockApi
      .onPost(`/login`)
      .reply(200, {userId: 123});

    return questionLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: {
            status: AuthorizationStatus.AUTH,
            userInfo: {userId: 123},
          },
        });
      });
  });
});
