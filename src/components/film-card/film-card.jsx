import React from "react";
import pt from "prop-types";

import {APPROVED_GENRES} from "../../utils/const.js";

const FilmCard = (props) => {
  const {
    film,
    onPreviewHover,
    onFilmCardClick,
  } = props;

  const {
    id,
    filmTitle,
    images,
  } = film;

  const handlePreviewHover = () => {
    onPreviewHover(film);
  };

  return (
    <article
      key={id}
      className="small-movie-card catalog__movies-card"
    >
      <div
        onMouseOver={handlePreviewHover}
        onClick={onFilmCardClick}
        className="small-movie-card__image"
      >
        <img
          src={images.preview}
          alt={filmTitle}
          width="280" height="175"
        />
      </div>
      <h3 className="small-movie-card__title">
        <a
          onClick={onFilmCardClick}
          className="small-movie-card__link"
          href="movie-page.html"
        >
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

    images: pt.shape({
      preview: pt.string.isRequired,
      background: pt.string.isRequired,
      poster: pt.string.isRequired,
    }).isRequired,

    description: pt.arrayOf(pt.string).isRequired,
    director: pt.string.isRequired,
    starring: pt.arrayOf(pt.string).isRequired,
  }).isRequired,

  onPreviewHover: pt.func.isRequired,
  onFilmCardClick: pt.func.isRequired,
};

export default FilmCard;
