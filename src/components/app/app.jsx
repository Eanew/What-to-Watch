import React from "react";

import Main from "../main/main.jsx";

const App = (props) => {
  const {
    promo,
    films,
    filmsHandlers,
  } = props;

  return <Main
    promo={promo}
    films={films}
    filmsHandlers={filmsHandlers}
  />;
};

App.propTypes = Main.propTypes;

export default App;
