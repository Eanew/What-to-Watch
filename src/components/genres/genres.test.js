import React from "react";
import renderer from "react-test-renderer";

import {films} from "../../test-mock.js";

import Genres from "./genres.jsx";

it(`Should GenresComponent render correctly`, () => {
  const tree = renderer.create(
      <Genres
        films={films}
        currentGenre={films[0].genre}
        onGenreTabClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
