import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";

import {Screen} from "../../utils/const.js";

import Main from "../main/main.jsx";
import Details from "../details/details.jsx";

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      screen: Screen.MAIN,
      currentFilm: null,
    };
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/details">
            <Details
              film={this.props.films[0]}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  _renderApp() {
    const {
      promo,
      films,
    } = this.props;

    const {
      screen,
      currentFilm,
    } = this.state;

    switch (screen) {
      case Screen.MAIN:
        return <Main
          promo={promo}
          films={films}
          onFilmCardClick={(film) => {
            this.setState({
              screen: Screen.DETAILS,
              currentFilm: film,
            });
          }}
        />;

      case Screen.DETAILS:
        return <Details
          film={currentFilm}
        />;

      default:
        return null;
    }
  }
}

App.propTypes = {
  promo: Main.propTypes.promo,
  films: Main.propTypes.films,
};
