import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";

import {reducer} from "./reducer.js";

import App from "./components/app/app.jsx";

import films from "./mocks/films.js";
import promo from "./mocks/promo.js";
import reviews from "./mocks/reviews.js";

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f);

ReactDOM.render(
    <Provider store={store}>
      <App
        promo={promo}
        films={films}
        reviews={reviews}
      />
    </Provider>,
    document.querySelector(`#root`)
);
