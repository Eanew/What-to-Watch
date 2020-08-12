import React from "react";
import {Switch, Route, Router} from "react-router-dom";
import history from "../../history.js";

import pt from "../../prop-types-cover.js";

import {AppRoute, ID_PATH, Screen} from "../../utils/const.js";
import PrivateRoute from "../private-route/private-route.jsx";

import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/screen/screen.js";
import {getCurrentScreen, getLastScreen} from "../../reducer/screen/selectors.js";
import {getPromo, getFilms, getFetchingStatus, getFavorites, getCurrentFilm} from "../../reducer/data/selectors.js";
import {getUserInfo} from "../../reducer/user/selectors.js";
import {Operation as UserOperation} from "../../reducer/user/user.js";
import {Operation as DataOperation} from "../../reducer/data/data.js";

import SignIn from "../sign-in/sign-in.jsx";
import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import MyList from "../my-list/my-list.jsx";

import Player from "../player/player.jsx";
import withFullVideo from "../../hocs/with-full-video/with-full-video.js";

import ReviewPage from "../review-page/review-page.jsx";
import withCommentForm from "../../hocs/with-comment-form/with-comment-form.js";

const PlayerWrapped = withFullVideo(Player);
const ReviewPageWrapped = withCommentForm(ReviewPage);

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this._renderSignInPage = this._renderSignInPage.bind(this);
    this._renderMyListPage = this._renderMyListPage.bind(this);
    this._renderReviewPage = this._renderReviewPage.bind(this);
    this._handlePlayButtonClick = this._handlePlayButtonClick.bind(this);
    this._handlePlayerExitButtonClick = this._handlePlayerExitButtonClick.bind(this);
    this._handleSignInSubmit = this._handleSignInSubmit.bind(this);
    this._handleReviewSubmit = this._handleReviewSubmit.bind(this);
  }

  render() {
    const {
      userInfo,
      promo,
      films,
      currentFilm,
      onSignInLinkClick,
      onMyListButtonClick,
      onAvatarClick,
    } = this.props;

    return (
      <Router history={history}>
        <Switch>
          <Route exact path={AppRoute.MAIN}>
            {(promo && films) && (
              <Main
                userInfo={userInfo}
                promo={promo}
                onPlayButtonClick={this._handlePlayButtonClick}
                onSignInLinkClick={onSignInLinkClick}
                onMyListButtonClick={onMyListButtonClick}
                onAvatarClick={onAvatarClick}
              />
            )}
          </Route>

          <Route exact path={AppRoute.MOVIE_PAGE}>
            {currentFilm && (
              <MoviePage />
            )}
          </Route>

          <Route exact path={AppRoute.PLAYER}>
            {currentFilm && (
              <PlayerWrapped
                film={currentFilm}
                onExitButtonClick={this._handlePlayerExitButtonClick}
              />
            )}
          </Route>

          <PrivateRoute
            exact
            path={AppRoute.SIGN_IN}
            userInfo={userInfo}
            render={this._renderSignInPage}
          />

          <PrivateRoute
            exact
            path={AppRoute.MY_LIST}
            userInfo={userInfo}
            render={this._renderMyListPage}
          />

          <PrivateRoute
            exact
            path={AppRoute.REVIEW}
            userInfo={userInfo}
            render={this._renderReviewPage}
          />

          <Route path={AppRoute.MAIN}>
            <div style={{
              fontSize: `50 px`,
              marginTop: `150 px`,
              textAlign: `center`,
            }}>Page not found.</div>
          </Route>
        </Switch>
      </Router>
    );
  }

  _renderSignInPage() {
    return (
      <SignIn
        onLogoLinkClick={this.props.onLogoLinkClick}
        onSubmit={this._handleSignInSubmit}
      />
    );
  }

  _renderMyListPage() {
    const {
      userInfo,
      favorites,
      onFilmCardClick,
      onLogoLinkClick,
    } = this.props;

    return favorites && (
      <MyList
        userInfo={userInfo}
        films={favorites}
        onFilmCardClick={onFilmCardClick}
        onLogoLinkClick={onLogoLinkClick}
      />
    );
  }

  _renderReviewPage() {
    const {
      userInfo,
      currentFilm,
      onMoviePageClick,
      onLogoLinkClick,
      isDataFetching,
      onAvatarClick,
    } = this.props;

    return currentFilm && (
      <ReviewPageWrapped
        userInfo={userInfo}
        film={currentFilm}
        onMoviePageClick={onMoviePageClick}
        onLogoLinkClick={onLogoLinkClick}
        isFetching={isDataFetching}
        onAvatarClick={onAvatarClick}
        onSubmit={this._handleReviewSubmit}
      />
    );
  }

  _handlePlayButtonClick() {
    this.props.onPlayButtonClick(this.props.promo.id);
  }

  _handlePlayerExitButtonClick() {
    this.props.onExitButtonClick(this.props.lastScreen);
  }

  _handleSignInSubmit(authData) {
    this.props.onSignInSubmit(authData, this.props.lastScreen, this.props.currentFilm);
  }

  _handleReviewSubmit(review) {
    this.props.onReviewSubmit(review, this.props.currentFilm.id);
  }
}

App.propTypes = {
  userInfo: pt.userInfo,
  promo: pt.film,
  films: pt.films,
  favorites: pt.films,
  screen: pt.screen,
  lastScreen: pt.screen,
  currentFilm: pt.film,
  isDataFetching: pt.bool,
  onLogoLinkClick: pt.func,
  onPlayButtonClick: pt.func,
  onMoviePageClick: pt.func,
  onExitButtonClick: pt.func,
  onSignInLinkClick: pt.func,
  onMyListButtonClick: pt.func,
  onSignInSubmit: pt.func,
  onReviewSubmit: pt.func,
  onAvatarClick: pt.func,
  onFilmCardClick: pt.func,
};

const mapStateToProps = (state) => ({
  userInfo: getUserInfo(state),
  promo: getPromo(state),
  films: getFilms(state),
  favorites: getFavorites(state),
  screen: getCurrentScreen(state),
  lastScreen: getLastScreen(state),
  currentFilm: getCurrentFilm(state),
  isDataFetching: getFetchingStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLogoLinkClick() {
    dispatch(ActionCreator.setMainPageScreen());
  },
  onPlayButtonClick(filmId) {
    history.push(AppRoute.PLAYER.replace(ID_PATH, filmId));
    dispatch(ActionCreator.setPlayerScreen());
  },
  onMoviePageClick() {
    dispatch(ActionCreator.setMoviePageScreen());
  },
  onExitButtonClick(lastScreen) {
    dispatch(lastScreen === Screen.MOVIE_PAGE
      ? ActionCreator.setMoviePageScreen()
      : ActionCreator.setMainPageScreen());
  },
  onSignInLinkClick() {
    dispatch(ActionCreator.setSignInScreen());
  },
  onSignInSubmit(authData, lastScreen, filmId) {
    dispatch(UserOperation.login(authData)).then(() => {
      if (lastScreen === Screen.MOVIE_PAGE) {
        dispatch(ActionCreator.setMoviePageScreen());
        history.push(AppRoute.MOVIE_PAGE.replace(ID_PATH, filmId));
      } else {
        dispatch(ActionCreator.setMainPageScreen());
        history.push(AppRoute.MAIN);
      }
    });
  },
  onReviewSubmit(review, filmId) {
    dispatch(DataOperation.postReview(review, filmId)).then(() => {
      dispatch(ActionCreator.setMoviePageScreen());
      history.push(AppRoute.MOVIE_PAGE.replace(ID_PATH, filmId));
    });
  },
  onMyListButtonClick(filmId, isFavorite) {
    dispatch(DataOperation.switchIsFavorite(filmId, isFavorite));
  },
  onAvatarClick() {
    dispatch(DataOperation.loadFavorites()).then(() => history.push(AppRoute.MY_LIST));
  },
  onFilmCardClick(film) {
    dispatch(ActionCreator.setMoviePageScreen(film));
    dispatch(DataOperation.loadReviews(film.id));
    history.push(AppRoute.MOVIE_PAGE.replace(ID_PATH, film.id));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
