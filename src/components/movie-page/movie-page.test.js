import React from "react";
import renderer from "react-test-renderer";
import MoviePage from "./movie-page.jsx";
import Reviews from "../reviews/reviews.jsx";

import {Tab} from "../../utils/const.js";

import {film, films, reviews} from "../../mocks/test-mock.js";

it(`Should MoviePageComponent render Reviews`, () => {
  const renderTab = (tab) => tab === Tab.REVIEWS && (
    <Reviews
      reviews={reviews}
    />
  );

  const tree = renderer.create(
      <MoviePage
        film={film}
        currentTab={Tab.REVIEWS}
        films={films}
        onPlayButtonClick={() => {}}
        onTabClick={() => {}}
        renderTab={renderTab}
        onFilmCardClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
