import React from "react";
import renderer from "react-test-renderer";

import MoviePage from "../../components/movie-page/movie-page.jsx";
import withTabs from "./with-tabs.js";

import {film, films, reviews} from "../../mocks/test-mock.js";

const MoviePageWrapped = withTabs(MoviePage);

it(`Should MoviePageWrappedComponent render corrently`, () => {
  const tree = renderer.create(
      <MoviePageWrapped
        film={film}
        reviews={reviews}
        films={films}
        onMoviePageEscPress={() => {}}
        onPlayButtonClick={() => {}}
        onFilmCardClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
