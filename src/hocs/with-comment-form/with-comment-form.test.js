import React from "react";
import renderer from "react-test-renderer";

import ReviewPage from "../../components/review-page/review-page.jsx";
import withCommentForm from "./with-comment-form.js";

import {userInfo, film} from "../../test-mock.js";

const ReviewPageWrapped = withCommentForm(ReviewPage);

it(`Should ReviewPageWrappedComponent render corrently`, () => {
  const tree = renderer.create(
      <ReviewPageWrapped
        userInfo={userInfo}
        film={film}
        isFetching={false}
        onMoviePageClick={() => {}}
        onLogoLinkClick={() => {}}
        onAvatarClick={() => {}}
        onSubmit={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
