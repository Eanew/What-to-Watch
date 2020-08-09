import React from "react";
import renderer from "react-test-renderer";
import MoviePage from "./movie-page.jsx";
import Reviews from "../reviews/reviews.jsx";

import {MovieTab} from "../../utils/const.js";

import {film, films, reviews} from "../../test-mock.js";

it(`Should MoviePageComponent render Reviews`, () => {
  const renderTab = (tab) => tab === MovieTab.REVIEWS && (
    <Reviews
      reviews={reviews}
    />
  );

  const tree = renderer.create(
      <MoviePage
        film={film}
        currentTab={MovieTab.REVIEWS}
        films={films}
        onPlayButtonClick={() => {}}
        onTabClick={() => {}}
        renderTab={renderTab}
        onFilmCardClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
