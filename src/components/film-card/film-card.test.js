import React from "react";
import renderer from "react-test-renderer";
import FilmCard from "./film-card.jsx";

import {toKebabCase} from "../../utils/common.js";
import {APPROVED_GENRES} from "../../utils/const.js";

const filmsTitles = [`Fantastic Beasts: The Crimes of Grindelwald`];

it(`Should FilmCardComponent render correctly`, () => {
  const tree = renderer
    .create(<FilmCard
      film={{
        id: `1`,
        filmTitle: filmsTitles[0],
        genre: APPROVED_GENRES[0],
        images: {
          preview: `img/${toKebabCase(filmsTitles[0])}.jpg`,
          background: `img/bg-${toKebabCase(filmsTitles[0])}.jpg`,
          poster: `img/${toKebabCase(filmsTitles[0])}-poster.jpg`,
        },
      }}
      onPreviewHover={() => {}}
      onFilmCardClick={() => {}}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
