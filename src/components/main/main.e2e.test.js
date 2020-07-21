import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

import {toKebabCase} from "../../utils/common.js";
import {APPROVED_GENRES} from "../../utils/const.js";

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
      onFilmCardClick={handleFilmCardClick}
    />);

    const moviesTitles = main.find(`.small-movie-card__link`);

    moviesTitles.forEach((title) => {
      title.simulate(`click`);
    });

    expect(handleFilmCardClick).toHaveBeenCalledTimes(moviesTitles.length);
  });
});
