import React from "react";

import pt from "../../prop-types-cover.js";

import {MovieTab} from "../../utils/const.js";

const TabsNavigation = (props) => {
  const {
    currentTab,
    onTabClick,
  } = props;

  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {Object.values(MovieTab).map((tabName) => (
          <li
            key={`tab-${tabName}`}
            className={`movie-nav__item${tabName === currentTab ? ` movie-nav__item--active` : ``}`}
          >
            <a
              href="#"
              className="movie-nav__link"
              onClick={(evt) => {
                evt.preventDefault();
                onTabClick(tabName);
              }}
            >
              {tabName}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

TabsNavigation.propTypes = {
  currentTab: pt.currentTab,
  onTabClick: pt.func,
};

export default TabsNavigation;
