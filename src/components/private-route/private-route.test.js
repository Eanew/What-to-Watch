import React from "react";
import renderer from "react-test-renderer";
import {PrivateRoute} from "./private-route.jsx";
import {Switch, Router} from "react-router-dom";
import history from "../../history.js";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

const store = configureStore([]);

import {userInfo, mockStore} from "../../test-mock.js";

it(`Should PrivateRouteComponent render correctly`, () => {
  const tree = renderer.create(
      <Provider store={store(mockStore)}>
        <Router history={history}>
          <Switch>
            <PrivateRoute
              userInfo={userInfo}
              exact={true}
              path={`https://test-path.test`}
              render={() => {}}
            />
          </Switch>
        </Router>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
