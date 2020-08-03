import React from "react";

import pt from "../../prop-types-cover.js";

import {Genre} from "../../utils/const.js";
import {mapGenreToTab} from "../../utils/genre.js";

import {MAX_GENRES_IN_GENRES_LIST} from "../../config.js";

const Genres = (props) => {
  const {
    films,
    currentGenre,
    onGenreTabClick,
  } = props;

  const genresList = films.reduce((genres, film) => {
    return [...genres.filter((genre) => genre !== film.genre), film.genre];
  }, [Genre.ALL]).sort().slice(0, MAX_GENRES_IN_GENRES_LIST);

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

export default Genres;
