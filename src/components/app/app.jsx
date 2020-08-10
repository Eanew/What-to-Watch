import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";

import pt from "../../prop-types-cover.js";

import {Screen} from "../../utils/const.js";

import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/screen/screen.js";
import {getCurrentScreen, getLastScreen, getCurrentFilm} from "../../reducer/screen/selectors.js";
import {getUserInfo} from "../../reducer/user/selectors.js";
import {getPromo} from "../../reducer/data/selectors.js";

import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import Player from "../player/player.jsx";
import withFullVideo from "../../hocs/with-full-video/with-full-video.js";

const PlayerWrapped = withFullVideo(Player);

class App extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/details">
            <MoviePage />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  _renderApp() {
    const {
      userInfo,
      screen,
      lastScreen,
      currentFilm,
      promo,
      onPlayButtonClick,
      onExitButtonClick,
    } = this.props;

    switch (screen) {
      case Screen.MAIN:
        return (userInfo && promo) && (
          <Main
            userInfo={userInfo}
            promo={promo}
            onPlayButtonClick={onPlayButtonClick}
            onMyListButtonClick={() => {}}
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
  screen: pt.screen,
  lastScreen: pt.screen,
  currentFilm: pt.film,
  promo: pt.film,
  onPlayButtonClick: pt.func,
  onExitButtonClick: pt.func,
};

const mapStateToProps = (state) => ({
  userInfo: getUserInfo(state),
  screen: getCurrentScreen(state),
  lastScreen: getLastScreen(state),
  currentFilm: getCurrentFilm(state),
  promo: getPromo(state),
});

const mapDispatchToProps = (dispatch) => ({
  onPlayButtonClick() {
    dispatch(ActionCreator.setPlayerScreen());
  },
  onExitButtonClick(lastScreen) {
    dispatch(lastScreen === Screen.MOVIE_PAGE ? ActionCreator.setMoviePageScreen() : ActionCreator.setMainPageScreen());
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
