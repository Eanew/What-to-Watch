import React from "react";
import renderer from "react-test-renderer";
import MoviePage from "./movie-page.jsx";

import {MovieTab} from "../../utils/const.js";

import {userInfo, film, films, reviews} from "../../test-mock.js";

it(`Should MoviePageComponent render correctly`, () => {
  const tree = renderer.create(
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
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
