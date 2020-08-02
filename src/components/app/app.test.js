import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app.jsx";

import {Screen} from "../../utils/const.js";

import {film, films, reviews} from "../../mocks/test-mock.js";

describe(`AppComponent`, () => {

  it(`Render main page`, () => {
    const tree = renderer.create(
        <App
          screen={Screen.MAIN}
          currentFilm={null}
          promo={film}
          films={films}
          reviews={reviews}
          onFilmCardClick={() => {}}
        />, {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render movie page`, () => {
    const tree = renderer.create(
        <App
          screen={Screen.MOVIE_PAGE}
          currentFilm={film}
          promo={film}
          films={films}
          reviews={reviews}
          onFilmCardClick={() => {}}
        />, {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
