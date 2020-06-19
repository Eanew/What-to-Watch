import React from "react";

import {Main} from "../main/main.jsx";

export const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {promoName, promoGenre, promoRelease} = props;

  return <Main
    promoName={promoName}
    promoGenre={promoGenre}
    promoRelease={promoRelease}
  />;
};
