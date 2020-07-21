import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FilmCard from "./film-card.jsx";

import {toKebabCase} from "../../utils/common.js";
import {APPROVED_GENRES} from "../../utils/const.js";

Enzyme.configure({
  adapter: new Adapter(),
});

const filmsTitles = [`Fantastic Beasts: The Crimes of Grindelwald`];

describe(`Film card`, () => {
  it(`Should preview hover returns film card data`, () => {
    const handlePreviewHover = jest.fn();
    const film = {
      id: `1`,
      filmTitle: filmsTitles[0],
      genre: APPROVED_GENRES[0],
      images: {
        preview: `img/${toKebabCase(filmsTitles[0])}.jpg`,
        background: `img/bg-${toKebabCase(filmsTitles[0])}.jpg`,
        poster: `img/${toKebabCase(filmsTitles[0])}-poster.jpg`,
      },
    };

    const filmCard = shallow(<FilmCard
      film={film}
      onPreviewHover={handlePreviewHover}
      onFilmCardClick={() => {}}
    />);

    const preview = filmCard.find(`.small-movie-card__image`);
    preview.simulate(`mouseover`);

    expect(handlePreviewHover).toHaveBeenCalledWith(film);
  });
});
