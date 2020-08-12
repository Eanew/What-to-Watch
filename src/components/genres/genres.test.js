import React from "react";
import renderer from "react-test-renderer";

import {film} from "../../test-mock.js";

import {Genre} from "../../utils/const.js";

import Genres from "./genres.jsx";

it(`Should GenresComponent render correctly`, () => {
  const tree = renderer.create(
      <Genres
        genres={Object.values(Genre).slice(0, 10)}
        currentGenre={film.genre}
        onGenreTabClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
