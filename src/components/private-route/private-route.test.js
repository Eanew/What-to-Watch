import React from "react";
import renderer from "react-test-renderer";
import PrivateRoute from "./provate-route.jsx";

import {userInfo} from "../../test-mock.js";

it(`Should PrivateRouteComponent render correctly`, () => {
  const tree = renderer.create(
      <PrivateRoute
        userInfo={userInfo}
        exact={true}
        path={`https://test-path.test`}
        render={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
