import React from "react";

import Main from "../main/main.jsx";

const App = (props) => {
  const {
    promo,
    filmsTitles,
    onFilmTitleClick,
  } = props;

  return <Main
    promo={promo}
    filmsTitles={filmsTitles}
    onFilmTitleClick={onFilmTitleClick}
  />;
};

App.propTypes = Main.propTypes;

export default App;
