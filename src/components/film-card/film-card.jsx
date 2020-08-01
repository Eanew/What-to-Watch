import React from "react";

import pt from "../../prop-types-cover.js";

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
  film: pt.film,
  onMouseEnter: pt.func,
  onMouseLeave: pt.func,
  onFilmCardClick: pt.func,
  renderPlayer: pt.func,
};

export default FilmCard;
