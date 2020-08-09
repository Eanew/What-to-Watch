import React from "react";
import renderer from "react-test-renderer";
import TabsNavigation from "./tabs-navigation.jsx";

import {MovieTab} from "../../utils/const.js";

it(`Should TabsNavigationComponent render correctly`, () => {
  const tree = renderer.create(
      <TabsNavigation
        currentTab={MovieTab.REVIEWS}
        onTabClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
