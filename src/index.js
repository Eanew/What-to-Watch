import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app/app.jsx";
import withMoviePage from "./hocs/with-movie-page.js";

const AppWrapped = withMoviePage(App);

import films from "./mocks/films.js";
import promo from "./mocks/promo.js";
import reviews from "./mocks/reviews.js";

ReactDOM.render(
    <AppWrapped
      promo={promo}
      films={films}
      reviews={reviews}
    />,
    document.querySelector(`#root`)
);
