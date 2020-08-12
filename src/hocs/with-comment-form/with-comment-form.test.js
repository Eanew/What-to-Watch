import React from "react";
import renderer from "react-test-renderer";
import {Switch, Route, Router} from "react-router-dom";
import history from "../../history.js";

import ReviewPage from "../../components/review-page/review-page.jsx";
import withCommentForm from "./with-comment-form.js";

import {userInfo, film} from "../../test-mock.js";

const ReviewPageWrapped = withCommentForm(ReviewPage);

it(`Should ReviewPageWrappedComponent render corrently`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <Switch>
          <Route exact path="">
            <ReviewPageWrapped
              userInfo={userInfo}
              film={film}
              isFetching={false}
              onMoviePageClick={() => {}}
              onLogoLinkClick={() => {}}
              onAvatarClick={() => {}}
              onSubmit={() => {}}
            />
          </Route>
        </Switch>
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
