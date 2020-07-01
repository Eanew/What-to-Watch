import React from "react";

import Main from "../main/main.jsx";

const headerClickHandler = () => {};

const App = (props) => {
  const {
    promoName,
    promoGenre,
    promoRelease,
    filmsTitles,
  } = props;

  return <Main
    promoName={promoName}
    promoGenre={promoGenre}
    promoRelease={promoRelease}
    filmsTitles={filmsTitles}
    onHeaderClick={headerClickHandler}
  />;
};

App.propTypes = Main.propTypes;

export default App;
