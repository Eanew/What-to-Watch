import React from "react";

import pt from "../../prop-types-cover.js";

const ShowMoreButton = (props) => {
  const {
    onClick,
  } = props;

  return (
    <div className="catalog__more">
      <button
        onClick={onClick}
        className="catalog__button"
        type="button"
      >
        Show more
      </button>
    </div>
  );
};

ShowMoreButton.propTypes = {
  onClick: pt.func,
};

export default ShowMoreButton;
