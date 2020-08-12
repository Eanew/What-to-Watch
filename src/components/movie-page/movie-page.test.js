import React from "react";
import renderer from "react-test-renderer";
import {MoviePage} from "./movie-page.jsx";
import {Switch, Route, Router} from "react-router-dom";
import history from "../../history.js";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

const store = configureStore([]);

import {userInfo, film, films, reviews, mockStore} from "../../test-mock.js";

import {MovieTab} from "../../utils/const.js";

it(`Should MoviePageComponent render correctly`, () => {
  const tree = renderer.create(
      <Provider store={store(mockStore)}>
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
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
