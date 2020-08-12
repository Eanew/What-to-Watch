import React from "react";
import renderer from "react-test-renderer";
import SignIn from "./sign-in.jsx";
import {Switch, Route, Router} from "react-router-dom";
import history from "../../history.js";

it(`Should SignInComponent render correctly`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <Switch>
          <Route exact path="">
            <SignIn
              onLogoLinkClick={() => {}}
              onSubmit={() => {}}
            />
          </Route>
        </Switch>
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
