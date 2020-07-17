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
    title,
    src,
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
          src={src}
          alt={title}
          width="280" height="175"
        />
      </div>
      <h3 className="small-movie-card__title">
        <a
          onClick={onFilmCardClick}
          className="small-movie-card__link"
          href="movie-page.html"
        >
          {title}
        </a>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  film: pt.shape({
    id: pt.string.isRequired,
    genre: pt.oneOf(APPROVED_GENRES).isRequired,
    title: pt.string.isRequired,
    src: pt.string.isRequired,
  }).isRequired,
  onPreviewHover: pt.func.isRequired,
  onFilmCardClick: pt.func.isRequired,
};

export default FilmCard;
