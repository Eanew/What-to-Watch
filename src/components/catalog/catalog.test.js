import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

const store = configureStore([]);

import {films, mockStore} from "../../test-mock.js";

import {Genre} from "../../utils/const.js";

import {Catalog} from "./catalog.jsx";

it(`Should CatalogComponent render correctly`, () => {
  const tree = renderer.create(
      <Provider store={store(mockStore)}>
        <Catalog
          genres={Object.values(Genre).sort().slice(0, 10)}
          currentGenre={Genre.ALL}
          filteredFilms={films}
          displayedFilms={films.slice(0, 8)}
          onGenreTabClick={() => {}}
          onFilmCardClick={() => {}}
          onShowMoreButtonClick={() => {}}
        />
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
