import React from "react";
import renderer from "react-test-renderer";
import TabsNavigation from "./tabs-navigation.jsx";

import {Tab} from "../../utils/const.js";

it(`Should TabsNavigationComponent render correctly`, () => {
  const tree = renderer.create(
      <TabsNavigation
        currentTab={Tab.REVIEWS}
        onTabClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
