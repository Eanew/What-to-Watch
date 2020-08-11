import React from "react";

import pt from "../../prop-types-cover.js";

import {sortByDate, toDateTimeAttribute} from "../../utils/common.js";
import {getReviewDate, getRatingScore} from "../../utils/normalize.js";

const COLUMNS_COUNT = 2;

const Reviews = (props) => {
  const {
    reviews,
  } = props;

  const sortedReviews = sortByDate(reviews);

  return (
    <div className="movie-card__reviews movie-card__row">
      {new Array(COLUMNS_COUNT).fill(``).map((column, i) => (
        <div
          key={`comments-column${i + 1}`}
          className="movie-card__reviews-col"
        >
          {sortedReviews
            .slice(Math.ceil(reviews.length / COLUMNS_COUNT) * i, Math.ceil(reviews.length / COLUMNS_COUNT) * (i + 1))
            .map((review) => (
              <div
                key={`review${review.id}`}
                className="review"
              >
                <blockquote className="review__quote">
                  <p
                    className="review__text"
                    style={{
                      overflowWrap: `break-word`,
                    }}
                  >
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
            ))
          }
        </div>
      ))}
    </div>
  );
};

Reviews.propTypes = {
  reviews: pt.reviews,
};

export default Reviews;
