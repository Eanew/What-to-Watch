import React from "react";
import pt from "prop-types";

import {APPROVED_GENRES} from "../../utils/const.js";
import FilmPreview from "../film-preview/film-preview.jsx";

const FilmCard = (props) => {
  const {
    film,
    onFilmCardClick,
  } = props;

  const {
    id,
    filmTitle,
    image,
    movie,
  } = film;

  const handleFilmCardClick = (evt) => {
    evt.preventDefault();
    onFilmCardClick(film);
  };

  return (
    <article
      key={id}
      className="small-movie-card catalog__movies-card"
    >
      <FilmPreview
        filmTitle={filmTitle}
        image={image}
        movie={movie}
        onClick={onFilmCardClick}
      />
      <h3 className="small-movie-card__title">
        <a
          onClick={handleFilmCardClick}
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

    image: FilmPreview.propTypes.image,
    movie: FilmPreview.propTypes.movie,
    description: pt.arrayOf(pt.string).isRequired,
    director: pt.string.isRequired,
    starring: pt.arrayOf(pt.string).isRequired,
  }).isRequired,

  onFilmCardClick: pt.func.isRequired,
};

export default FilmCard;
