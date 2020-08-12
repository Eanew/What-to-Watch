import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import {Switch, Route, Router} from "react-router-dom";
import history from "../../history.js";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

const store = configureStore([]);

import {film, userInfo, mockStore} from "../../test-mock.js";

it(`Should MainComponent render correctly`, () => {
  const tree = renderer.create(
      <Provider store={store(mockStore)}>
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
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
