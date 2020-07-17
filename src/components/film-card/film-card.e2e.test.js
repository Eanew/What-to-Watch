import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FilmCard from "./film-card.jsx";

import {toKebabCase} from "../../utils/common.js";

const APPROVED_GENRES = [`Comedy`];
const filmsTitles = [`Fantastic Beasts: The Crimes of Grindelwald`];

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Film card`, () => {
  it(`Should preview be hovered`, () => {
    const handlePreviewHover = jest.fn();
    const film = {
      id: `1`,
      genre: APPROVED_GENRES[0],
      title: filmsTitles[0],
      src: `img/${toKebabCase(filmsTitles[0])}.jpg`,
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
