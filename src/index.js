import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app/app.jsx";

import films from "./mocks/films.js";
import promo from "./mocks/promo.js";

ReactDOM.render(
    <App
      promo={promo}
      films={films}
    />,
    document.querySelector(`#root`)
);
