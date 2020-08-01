import React from "react";
import renderer from "react-test-renderer";
import TabsNavigation from "./tabs-navigation.jsx";

import {Tab} from "../../utils/const.js";

import {reviews} from "../../mocks/test-mock.js";

import Reviews from "../reviews/reviews.jsx";

it(`Should TabsNavigationComponent render Reviews`, () => {
  const renderTab = (tab) => tab === Tab.REVIEWS && (
    <Reviews
      reviews={reviews}
    />
  );

  const tree = renderer.create(
      <TabsNavigation
        currentTab={Tab.REVIEWS}
        renderTab={renderTab}
        onTabClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
