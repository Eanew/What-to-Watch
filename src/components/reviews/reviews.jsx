import React from "react";

import pt from "../../prop-types-cover.js";

import {sortByDate, toDateTimeAttribute} from "../../utils/common.js";
import {getReviewDate, getRatingScore} from "../../utils/normalize.js";
import {REVIEWS_PER_COLUMN} from "../../config.js";

const Reviews = (props) => {
  const {
    reviews,
  } = props;

  const columnsCount = Math.ceil(reviews.length / REVIEWS_PER_COLUMN);

  const sortedReviews = sortByDate(reviews);

  return (
    <div className="movie-card__reviews movie-card__row">
      {new Array(columnsCount).fill(``).map((column, i) => (
        <div
          key={`comments-column${i + 1}`}
          className="movie-card__reviews-col"
        >
          {sortedReviews.slice((i * REVIEWS_PER_COLUMN), ((i + 1) * REVIEWS_PER_COLUMN)).map((review) => (
            <div
              key={`review${review.id}`}
              className="review"
            >
              <blockquote className="review__quote">
                <p className="review__text">
                  {review.comment}
                </p>

                <footer className="review__details">
                  <cite className="review__author">
                    {review.userName}
                  </cite>
                  <time
                    className="review__date"
                    dateTime={toDateTimeAttribute(review.date)}
                  >
                    {getReviewDate(review.date)}
                  </time>
                </footer>
              </blockquote>

              <div className="review__rating">
                {getRatingScore(review.rating)}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

Reviews.propTypes = {
  reviews: pt.reviews,
};

export default Reviews;
