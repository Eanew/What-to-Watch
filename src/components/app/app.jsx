import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";

import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";

import pt from "../../prop-types-cover.js";

import {Screen} from "../../utils/const.js";

import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";

class App extends React.PureComponent {
  render() {
    const {
      films,
      reviews,
      onFilmCardClick,
    } = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/details">
            <MoviePage
              film={films[0]}
              reviews={reviews}
              films={films}
              onFilmCardClick={onFilmCardClick}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  _renderApp() {
    const {
      promo,
      films,
      currentGenre,
      filteredFilms,
      reviews,
      screen,
      currentFilm,
      onFilmCardClick,
      onGenreTabClick,
    } = this.props;

    switch (screen) {
      case Screen.MAIN:
        return (
          <Main
            promo={promo}
            films={films}
            currentGenre={currentGenre}
            filteredFilms={filteredFilms}
            onFilmCardClick={onFilmCardClick}
            onGenreTabClick={onGenreTabClick}
          />
        );

      case Screen.MOVIE_PAGE:
        return (
          <MoviePage
            film={currentFilm}
            reviews={reviews}
            films={films}
            onFilmCardClick={onFilmCardClick}
          />
        );

      default:
        return null;
    }
  }
}

App.propTypes = {
  screen: pt.screen,
  currentFilm: pt.currentFilm,
  promo: pt.film,
  films: pt.films,
  currentGenre: pt.genre,
  filteredFilms: pt.films,
  reviews: pt.reviews,
  onFilmCardClick: pt.func,
  onGenreTabClick: pt.func,
};

const mapStateToProps = (state) => ({
  screen: state.screen,
  currentFilm: state.currentFilm,
  promo: state.promo,
  films: state.films,
  currentGenre: state.genre,
  filteredFilms: state.filteredFilms,
  reviews: state.reviews,
});

const mapDispatchToProps = (dispatch) => ({
  onFilmCardClick(film) {
    dispatch(ActionCreator.setMoviePageScreen(film));
  },
  onGenreTabClick(genre) {
    dispatch(ActionCreator.switchGenre(genre));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
