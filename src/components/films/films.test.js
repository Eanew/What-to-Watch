import React from "react";
import renderer from "react-test-renderer";
import Films from "./films.jsx";

import {films} from "../../test-mock.js";

it(`Should FilmsComponent render correctly`, () => {
  const tree = renderer.create(
      <Films
        films={films}
        onFilmCardClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
