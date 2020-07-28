import React from "react";
import pt from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";

import Main from "../main/main.jsx";
import Details from "../details/details.jsx";
import withReviews from "../../hocs/with-reviews.jsx";

const DetailsWrapped = withReviews(Details);

const App = (props) => {
  const {
    promo,
    films,
    renderApp,
    onFilmCardClick,
  } = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {renderApp(promo, films, onFilmCardClick)}
        </Route>
        <Route exact path="/details">
          <DetailsWrapped
            film={films[0]}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  promo: Main.propTypes.promo,
  films: Main.propTypes.films,
  renderApp: pt.func.isRequired,
  onFilmCardClick: Main.propTypes.onFilmCardClick,
};

export default App;
