import React from "react";
import pt from "prop-types";

import FilmCard from "../film-card/film-card.jsx";

const Films = (props) => {
  const {films, onFilmCardClick} = props;

  return (
    <div className="catalog__movies-list">
      {films.map((film) => (
        <FilmCard
          key={film.filmTitle + film.id}
          film={film}
          onFilmCardClick={onFilmCardClick}
        />
      ))}
    </div>
  );
};

Films.propTypes = {
  films: pt.arrayOf(FilmCard.propTypes.film).isRequired,
  onFilmCardClick: FilmCard.propTypes.onFilmCardClick,
};

export default Films;
