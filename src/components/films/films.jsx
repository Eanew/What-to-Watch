import React from "react";

import pt from "../../prop-types-cover.js";

import FilmCard from "../film-card/film-card.jsx";
import withVideoPreview from "../../hocs/with-video-preview.js";

const FilmCardWrapped = withVideoPreview(FilmCard);

const Films = (props) => {
  const {
    films,
    onFilmCardClick,
  } = props;

  const renderFilmCard = (film) => (
    <FilmCardWrapped
      key={film.filmTitle + film.id}
      film={film}
      onFilmCardClick={onFilmCardClick}
    />
  );

  return (
    <div className="catalog__movies-list">
      {films.map((film) => renderFilmCard(film))}
    </div>
  );
};

Films.propTypes = {
  films: pt.films,
  onFilmCardClick: pt.func,
};

export default Films;
