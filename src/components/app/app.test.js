import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app.jsx";

import {Screen} from "../../utils/const.js";

import {promo, film, films, reviews} from "../../mocks/test-mock.js";

describe(`AppComponent`, () => {
  it(`Render main page`, () => {
    const state = {
      screen: Screen.MAIN,
      currentFilm: null,
    };

    const tree = renderer.create(
        <App
          promo={promo}
          films={films}
          reviews={reviews}
          screen={state.screen}
          currentFilm={state.currentFilm}
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
    const state = {
      screen: Screen.MOVIE_PAGE,
      currentFilm: film,
    };

    const tree = renderer.create(
        <App
          promo={promo}
          films={films}
          reviews={reviews}
          screen={state.screen}
          currentFilm={state.currentFilm}
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
