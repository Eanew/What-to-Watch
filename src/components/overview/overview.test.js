import React from "react";
import renderer from "react-test-renderer";
import Overview from "./overview.jsx";

import {film} from "../../mocks/test-mock.js";

it(`Should OverviewComponent render correctly`, () => {
  const {
    rating,
    description,
    director,
    starring,
  } = film;

  const tree = renderer.create(
      <Overview
        rating={rating}
        description={description}
        director={director}
        starring={starring}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
