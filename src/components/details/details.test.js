import React from "react";
import renderer from "react-test-renderer";
import Details from "./details.jsx";

import {film} from "../../mocks/test-mock.js";

it(`Should DetailsComponent render correctly`, () => {
  const {
    release,
    runtime,
    genre,
    director,
    starring,
  } = film;

  const tree = renderer.create(
      <Details
        release={release}
        runtime={runtime}
        genre={genre}
        director={director}
        starring={starring}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
