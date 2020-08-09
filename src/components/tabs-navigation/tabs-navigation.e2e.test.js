import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TabsNavigation from "./tabs-navigation.jsx";

import {MovieTab} from "../../utils/const.js";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Tabs navigation`, () => {
  it(`Should tab link click returns tab name`, () => {
    const handleTabClick = jest.fn();
    const preventDefault = jest.fn();

    const tabs = shallow(
        <TabsNavigation
          currentTab={MovieTab.OVERVIEW}
          onTabClick={handleTabClick}
        />
    );

    const tabsLinks = tabs.find(`.movie-nav__link`);

    tabsLinks.forEach((link) => {
      link.simulate(`click`, {
        preventDefault,
      });
    });

    expect(preventDefault).toHaveBeenCalledTimes(tabsLinks.length);

    expect(handleTabClick.mock.calls[0][0]).toBe(MovieTab.OVERVIEW);
    expect(handleTabClick.mock.calls[1][0]).toBe(MovieTab.DETAILS);
    expect(handleTabClick.mock.calls[2][0]).toBe(MovieTab.REVIEWS);
  });
});
