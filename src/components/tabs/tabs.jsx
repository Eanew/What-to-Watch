import React from "react";

import pt from "../../prop-types-cover.js";

import {Tab} from "../../utils/const.js";

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
          {Object.values(Tab).map((tab) => (
            <li
              key={`tab-${tab}`}
              className={`movie-nav__item${tab === currentTab ? ` movie-nav__item--active` : ``}`}
            >
              <a
                href="#"
                className="movie-nav__link"
                data-tab={tab.toLowerCase()}
                onClick={handleTabClick}
              >
                {tab}
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
