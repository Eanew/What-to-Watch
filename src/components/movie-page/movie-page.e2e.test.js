import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {MoviePage} from "./movie-page.jsx";
import {Switch, Route, Router} from "react-router-dom";
import history from "../../history.js";

import {MovieTab} from "../../utils/const.js";

import {userInfo, film, films, reviews} from "../../test-mock.js";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Should movie page tab link click returns tab name`, () => {
  const handleTabClick = jest.fn();
  const preventDefault = jest.fn();

  const moviePage = mount(
      <Router history={history}>
        <Switch>
          <Route exact path="">
            <MoviePage
              film={film}
              currentTab={MovieTab.OVERVIEW}
              userInfo={userInfo}
              similarFilms={films}
              reviews={reviews}
              onTabClick={handleTabClick}
              renderTab={() => {}}
              onPlayButtonClick={() => {}}
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
  );

  const tabsLinks = moviePage.find(`.movie-nav__link`);

  tabsLinks.forEach((link) => {
    link.simulate(`click`, {
      preventDefault,
    });
  });

  expect(preventDefault).toHaveBeenCalledTimes(tabsLinks.length);

  expect(handleTabClick.mock.calls[0][0]).toBe(MovieTab.OVERVIEW);
  expect(handleTabClick.mock.calls[1][0]).toBe(MovieTab.DETAILS);
  expect(handleTabClick.mock.calls[2][0]).toBe(MovieTab.REVIEWS);
});
