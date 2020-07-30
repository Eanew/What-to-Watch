import React from "react";
import renderer from "react-test-renderer";
import Tabs from "./tabs.jsx";

import {Tab} from "../../utils/const.js";

import {reviews} from "../../mocks/test-mock.js";

import Reviews from "../reviews/reviews.jsx";

it(`Should TabsComponent render Reviews`, () => {
  const renderTab = (tab) => tab === Tab.REVIEWS && (
    <Reviews
      reviews={reviews}
    />
  );

  const tree = renderer.create(
      <Tabs
        currentTab={Tab.REVIEWS}
        renderTab={renderTab}
        onTabClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
