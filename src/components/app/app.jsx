import React from "react";

import {Main} from "../main/main.jsx";

export const App = (props) => {
  const {promoName, promoGenre, promoRelease, filmsTitles} = props;

  return <Main
    promoName={promoName}
    promoGenre={promoGenre}
    promoRelease={promoRelease}
    filmsTitles={filmsTitles}
  />;
};

App.propTypes = Main.propTypes;
