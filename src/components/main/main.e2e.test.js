import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

import {toKebabCase} from "../../utils/common.js";

const APPROVED_GENRES = [
  `Comedy`,
  `Crime`,
  `Documentary`];

Enzyme.configure({
  adapter: new Adapter(),
});

const promo = {
  name: `The Grand Budapest Hotel`,
  genre: `Drama`,
  release: `2014`,
};

const filmsTitles = [
  `Fantastic Beasts: The Crimes of Grindelwald`,
  `Bohemian Rhapsody`,
  `Macbeth`];

describe(`Films titles`, () => {
  it(`Should be pressed`, () => {
    const handleFilmCardClick = jest.fn();

    const main = shallow(<Main
      promo={promo}
      films={filmsTitles.map((filmTitle, i) => ({
        id: `${i + 1}`,
        genre: APPROVED_GENRES[i],
        title: filmTitle,
        src: `img/${toKebabCase(filmTitle)}.jpg`,
      }))}
      onFilmCardClick={handleFilmCardClick}
    />);

    const moviesTitles = main.find(`.small-movie-card__link`);

    moviesTitles.forEach((title) => {
      title.simulate(`click`);
    });

    expect(handleFilmCardClick).toHaveBeenCalledTimes(moviesTitles.length);
  });
});
