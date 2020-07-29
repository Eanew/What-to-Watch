import React from "react";
import renderer from "react-test-renderer";
import MoviePage from "./movie-page.jsx";

import {Tab} from "../../utils/const.js";

import {film} from "../../mocks/test-mock.js";

it(`Should MoviePageComponent render correctly`, () => {
  const tree = renderer.create(
      <MoviePage
        film={film}
        currentTab={Tab.OVERVIEW}
        renderTab={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
