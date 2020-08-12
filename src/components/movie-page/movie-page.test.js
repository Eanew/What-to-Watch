import React from "react";
import renderer from "react-test-renderer";
import {MoviePage} from "./movie-page.jsx";
import {Switch, Route, Router} from "react-router-dom";
import history from "../../history.js";

import {MovieTab} from "../../utils/const.js";

import {userInfo, film, films, reviews} from "../../test-mock.js";

it(`Should MoviePageComponent render correctly`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <Switch>
          <Route exact path="">
            <MoviePage
              film={film}
              currentTab={MovieTab.REVIEWS}
              userInfo={userInfo}
              similarFilms={films}
              reviews={reviews}
              renderTab={() => {}}
              onPlayButtonClick={() => {}}
              onTabClick={() => {}}
              onFilmCardClick={() => {}}
              onLogoLinkClick={() => {}}
              onSignInLinkClick={() => {}}
              onAddReviewClick={() => {}}
              onMyListButtonClick={() => {}}
              onAvatarClick={() => {}}
            />
          </Route>
        </Switch>
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
