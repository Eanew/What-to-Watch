import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";

import pt from "../../prop-types-cover.js";

import MoviePage from "../movie-page/movie-page.jsx";
import withTabs from "../../hocs/with-tabs.js";

const MoviePageWrapped = withTabs(MoviePage);

const App = (props) => {
  const {
    promo,
    films,
    reviews,
    renderApp,
    onFilmCardClick,
  } = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {renderApp(promo, films, reviews, onFilmCardClick)}
        </Route>
        <Route exact path="/details">
          <MoviePageWrapped
            film={films[0]}
            reviews={reviews}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  promo: pt.promo,
  films: pt.films,
  reviews: pt.reviews,
  renderApp: pt.func,
  onFilmCardClick: pt.func,
};

export default App;
