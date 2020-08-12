import React from "react";
import {Link} from "react-router-dom";
import {AppRoute, ID_PATH, MovieTab} from "../../utils/const.js";
import history from "../../history.js";

import pt from "../../prop-types-cover.js";

import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/screen/screen.js";
import {getCurrentTab} from "../../reducer/screen/selectors.js";
import {getFilmsLikeCurrentFilm} from "../../reducer/films/selectors.js";
import {getUserInfo} from "../../reducer/user/selectors.js";
import {getCurrentFilm, getReviews} from "../../reducer/data/selectors.js";
import {Operation} from "../../reducer/data/data.js";

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
      onSignInLinkClick,
      onAddReviewClick,
      onMyListButtonClick,
      onAvatarClick,
    } = this.props;

    const {
      id,
      filmTitle,
      release,
      genre,
      image,
      isFavorite,
    } = film;

    const handleMyListButtonClick = () => onMyListButtonClick(id, isFavorite);

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
                <Link
                  onClick={onLogoLinkClick}
                  className="logo__link"
                  to={AppRoute.MAIN}
                >
                  <span className="logo__letter logo__letter--1">W</span>
                  <span className="logo__letter logo__letter--2">T</span>
                  <span className="logo__letter logo__letter--3">W</span>
                </Link>
              </div>

              <div className="user-block">
                {userInfo.isAuthorized
                  ? (
                    <div className="user-block__avatar">
                      <img
                        onClick={onAvatarClick}
                        src={userInfo.avatar}
                        alt="User avatar"
                        width="63" height="63"
                      />
                    </div>
                  ) : (
                    <Link
                      onClick={onSignInLinkClick}
                      className="user-block__link"
                      to={AppRoute.SIGN_IN}
                    >
                      Sign in
                    </Link>
                  )
                }
              </div>
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
                  <Link
                    onClick={onPlayButtonClick}
                    className="btn btn--play movie-card__button"
                    to={AppRoute.PLAYER.replace(ID_PATH, id)}
                  >
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </Link>
                  <button
                    onClick={handleMyListButtonClick}
                    className="btn btn--list movie-card__button"
                    type="button"
                  >
                    {isFavorite ? (
                      <svg viewBox="0 0 18 14" width="18" height="14">
                        <use xlinkHref="#in-list"></use>
                      </svg>
                    ) : (
                      <svg viewBox="0 0 19 20" width="19" height="20">
                        <use xlinkHref="#add"></use>
                      </svg>
                    )}
                    <span>My list</span>
                  </button>
                  {userInfo.isAuthorized && (
                    <Link
                      onClick={onAddReviewClick}
                      className="btn movie-card__button"
                      to={AppRoute.REVIEW.replace(ID_PATH, id)}
                    >
                      Add review
                    </Link>
                  )}
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
              <Link
                onClick={onLogoLinkClick}
                className="logo__link logo__link--light"
                to={AppRoute.MAIN}
              >
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
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
  onSignInLinkClick: pt.func,
  onAddReviewClick: pt.func,
  onMyListButtonClick: pt.func,
  onAvatarClick: pt.func,
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
    history.push(AppRoute.MOVIE_PAGE.replace(ID_PATH, film.id));
  },
  onLogoLinkClick() {
    dispatch(ActionCreator.setMainPageScreen());
  },
  onSignInLinkClick() {
    dispatch(ActionCreator.setSignInScreen());
  },
  onAddReviewClick() {
    dispatch(ActionCreator.setReviewPageScreen());
  },
  onMyListButtonClick(filmId, isFavorite) {
    dispatch(Operation.switchIsFavorite(filmId, isFavorite));
  },
  onAvatarClick() {
    dispatch(Operation.loadFavorites()).then(() => history.push(AppRoute.MY_LIST));
  },
});

export {MoviePage};
export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
