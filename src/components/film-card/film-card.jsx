import React from "react";
import pt from "prop-types";

import {APPROVED_GENRES} from "../../utils/const.js";

const FilmCard = (props) => {
  const {
    film,
    onFilmCardClick,
    onMouseEnter,
    onMouseLeave,
    renderPlayer,
  } = props;

  const {
    filmTitle,
    image,
    movie,
  } = film;

  const handleFilmCardClick = () => {
    onFilmCardClick(film);
  };

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={handleFilmCardClick}
    >
      <div className="small-movie-card__image">
        {renderPlayer(movie.preview, image.preview)}
      </div>

      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link">
          {filmTitle}
        </a>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  film: pt.shape({
    id: pt.string.isRequired,
    filmTitle: pt.string.isRequired,
    release: pt.number.isRequired,
    genre: pt.oneOf(APPROVED_GENRES).isRequired,

    rating: pt.shape({
      value: pt.string.isRequired,
      votes: pt.string.isRequired,
    }).isRequired,

    image: pt.shape({
      preview: pt.string.isRequired,
      background: pt.string.isRequired,
      poster: pt.string.isRequired,
    }).isRequired,

    movie: pt.shape({
      preview: pt.string.isRequired,
      full: pt.string.isRequired,
    }).isRequired,

    description: pt.arrayOf(pt.string).isRequired,
    director: pt.string.isRequired,
    starring: pt.arrayOf(pt.string).isRequired,
  }).isRequired,

  onMouseEnter: pt.func.isRequired,
  onMouseLeave: pt.func.isRequired,
  onFilmCardClick: pt.func.isRequired,
  renderPlayer: pt.func.isRequired,
};

export default FilmCard;
