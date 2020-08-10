import React from "react";

import pt from "../../prop-types-cover.js";

import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/screen/screen.js";
import {getCurrentFilm, getCurrentTab} from "../../reducer/screen/selectors.js";
import {getFilmsLikeCurrentFilm} from "../../reducer/films/selectors.js";
import {getUserInfo} from "../../reducer/user/selectors.js";
import {getReviews} from "../../reducer/data/selectors.js";
import {Operation} from "../../reducer/data/data.js";

import {MovieTab} from "../../utils/const.js";

import TabsNavigation from "../tabs-navigation/tabs-navigation.jsx";
import Overview from "../overview/overview.jsx";
import Details from "../details/details.jsx";
import Reviews from "../reviews/reviews.jsx";
import Films from "../films/films.jsx";

class MoviePage extends React.PureComponent {
  render() {
    const {
      userInfo,
      film,
      similarFilms,
      currentTab,
      onTabClick,
      onPlayButtonClick,
      onFilmCardClick,
      onLogoLinkClick,
    } = this.props;

    const {
      filmTitle,
      release,
      genre,
      image,
    } = film;

    return (
      <React.Fragment>
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img
                src={image.background}
                alt={filmTitle}
                style={{backgroundColor: image.backgroundColor}}
              />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header movie-card__head">
              <div className="logo">
                <a
                  onClick={onLogoLinkClick}
                  href="#"
                  className="logo__link"
                >
                  <span className="logo__letter logo__letter--1">W</span>
                  <span className="logo__letter logo__letter--2">T</span>
                  <span className="logo__letter logo__letter--3">W</span>
                </a>
              </div>

              {(userInfo && userInfo.isAuthorized) && (
                <div className="user-block">
                  <div className="user-block__avatar">
                    <img
                      src={userInfo.avatar}
                      alt="User avatar"
                      width="63" height="63"
                    />
                  </div>
                </div>
              )}
            </header>

            <div className="movie-card__wrap">
              <div className="movie-card__desc">
                <h2 className="movie-card__title">
                  {filmTitle}
                </h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">
                    {genre}
                  </span>
                  <span className="movie-card__year">
                    {release}
                  </span>
                </p>

                <div className="movie-card__buttons">
                  <button
                    onClick={onPlayButtonClick}
                    className="btn btn--play movie-card__button"
                    type="button"
                  >
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>
                  <button className="btn btn--list movie-card__button" type="button">
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                    <span>My list</span>
                  </button>
                  <a href="add-review.html" className="btn movie-card__button">Add review</a>
                </div>
              </div>
            </div>
          </div>

          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <div className="movie-card__poster movie-card__poster--big">
                <img
                  src={image.poster}
                  alt={`${filmTitle} poster`}
                  width="218" height="327"
                />
              </div>

              <div className="movie-card__desc">

                <TabsNavigation
                  currentTab={currentTab}
                  onTabClick={onTabClick}
                />

                {this._renderTab(currentTab)}

              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          {(similarFilms && similarFilms.length !== 0) && (
            <section className="catalog catalog--like-this">
              <h2 className="catalog__title">More like this</h2>

              <Films
                films={similarFilms}
                onFilmCardClick={onFilmCardClick}
              />
            </section>
          )}

          <footer className="page-footer">
            <div className="logo">
              <a
                onClick={onLogoLinkClick}
                href="#"
                className="logo__link logo__link--light"
              >
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="copyright">
              <p>© 2019 What to watch Ltd.</p>
            </div>
          </footer>
        </div>
      </React.Fragment>
    );
  }

  _renderTab(tab) {
    const {
      release,
      runtime,
      genre,
      rating,
      description,
      director,
      starring,
    } = this.props.film;

    switch (tab) {
      case MovieTab.OVERVIEW:
        return (
          <Overview
            rating={rating}
            description={description}
            director={director}
            starring={starring}
          />
        );

      case MovieTab.DETAILS:
        return (
          <Details
            release={release}
            runtime={runtime}
            genre={genre}
            director={director}
            starring={starring}
          />
        );

      case MovieTab.REVIEWS:
        return this.props.reviews && (
          <Reviews
            reviews={this.props.reviews}
          />
        );

      default:
        return null;
    }
  }
}

MoviePage.propTypes = {
  userInfo: pt.userInfo,
  film: pt.film,
  similarFilms: pt.films,
  reviews: pt.reviews,
  currentTab: pt.currentTab,
  onTabClick: pt.func,
  onPlayButtonClick: pt.func,
  onFilmCardClick: pt.func,
  onLogoLinkClick: pt.func,
};

const mapStateToProps = (state) => ({
  userInfo: getUserInfo(state),
  film: getCurrentFilm(state),
  similarFilms: getFilmsLikeCurrentFilm(state),
  reviews: getReviews(state),
  currentTab: getCurrentTab(state),
});

const mapDispatchToProps = (dispatch) => ({
  onPlayButtonClick() {
    dispatch(ActionCreator.setPlayerScreen());
  },
  onTabClick(tab) {
    dispatch(ActionCreator.switchMovieTab(tab));
  },
  onFilmCardClick(film) {
    dispatch(ActionCreator.setMoviePageScreen(film));
    dispatch(Operation.loadReviews(film.id));
  },
  onLogoLinkClick() {
    dispatch(ActionCreator.setMainPageScreen());
  },
});

export {MoviePage};
export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
