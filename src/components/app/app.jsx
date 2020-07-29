import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";

import pt from "../../prop-types-cover.js";

import MoviePage from "../movie-page/movie-page.jsx";
import withReviews from "../../hocs/with-reviews.jsx";

const MoviePageWrapped = withReviews(MoviePage);

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
          <MoviePageWrapped
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
