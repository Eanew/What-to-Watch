import React from "react";
import renderer from "react-test-renderer";
import MyList from "./my-list.jsx";
import {Switch, Route, Router} from "react-router-dom";
import history from "../../history.js";

import {userInfo, films} from "../../test-mock.js";

it(`Should MyListComponent render correctly`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <Switch>
          <Route exact path="">
            <MyList
              userInfo={userInfo}
              films={films}
              onFilmCardClick={() => {}}
              onLogoLinkClick={() => {}}
            />
          </Route>
        </Switch>
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
