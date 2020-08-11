import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";

import pt from "../../prop-types-cover.js";

import {Screen} from "../../utils/const.js";

import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/screen/screen.js";
import {getCurrentScreen, getLastScreen, getCurrentFilm} from "../../reducer/screen/selectors.js";
import {getPromo, getFilms} from "../../reducer/data/selectors.js";
import {getUserInfo} from "../../reducer/user/selectors.js";
import {Operation} from "../../reducer/user/user.js";

import SignIn from "../sign-in/sign-in.jsx";
import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import Player from "../player/player.jsx";
import withFullVideo from "../../hocs/with-full-video/with-full-video.js";

const PlayerWrapped = withFullVideo(Player);

class App extends React.PureComponent {
  render() {
    const handleSubmit = (authData) => this.props.onSignInSubmit(authData, this.props.lastScreen);

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/sign-in">
            <SignIn
              onLogoLinkClick={this.props.onLogoLinkClick}
              onSubmit={handleSubmit}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  _renderApp() {
    const {
      userInfo,
      promo,
      films,
      screen,
      lastScreen,
      currentFilm,
      onLogoLinkClick,
      onPlayButtonClick,
      onExitButtonClick,
      onSignInLinkClick,
      onSignInSubmit,
    } = this.props;

    switch (screen) {
      case Screen.MAIN:
        return (promo && films) && (
          <Main
            userInfo={userInfo}
            promo={promo}
            onPlayButtonClick={onPlayButtonClick}
            onMyListButtonClick={() => {}}
            onSignInLinkClick={onSignInLinkClick}
          />
        );

      case Screen.SIGN_IN:
        const handleSubmit = (authData) => onSignInSubmit(authData, lastScreen);

        return (
          <SignIn
            onLogoLinkClick={onLogoLinkClick}
            onSubmit={handleSubmit}
          />
        );

      case Screen.MOVIE_PAGE:
        return (
          <MoviePage />
        );

      case Screen.PLAYER:
        const handleExitButtonClick = () => onExitButtonClick(lastScreen);

        return (
          <PlayerWrapped
            film={currentFilm}
            onExitButtonClick={handleExitButtonClick}
          />
        );

      default:
        return null;
    }
  }
}

App.propTypes = {
  userInfo: pt.userInfo,
  promo: pt.film,
  films: pt.films,
  screen: pt.screen,
  lastScreen: pt.screen,
  currentFilm: pt.film,
  onLogoLinkClick: pt.func,
  onPlayButtonClick: pt.func,
  onExitButtonClick: pt.func,
  onSignInLinkClick: pt.func,
  onSignInSubmit: pt.func,
};

const mapStateToProps = (state) => ({
  userInfo: getUserInfo(state),
  promo: getPromo(state),
  films: getFilms(state),
  screen: getCurrentScreen(state),
  lastScreen: getLastScreen(state),
  currentFilm: getCurrentFilm(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLogoLinkClick() {
    dispatch(ActionCreator.setMainPageScreen());
  },
  onPlayButtonClick() {
    dispatch(ActionCreator.setPlayerScreen());
  },
  onExitButtonClick(lastScreen) {
    dispatch(lastScreen === Screen.MOVIE_PAGE
      ? ActionCreator.setMoviePageScreen()
      : ActionCreator.setMainPageScreen());
  },
  onSignInLinkClick() {
    dispatch(ActionCreator.setSignInScreen());
  },
  onSignInSubmit(authData, lastScreen) {
    dispatch(Operation.login(authData)).then(() => dispatch(lastScreen === Screen.MOVIE_PAGE
      ? ActionCreator.setMoviePageScreen()
      : ActionCreator.setMainPageScreen()));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
