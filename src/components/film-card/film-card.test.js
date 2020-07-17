import React from "react";
import renderer from "react-test-renderer";
import FilmCard from "./film-card.jsx";

import {toKebabCase} from "../../utils/common.js";

const APPROVED_GENRES = [`Comedy`];
const filmsTitles = [`Fantastic Beasts: The Crimes of Grindelwald`];

it(`Should FilmCardComponent render correctly`, () => {
  const tree = renderer
    .create(<FilmCard
      film={{
        id: `1`,
        genre: APPROVED_GENRES[0],
        title: filmsTitles[0],
        src: `img/${toKebabCase(filmsTitles[0])}.jpg`,
      }}
      onPreviewHover={() => {}}
      onFilmCardClick={() => {}}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
