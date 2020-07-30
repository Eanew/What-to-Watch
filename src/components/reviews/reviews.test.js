import React from "react";
import renderer from "react-test-renderer";
import Reviews from "./reviews.jsx";

import {reviews} from "../../mocks/test-mock.js";

it(`Should ReviewsComponent render correctly`, () => {
  const tree = renderer.create(
      <Reviews
        reviews={reviews}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
