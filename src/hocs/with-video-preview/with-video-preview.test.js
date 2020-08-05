import React from "react";
import renderer from "react-test-renderer";

import FilmCard from "../../components/film-card/film-card.jsx";
import withVideoPreview from "./with-video-preview.js";

import {film} from "../../mocks/test-mock.js";

const FilmCardWrapped = withVideoPreview(FilmCard);

it(`Should FilmCardWrappedComponent render corrently`, () => {
  const tree = renderer.create(
      <FilmCardWrapped
        film={film}
        onFilmCardClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
