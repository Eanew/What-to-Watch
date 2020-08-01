import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";

import pt from "../../prop-types-cover.js";

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
  promo: pt.promo,
  films: pt.films,
  renderApp: pt.func,
  onFilmCardClick: pt.func,
};

export default App;
