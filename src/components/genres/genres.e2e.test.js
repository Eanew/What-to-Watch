import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Genres from "./genres.jsx";

import {Genre} from "../../utils/const.js";

import {films} from "../../test-mock.js";

Enzyme.configure({
  adapter: new Adapter(),
});

const genresList = films.reduce((genres, film) => {
  return [...genres.filter((genre) => genre !== film.genre), film.genre];
}, [Genre.ALL]).sort().slice(0, 10);

describe(`Genres`, () => {
  it(`Should tab link click returns tab name`, () => {
    const handleGenreTabClick = jest.fn();
    const preventDefault = jest.fn();

    const tabs = shallow(
        <Genres
          genres={genresList}
          currentGenre={Genre.ALL}
          onGenreTabClick={() => {}}
        />
    );

    const tabsLinks = tabs.find(`.catalog__genres-link`);

    tabsLinks.forEach((link, i) => {
      link.simulate(`click`, {
        preventDefault,
      });

      expect(handleGenreTabClick.mock.calls[i][0]).toBe(genresList[i]);
    });

    expect(preventDefault).toHaveBeenCalledTimes(tabsLinks.length);
  });
});
