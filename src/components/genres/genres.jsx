import React from "react";
import {Link} from "react-router-dom";
import {AppRoute} from "../../utils/const.js";

import pt from "../../prop-types-cover.js";

import {mapGenreToTab} from "../../utils/genre.js";

const Genres = (props) => {
  const {
    genres,
    currentGenre,
    onGenreTabClick,
  } = props;

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, i) => (
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
  genres: pt.genres,
  currentGenre: pt.genre,
  onGenreTabClick: pt.func,
};

export default Genres;
