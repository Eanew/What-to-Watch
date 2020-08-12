import React from "react";
import renderer from "react-test-renderer";
import ReviewPage from "./review-page.jsx";

import {userInfo, film} from "../../test-mock.js";

it(`Should ReviewPageComponent render correctly`, () => {
  const tree = renderer.create(
      <ReviewPage
        userInfo={userInfo}
        film={film}
        starsCount={5}
        isSubmitButtonEnabled={true}
        onMoviePageClick={() => {}}
        onLogoLinkClick={() => {}}
        onStarsChange={() => {}}
        onCommentInput={() => {}}
        onSubmit={() => {}}
        onAvatarClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
