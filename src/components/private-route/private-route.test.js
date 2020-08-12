import React from "react";
import renderer from "react-test-renderer";
import {PrivateRoute} from "./private-route.jsx";
import {Switch, Router} from "react-router-dom";
import history from "../../history.js";

import {userInfo} from "../../test-mock.js";

it(`Should PrivateRouteComponent render correctly`, () => {
  const tree = renderer.create(
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
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
