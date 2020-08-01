import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";

import {reducer} from "./reducer.js";

import App from "./components/app/app.jsx";
import withMoviePage from "./hocs/with-movie-page.js";

import films from "./mocks/films.js";
import promo from "./mocks/promo.js";
import reviews from "./mocks/reviews.js";

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f);

const AppWrapped = withMoviePage(App);

ReactDOM.render(
    <Provider store={store}>
      <AppWrapped
        promo={promo}
        films={films}
        reviews={reviews}
      />
    </Provider>,
    document.querySelector(`#root`)
);
