import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

import {Genre} from "../../utils/const.js";

import {film, films} from "../../test-mock.js";

it(`Should MainComponent render correctly`, () => {
  const tree = renderer.create(
      <Main
        promo={film}
        films={films}
        currentGenre={Genre.ALL}
        displayedFilms={films}
        onPlayButtonClick={() => {}}
        onGenreTabClick={() => {}}
        onFilmCardClick={() => {}}
        onShowMoreButtonClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
