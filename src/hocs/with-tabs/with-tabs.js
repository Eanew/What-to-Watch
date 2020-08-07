import React from "react";

import pt from "../../prop-types-cover.js";

import {Tab} from "../../utils/const.js";
import {isEscEvent} from "../../utils/common.js";

import Overview from "../../components/overview/overview.jsx";
import Details from "../../components/details/details.jsx";
import Reviews from "../../components/reviews/reviews.jsx";

const withTabs = (Component) => {
  class WithTabs extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        currentTab: Tab.OVERVIEW,
      };

      this._handleEscPress = this._handleEscPress.bind(this);
      this._handleTabClick = this._handleTabClick.bind(this);
      this._renderTab = this._renderTab.bind(this);
    }

    componentDidMount() {
      document.addEventListener(`keydown`, this._handleEscPress);
    }

    render() {
      return (
        <Component
          {...this.props}
          currentTab={this.state.currentTab}
          onTabClick={this._handleTabClick}
          renderTab={this._renderTab}
        />
      );
    }

    componentWillUnmount() {
      document.removeEventListener(`keydown`, this._handleEscPress);
    }

    _handleEscPress(evt) {
      isEscEvent(evt, this.props.onMoviePageEscPress);
    }

    _handleTabClick(tabName) {
      this.setState({
        currentTab: tabName,
      });
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
  }

  WithTabs.propTypes = {
    film: pt.film,
    reviews: pt.reviews,
    onMoviePageEscPress: pt.func,
  };

  return WithTabs;
};

export default withTabs;
