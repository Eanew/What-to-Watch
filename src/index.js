import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app/app.jsx";
import withFilmPopup from "./hocs/with-film-popup.js";

const AppWrapped = withFilmPopup(App);

import films from "./mocks/films.js";
import promo from "./mocks/promo.js";

ReactDOM.render(
    <AppWrapped
      promo={promo}
      films={films}
    />,
    document.querySelector(`#root`)
);
