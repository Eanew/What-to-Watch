import React from "react";
import renderer from "react-test-renderer";

import ShowMoreButton from "./show-more-button.jsx";

it(`Should ShowMoreButtonComponent render correctly`, () => {
  const tree = renderer.create(
      <ShowMoreButton
        onClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
