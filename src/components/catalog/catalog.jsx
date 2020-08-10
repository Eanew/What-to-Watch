import React from "react";

import {connect} from "react-redux";
import {ActionCreator as ScreenActionCreator} from "../../reducer/screen/screen.js";
import {ActionCreator as FilmsActionCreator} from "../../reducer/films/films.js";
import {Operation} from "../../reducer/data/data.js";
import Selector from "../../reducer/films/selectors.js";

import pt from "../../prop-types-cover.js";

import Genres from "../genres/genres.jsx";
import Films from "../films/films.jsx";
import ShowMoreButton from "../show-more-button/show-more-button.jsx";

const Catalog = (props) => {
  const {
    genres,
    currentGenre,
    filteredFilms,
    displayedFilms,
    onFilmCardClick,
    onGenreTabClick,
    onShowMoreButtonClick,
  } = props;

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <Genres
        genres={genres}
        currentGenre={currentGenre}
        onGenreTabClick={onGenreTabClick}
      />

      <Films
        films={displayedFilms}
        onFilmCardClick={onFilmCardClick}
      />

      {displayedFilms.length < filteredFilms.length && (
        <ShowMoreButton
          onClick={onShowMoreButtonClick}
        />
      )}

    </section>
  );
};

Catalog.propTypes = {
  genres: pt.genres,
  currentGenre: pt.genre,
  filteredFilms: pt.films,
  displayedFilms: pt.films,
  onGenreTabClick: pt.func,
  onFilmCardClick: pt.func,
  onShowMoreButtonClick: pt.func,
};

const mapStateToProps = (state) => ({
  genres: Selector.getGenresList(state),
  currentGenre: Selector.getCurrentGenre(state),
  filteredFilms: Selector.getFilmsByCurrentGenre(state),
  displayedFilms: Selector.getDisplayedFilms(state),
});

const mapDispatchToProps = (dispatch) => ({
  onGenreTabClick(genre) {
    dispatch(FilmsActionCreator.switchGenre(genre));
  },
  onFilmCardClick(film) {
    dispatch(ScreenActionCreator.setMoviePageScreen(film));
    dispatch(Operation.loadReviews(film.id));
  },
  onShowMoreButtonClick() {
    dispatch(FilmsActionCreator.showMoreFilms());
  },
});

export {Catalog};
export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
