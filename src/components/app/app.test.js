import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

import {toKebabCase} from "../../utils/common.js";

const APPROVED_GENRES = [
  `Comedy`,
  `Crime`,
  `Documentary`];

const promo = {
  name: `The Grand Budapest Hotel`,
  genre: `Drama`,
  release: `2014`,
};

const filmsTitles = [
  `Fantastic Beasts: The Crimes of Grindelwald`,
  `Bohemian Rhapsody`,
  `Macbeth`];

it(`Should AppComponent render correctly`, () => {
  const tree = renderer
    .create(<App
      promo={promo}
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
