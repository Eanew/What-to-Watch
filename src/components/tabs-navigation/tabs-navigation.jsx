import React from "react";

import pt from "../../prop-types-cover.js";

import {Tab} from "../../utils/const.js";
import {toCapitalWord} from "../../utils/common.js";

const Tabs = (props) => {
  const {
    currentTab,
    renderTab,
    onTabClick,
  } = props;

  const handleTabClick = (evt) => {
    evt.preventDefault();
    onTabClick(evt.target.dataset.tab);
  };

  return (
    <React.Fragment>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {Object.values(Tab).map((tabName) => (
            <li
              key={`tab-${tabName}`}
              className={`movie-nav__item${tabName === currentTab ? ` movie-nav__item--active` : ``}`}
            >
              <a
                href="#"
                className="movie-nav__link"
                data-tab={tabName}
                onClick={handleTabClick}
              >
                {toCapitalWord(tabName)}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {renderTab(currentTab)}
    </React.Fragment>
  );
};

Tabs.propTypes = {
  currentTab: pt.currentTab,
  renderTab: pt.func,
  onTabClick: pt.func,
};

export default Tabs;
