import {reducer, ActionType, ActionCreator, Operation} from "./user.js";
import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api.js";

const api = createAPI(() => {});

describe(`User reducer`, () => {
  it(`Without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      userInfo: {
        isAuthorized: false,
      },
    });
  });

  it(`Should change authorizationStatus by a given value`, () => {
    expect(reducer({
      userInfo: {
        isAuthorized: false,
      },
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: {
        isAuthorized: true,
        id: 123,
      },
    })).toEqual({
      userInfo: {
        isAuthorized: true,
        id: 123,
      },
    });

    expect(reducer({
      userInfo: {
        isAuthorized: true,
        id: 123,
      },
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: {
        isAuthorized: false,
      },
    })).toEqual({
      userInfo: {
        isAuthorized: false,
      },
    });

    expect(reducer({
      userInfo: {
        isAuthorized: true,
        id: 123,
      }
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: {
        isAuthorized: true,
        id: 456,
      },
    })).toEqual({
      userInfo: {
        isAuthorized: true,
        id: 456,
      },
    });

    expect(reducer({
      userInfo: {
        isAuthorized: false,
      },
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: {
        isAuthorized: false,
      },
    })).toEqual({
      userInfo: {
        isAuthorized: false,
      },
    });
  });
});

describe(`User action creators`, () => {
  it(`Should requireAuthorization method returns correct action`, () => {
    expect(ActionCreator.requireAuthorization({
      isAuthorized: false,
    })).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: {
        isAuthorized: false,
      },
    });

    expect(ActionCreator.requireAuthorization({
      isAuthorized: true,
      id: 123,
    })).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: {
        isAuthorized: true,
        id: 123,
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
      .reply(200, {
        "id": 123,
        "email": `test@test.test`,
        "name": `testTest`,
        "avatar_url": `/url`,
      });

    return questionLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: {
            isAuthorized: true,
            avatar: `https://4.react.pages.academy/url`,
            id: 123,
            email: `test@test.test`,
            name: `testTest`,
          },
        });
      });
  });

  it(`Should make a correct API on post /login`, function () {
    const mockApi = new MockAdapter(api);
    const dispatch = jest.fn();
    const questionLoader = Operation.login({
      email: `test@test.test`,
      password: `123#Test$`,
    });

    mockApi
      .onPost(`/login`)
      .reply(200, {
        "id": 123,
        "email": `test@test.test`,
        "name": `testTest`,
        "avatar_url": `/url`,
      });

    return questionLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: {
            isAuthorized: true,
            avatar: `https://4.react.pages.academy/url`,
            id: 123,
            email: `test@test.test`,
            name: `testTest`,
          },
        });
      });
  });
});
