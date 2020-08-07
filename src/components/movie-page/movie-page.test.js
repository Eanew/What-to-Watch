import React from "react";
import renderer from "react-test-renderer";
import MoviePage from "./movie-page.jsx";

import {film, films, reviews} from "../../mocks/test-mock.js";

it(`Should MoviePageComponent render correctly`, () => {
  const tree = renderer.create(
      <MoviePage
        film={film}
        reviews={reviews}
        films={films}
        onPlayButtonClick={() => {}}
        onFilmCardClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
