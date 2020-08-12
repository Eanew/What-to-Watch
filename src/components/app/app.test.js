import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app.jsx";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

const store = configureStore([]);

import {Screen} from "../../utils/const.js";

import {userInfo, film, films, mockStore} from "../../test-mock.js";

describe(`AppComponent`, () => {

  it(`Render main page`, () => {
    const tree = renderer.create(
        <Provider store={store(mockStore)}>
          <App
            userInfo={userInfo}
            promo={film}
            films={films}
            favorites={films.filter((movie) => movie.isFavorite === true)}
            screen={Screen.MAIN}
            lastScreen={Screen.MAIN}
            currentFilm={films[1]}
            isDataFetching={false}
            onLogoLinkClick={() => {}}
            onPlayButtonClick={() => {}}
            onMoviePageClick={() => {}}
            onExitButtonClick={() => {}}
            onSignInLinkClick={() => {}}
            onMyListButtonClick={() => {}}
            onSignInSubmit={() => {}}
            onReviewSubmit={() => {}}
            onAvatarClick={() => {}}
            onFilmCardClick={() => {}}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render movie page`, () => {
    const tree = renderer.create(
        <Provider store={store(mockStore)}>
          <App
            userInfo={userInfo}
            promo={film}
            films={films}
            favorites={films.filter((movie) => movie.isFavorite === true)}
            screen={Screen.MOVIE_PAGE}
            lastScreen={Screen.MOVIE_PAGE}
            currentFilm={films[1]}
            isDataFetching={false}
            onLogoLinkClick={() => {}}
            onPlayButtonClick={() => {}}
            onMoviePageClick={() => {}}
            onExitButtonClick={() => {}}
            onSignInLinkClick={() => {}}
            onMyListButtonClick={() => {}}
            onSignInSubmit={() => {}}
            onReviewSubmit={() => {}}
            onAvatarClick={() => {}}
            onFilmCardClick={() => {}}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render player`, () => {
    const tree = renderer.create(
        <Provider store={store(mockStore)}>
          <App
            userInfo={userInfo}
            promo={film}
            films={films}
            favorites={films.filter((movie) => movie.isFavorite === true)}
            screen={Screen.PLAYER}
            lastScreen={Screen.MOVIE_PAGE}
            currentFilm={films[1]}
            isDataFetching={false}
            onLogoLinkClick={() => {}}
            onPlayButtonClick={() => {}}
            onMoviePageClick={() => {}}
            onExitButtonClick={() => {}}
            onSignInLinkClick={() => {}}
            onMyListButtonClick={() => {}}
            onSignInSubmit={() => {}}
            onReviewSubmit={() => {}}
            onAvatarClick={() => {}}
            onFilmCardClick={() => {}}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
