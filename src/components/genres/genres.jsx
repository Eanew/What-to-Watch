import React from "react";

import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";

import pt from "../../prop-types-cover.js";

import {Genre} from "../../utils/const.js";

const Genres = (props) => {
  const {
    films,
    currentGenre,
    onGenreTabClick,
  } = props;

  const genresList = films.reduce((genres, film) => {
    return [...genres.filter((genre) => genre !== film.genre), film.genre];
  }, [Genre.ALL]).sort();

  const mapGenreToTab = (genre) => {
    switch (genre) {
      case Genre.COMEDY: return `Comedies`;
      case Genre.CRIME: return `Crime`;
      case Genre.DOCUMENTARY: return `Documentary`;
      case Genre.DRAMA: return `Dramas`;
      case Genre.HORROR: return `Horror`;
      case Genre.FAMILY: return `Kids & Family`;
      case Genre.ROMANCE: return `Romance`;
      case Genre.SCI_FI: return `Sci-Fi`;
      case Genre.THRILLER: return `Thrillers`;

      default: return `All genres`;
    }
  };

  return (
    <ul className="catalog__genres-list">
      {genresList.map((genre, i) => (
        <li
          key={genre + i}
          className={`catalog__genres-item${genre === currentGenre ? ` catalog__genres-item--active` : ``}`}
        >
          <a
            href="#"
            className="catalog__genres-link"
            onClick={(evt) => {
              evt.preventDefault();
              onGenreTabClick(genre);
            }}
          >
            {mapGenreToTab(genre)}
          </a>
        </li>
      ))}
    </ul>
  );
};

Genres.propTypes = {
  films: pt.films,
  currentGenre: pt.genre,
  onGenreTabClick: pt.func,
};

const mapStateToProps = (state) => ({
  films: state.films,
  currentGenre: state.genre,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreTabClick(genre) {
    dispatch(ActionCreator.switchGenre(genre));
  },
});

export {Genres};
export default connect(mapStateToProps, mapDispatchToProps)(Genres);
