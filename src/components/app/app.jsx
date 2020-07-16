import React from "react";

import Main from "../main/main.jsx";

const App = (props) => {
  const {
    promo,
    films,
    onFilmCardClick,
  } = props;

  return <Main
    promo={promo}
    films={films}
    onFilmCardClick={onFilmCardClick}
  />;
};

App.propTypes = Main.propTypes;

export default App;
