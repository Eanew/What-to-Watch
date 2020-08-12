import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import {Switch, Route, Router} from "react-router-dom";
import history from "../../history.js";

import {film, userInfo} from "../../test-mock.js";

it(`Should MainComponent render correctly`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <Switch>
          <Route exact path="">
            <Main
              userInfo={userInfo}
              promo={film}
              onPlayButtonClick={() => {}}
              onMyListButtonClick={() => {}}
              onSignInLinkClick={() => {}}
              onAvatarClick={() => {}}
            />
          </Route>
        </Switch>
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
