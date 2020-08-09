import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FilmCard from "./film-card.jsx";

import {film} from "../../test-mock.js";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Film card`, () => {
  const handleFilmCardClick = jest.fn();
  const handleMouseEnter = jest.fn();
  const handleMouseLeave = jest.fn();

  const filmCard = shallow(
      <FilmCard
        film={film}
        onFilmCardClick={handleFilmCardClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <video src=""></video>
      </FilmCard>
  );

  it(`Should film card click returns film card data`, () => {
    const preview = filmCard.find(`.small-movie-card`);

    preview.simulate(`click`);

    expect(handleFilmCardClick).toHaveBeenCalledWith(film);
  });
});
