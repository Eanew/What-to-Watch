import React from "react";

import pt from "../prop-types-cover.js";

import {Tab} from "../utils/const.js";

import Overview from "../components/overview/overview.jsx";
import Details from "../components/details/details.jsx";
import Reviews from "../components/reviews/reviews.jsx";

const withTabs = (Component) => {
  class WithTabs extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        currentTab: Tab.OVERVIEW,
      };

      this._renderTab = this._renderTab.bind(this);
      this._handleTabClick = this._handleTabClick.bind(this);
    }

    render() {
      return (
        <Component
          currentTab={this.state.currentTab}
          renderTab={this._renderTab}
          onTabClick={this._handleTabClick}
        />
      );
    }

    _renderTab(tab) {
      const {
        film,
        reviews,
      } = this.props;

      const {
        release,
        runtime,
        genre,
        rating,
        description,
        director,
        starring,
      } = film;

      switch (tab) {
        case Tab.OVERVIEW:
          return (
            <Overview
              rating={rating}
              description={description}
              director={director}
              starring={starring}
            />
          );

        case Tab.DETAILS:
          return (
            <Details
              release={release}
              runtime={runtime}
              genre={genre}
              director={director}
              starring={starring}
            />
          );

        case Tab.REVIEWS:
          return (
            <Reviews
              reviews={reviews}
            />
          );

        default:
          return null;
      }
    }

    _handleTabClick(tabName) {
      this.setState({
        currentTab: tabName,
      });
    }
  }

  WithTabs.propTypes = {
    film: pt.film,
    reviews: pt.reviews,
  };

  return WithTabs;
};

export default withTabs;
