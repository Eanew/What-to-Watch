import React from "react";

import pt from "../../prop-types-cover.js";

import {getDuration} from "../../utils/normalize.js";

const Details = (props) => {
  const {
    release,
    runtime,
    genre,
    director,
    starring,
  } = props;

  const duration = getDuration(runtime);

  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{director}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <span className="movie-card__details-value">
            {starring.map((actor, i) => (i !== starring.length - 1)
              ? <React.Fragment>{`${actor}, `}<br /></React.Fragment>
              : actor
            )}
          </span>
        </p>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{duration}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{release}</span>
        </p>
      </div>
    </div>
  );
};

Details.propTypes = pt.film;

export default Details;
