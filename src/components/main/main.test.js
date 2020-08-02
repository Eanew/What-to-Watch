import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

import {film, films} from "../../mocks/test-mock.js";

it(`Should MainComponent render correctly`, () => {
  const tree = renderer.create(
      <Main
        promo={film}
        films={films}
        onFilmCardClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
