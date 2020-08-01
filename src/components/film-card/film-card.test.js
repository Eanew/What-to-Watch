import React from "react";
import renderer from "react-test-renderer";
import FilmCard from "./film-card.jsx";

import {film} from "../../mocks/test-mock.js";

it(`Should FilmCardComponent render correctly`, () => {
  const tree = renderer.create(
      <FilmCard
        film={film}
        onFilmCardClick={() => {}}
        onMouseEnter={() => {}}
        onMouseLeave={() => {}}
        renderPlayer={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
