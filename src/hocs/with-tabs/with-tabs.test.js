import React from "react";
import renderer from "react-test-renderer";

import TabsNavigation from "../../components/tabs-navigation/tabs-navigation.jsx";
import withTabs from "./with-tabs.js";

import {film, reviews} from "../../mocks/test-mock.js";

const TabsNavigationWrapped = withTabs(TabsNavigation);

it(`Should TabsNavigationWrappedComponent render corrently`, () => {
  const tree = renderer.create(
      <TabsNavigationWrapped
        film={film}
        reviews={reviews}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
