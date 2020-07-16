import React from "react";
import pt from "prop-types";

import {APPROVED_GENRES} from "../../utils/const.js";

const FilmCard = (props) => {
  const {
    film,
    filmsHandlers,
  } = props;

  const {
    id,
    title,
    src,
  } = film;

  const [
    onPreviewHover,
    onFilmCardClick,
  ] = filmsHandlers;

  return (
    <article
      key={id}
      className="small-movie-card catalog__movies-card"
    >
      <div className="small-movie-card__image">
        <img
          onMouseOver={onPreviewHover}
          onClick={onFilmCardClick}
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
  filmsHandlers: pt.arrayOf(pt.func.isRequired).isRequired,
};

export default FilmCard;
