import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

import {Genre} from "../../utils/const.js";

import {film, films} from "../../test-mock.js";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Main component`, () => {
  const handleFilmCardClick = jest.fn();
  const preventDefault = jest.fn();

  const main = mount(
      <Main
        promo={film}
        films={films}
        currentGenre={Genre.ALL}
        displayedFilms={films}
        onPlayButtonClick={() => {}}
        onGenreTabClick={() => {}}
        onFilmCardClick={handleFilmCardClick}
        onShowMoreButtonClick={() => {}}
      />
  );

  it(`Should film cards be clicked`, () => {
    const filmCards = main.find(`.small-movie-card`);

    filmCards.forEach((card) => {
      card.simulate(`click`, {
        preventDefault,
      });
    });

    expect(handleFilmCardClick).toHaveBeenCalledTimes(filmCards.length);
  });
});
