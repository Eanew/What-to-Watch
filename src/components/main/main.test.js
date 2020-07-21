import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

import {toKebabCase} from "../../utils/common.js";
import {APPROVED_GENRES} from "../../utils/const.js";

const promo = {
  name: `The Grand Budapest Hotel`,
  genre: `Drama`,
  release: `2014`,
};

const filmsTitles = [
  `Fantastic Beasts: The Crimes of Grindelwald`,
  `Bohemian Rhapsody`,
  `Macbeth`];

it(`Should MainComponent render correctly`, () => {
  const tree = renderer
    .create(<Main
      promo={promo}
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
