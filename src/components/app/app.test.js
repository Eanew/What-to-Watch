import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app.jsx";

import {Screen, Genre} from "../../utils/const.js";

import {film, films, reviews} from "../../mocks/test-mock.js";

describe(`AppComponent`, () => {

  it(`Render main page`, () => {
    const tree = renderer.create(
        <App
          screen={Screen.MAIN}
          lastScreen={Screen.MAIN}
          films={films}
          displayedFilms={films}
          currentGenre={Genre.ALL}
          currentFilm={film}
          reviews={reviews}
          onMoviePageEscPress={() => {}}
          onPlayButtonClick={() => {}}
          onExitButtonClick={() => {}}
          onGenreTabClick={() => {}}
          onFilmCardClick={() => {}}
          onShowMoreButtonClick={() => {}}
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
          lastScreen={Screen.MOVIE_PAGE}
          films={films}
          displayedFilms={films}
          currentGenre={Genre.ALL}
          currentFilm={film}
          reviews={reviews}
          onMoviePageEscPress={() => {}}
          onPlayButtonClick={() => {}}
          onExitButtonClick={() => {}}
          onGenreTabClick={() => {}}
          onFilmCardClick={() => {}}
          onShowMoreButtonClick={() => {}}
        />, {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render player`, () => {
    const tree = renderer.create(
        <App
          screen={Screen.PLAYER}
          lastScreen={Screen.MOVIE_PAGE}
          films={films}
          displayedFilms={films}
          currentGenre={Genre.ALL}
          currentFilm={film}
          reviews={reviews}
          onMoviePageEscPress={() => {}}
          onPlayButtonClick={() => {}}
          onExitButtonClick={() => {}}
          onGenreTabClick={() => {}}
          onFilmCardClick={() => {}}
          onShowMoreButtonClick={() => {}}
        />, {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
