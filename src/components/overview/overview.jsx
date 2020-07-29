import React from "react";

import pt from "../../prop-types-cover.js";

import {getRatingLevel} from "../../utils/film.js";

const Overview = (props) => {
  const {
    rating,
    description,
    director,
    starring,
  } = props;

  const ratingLevel = getRatingLevel(rating.value);
  const ratingScore = rating.value.toString().replace(`.`, `,`);

  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">
          {ratingScore}
        </div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">
            {ratingLevel}
          </span>
          <span className="movie-rating__count">
            {`${rating.votesCount} ratings`}
          </span>
        </p>
      </div>

      <div className="movie-card__text">
        {description.map((paragraph, i) => (
          <p key={`paragraph ${i + 1}`}>
            {paragraph}
          </p>
        ))}

        <p className="movie-card__director">
          <strong>Director: {director}</strong>
        </p>

        <p className="movie-card__starring">
          <strong>Starring: {starring.join(`, `)} and other</strong>
        </p>
      </div>
    </React.Fragment>
  );
};

Overview.propTypes = pt.film;

export default Overview;
