import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";

import {Screen} from "../../utils/const.js";

import Main from "../main/main.jsx";
import Details from "../details/details.jsx";

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      screen: Screen.MAIN,
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
            <Details />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  _renderApp() {
    const {
      promo,
      films,
      onFilmCardClick,
    } = this.props;

    const {screen} = this.state;

    switch (screen) {
      case Screen.MAIN:
        return <Main
          promo={promo}
          films={films}
          onFilmCardClick={() => {
            onFilmCardClick();
            this.setState({
              screen: Screen.DETAILS,
            });
          }}
        />;

      case Screen.DETAILS:
        return <Details />;

      default:
        return null;
    }
  }
}

App.propTypes = Main.propTypes;

export default App;
