import React from "react";
import ReactDOM from "react-dom";

import {App} from "./components/app/app.jsx";

const init = () => {
  const promo = {
    name: `The Grand Budapest Hotel`,
    genre: `Drama`,
    release: `2014`,
  };

  ReactDOM.render(
      <App
        promoName={promo.name}
        promoGenre={promo.genre}
        promoRelease={promo.release}
      />,
      document.querySelector(`#root`)
  );
};

init();
