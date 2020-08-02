import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

import {film, films} from "../../mocks/test-mock.js";

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
        onFilmCardClick={handleFilmCardClick}
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
