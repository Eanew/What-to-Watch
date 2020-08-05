import React from "react";

import pt from "../../prop-types-cover.js";

const FilmCard = (props) => {
  const {
    film,
    onFilmCardClick,
    onMouseEnter,
    onMouseLeave,
    children,
  } = props;

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
        {children}
      </div>

      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link">
          {film.filmTitle}
        </a>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  film: pt.film,
  onMouseEnter: pt.func,
  onMouseLeave: pt.func,
  onFilmCardClick: pt.func,
  children: pt.children,
};

export default FilmCard;
