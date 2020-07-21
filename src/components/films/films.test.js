import React from "react";
import renderer from "react-test-renderer";
import Films from "./films.jsx";

import {toKebabCase} from "../../utils/common.js";
import {APPROVED_GENRES} from "../../utils/const.js";

const filmsTitles = [
  `Fantastic Beasts: The Crimes of Grindelwald`,
  `Bohemian Rhapsody`,
  `Macbeth`];

it(`Should FilmsComponent render correctly`, () => {
  const tree = renderer
    .create(<Films
      films={filmsTitles.map((filmTitle, i) => ({
        id: filmTitle + i,
        filmTitle,
        release: 1972 + i,
        genre: APPROVED_GENRES[i],
        images: {
          preview: `img/${toKebabCase(filmTitle)}.jpg`,
          background: `img/bg-${toKebabCase(filmTitle)}.jpg`,
          poster: `img/${toKebabCase(filmTitle)}-poster.jpg`,
        },
      }))}
      onFilmCardClick={() => {}}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
