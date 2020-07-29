import React from "react";

import {Tab} from "../utils/const.js";
import {getRatingLevel} from "../utils/film.js";

const withReviews = (Component) => {
  return class WithReviews extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        currentTab: Tab.OVERVIEW,
      };

      this._renderTab = this._renderTab.bind(this);
    }

    render() {
      return (
        <Component
          {...this.props}
          currentTab={this.state.currentTab}
          renderTab={this._renderTab}
        />
      );
    }

    _renderTab(tab, film) {
      const {
        rating,
        description,
        director,
        starring,
      } = film;

      switch (tab) {
        case Tab.OVERVIEW:
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

        default:
          return null;
      }
    }
  };
};

export default withReviews;
