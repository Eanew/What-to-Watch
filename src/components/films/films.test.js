import React from "react";
import renderer from "react-test-renderer";
import Films from "./films.jsx";

import {toKebabCase} from "../../utils/common.js";

const APPROVED_GENRES = [
  `Comedy`,
  `Crime`,
  `Documentary`];

const filmsTitles = [
  `Fantastic Beasts: The Crimes of Grindelwald`,
  `Bohemian Rhapsody`,
  `Macbeth`];

it(`Should FilmsComponent render correctly`, () => {
  const tree = renderer
    .create(<Films
      films={filmsTitles.map((filmTitle, i) => ({
        id: `${i + 1}`,
        genre: APPROVED_GENRES[i],
        title: filmTitle,
        src: `img/${toKebabCase(filmTitle)}.jpg`,
      }))}
      onFilmCardClick={() => {}}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
